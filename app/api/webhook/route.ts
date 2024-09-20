import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const API_KEY = process.env.WEBHOOK_API_KEY

export async function POST(request: Request) {
  // Check for API key in the request header
  const apiKey = request.headers.get('x-api-key')
  if (apiKey !== API_KEY) {
    return NextResponse.json({ message: 'Invalid API key' }, { status: 401 })
  }

  const body = await request.json()
  const event = body.events[0]

  try {
    const { data, error } = await supabase
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

    if (error) throw error

    return NextResponse.json({ message: 'Event processed successfully' })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 })
  }
}