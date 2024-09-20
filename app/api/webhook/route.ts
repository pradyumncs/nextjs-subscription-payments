import { NextResponse } from 'next/server'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const updateUserStatus = async (supabase: SupabaseClient, email: string, isProSubscriber: boolean) => {
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
}

export async function POST(request: Request) {
  const body = await request.json()
  const event = body.events[0]

  try {
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

    if (insertError) throw insertError

    // Update user status
    if (event.type === 'subscription.activated') {
      await updateUserStatus(supabase, event.data.account.contact.email, true)
    } else if (event.type === 'subscription.deactivated') {
      await updateUserStatus(supabase, event.data.account.contact.email, false)
    }

    return NextResponse.json({ message: 'Event processed successfully' })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 })
  }
}