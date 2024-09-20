import { NextResponse } from 'next/server'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Key is missing')
  throw new Error('Supabase configuration is incomplete')
}

const supabase = createClient(supabaseUrl, supabaseKey)

const updateUserStatus = async (supabase: SupabaseClient, email: string, isProSubscriber: boolean) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .update({ is_pro_subscribers: isProSubscriber, first_time_users: false })
      .eq('email', email)
      .select()

    if (error) {
      console.error('Error updating user status:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Unexpected error in updateUserStatus:', error)
    throw error
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const event = body.events[0]

    console.log('Received webhook event:', JSON.stringify(event, null, 2))

    // Insert event into subscription_events table
    const { error: insertError } = await supabase
      .from('subscription_events')
      .insert({
        event_id: event.id,
        event_type: event.type,
        created_at: new Date(event.created),
        subscription_id: event.data.id,
        account_id: event.data.account.id,
        account_email: event.data.account.contact.email,
        product_name: event.data.product.display,
        price: event.data.price,
        currency: event.data.currency,
        next_charge_date: new Date(event.data.next),
        raw_data: event
      })

    if (insertError) {
      console.error('Error inserting event into subscription_events:', insertError)
      throw insertError
    }

    // Update user status
    if (event.type === 'subscription.activated') {
      await updateUserStatus(supabase, event.data.account.contact.email, true)
      console.log('User status updated: Pro subscription activated')
    } else if (event.type === 'subscription.deactivated') {
      await updateUserStatus(supabase, event.data.account.contact.email, false)
      console.log('User status updated: Pro subscription deactivated')
    }

    return NextResponse.json({ message: 'Event processed successfully' })
  } catch (error) {
    console.error('Detailed error in webhook processing:', error)
    
    let errorMessage = 'Failed to process webhook'
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`
    } else {
      errorMessage += `: ${JSON.stringify(error)}`
    }
    
    console.error(errorMessage)  // Log the error message server-side
    
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}