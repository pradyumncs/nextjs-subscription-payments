import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { SupabaseClient } from '@supabase/supabase-js';

// Define the structure of the FastSpring event
interface FastSpringEvent {
  id: string;
  processed: boolean;
  created: number;
  type: string;
  live: boolean;
  data: {
    id: string;
    subscription: string;
    active: boolean;
    state: string;
    account: {
      id: string;
      contact: {
        first: string;
        last: string;
        email: string;
      };
    };
    product: {
      product: string;
      display: string;
    };
    price: number;
  };
}

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  const supabase = createClient();

  try {
    const body = await req.json();
    const events: FastSpringEvent[] = body.events;

    // Process each event
    for (const event of events) {
      switch (event.type) {
        case 'subscription.activated':
          await handleSubscriptionActivated(event, supabase);
          break;
       
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleSubscriptionActivated(event: FastSpringEvent, supabase: SupabaseClient) {
  console.log(`Subscription activated: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} subscribed to ${productName} (${product})`);

  try {
    // Update first_time_users
    await updateFirstTimeUser2(supabase, email, true);
    console.log(`Successfully updated first_time_user for ${email}`);

    // Update is_pro_subscribers to true
    await updateProUser(supabase, email, true);
    console.log(`User ${email} is now a pro subscriber`);

    // TODO: Send a welcome email to the user
    // You can implement email sending logic here or call a separate function
  } catch (error) {
    console.error('Error in handleSubscriptionActivated:', error);
    throw error;
  }
}

export const updateFirstTimeUser2 = async (supabase: SupabaseClient, email: string, firstTimeUser: boolean) => {
  const { data, error } = await supabase
    .from('users')
    .update({ first_time_users: firstTimeUser })
    .eq('email', email);

  if (error) {
    console.error('Error updating first_time_users:', error);
    throw error;
  }

  console.log('updateFirstTimeUser2 result:', data);
  return data;
};

export const updateProUser = async (supabase: SupabaseClient, email: string, isProUser: boolean) => {
  const { data, error } = await supabase
    .from('users')
    .update({ is_pro_subscribers: isProUser })
    .eq('email', email);

  if (error) {
    console.error('Error updating is_pro_subscribers:', error);
    throw error;
  }

  console.log('updateProUser result:', data);
  return data;
};