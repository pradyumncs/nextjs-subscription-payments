import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import {
  getUserDetails,
  getSubscription,
  getUser,
  updateFirstTimeUser,
  updateProUser
  
} from '@/utils/supabase/queries';

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

async function handleSubscriptionActivated(event: FastSpringEvent, supabase: any) {
  console.log(`Subscription activated: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} subscribed to ${productName} (${product})`);

  try {
    // Check if the user exists in the database
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id, is_pro_subscriber')
      .eq('email', email)
      .single();

    if (userError) {
      console.error('Error fetching user:', userError);
      throw userError;
    }

    if (!user) {
      console.error(`User with email ${email} not found in the database`);
      // Here you might want to create the user or handle this case differently
      return;
    }

    console.log('User found:', user);

    // Update first_time_users
    const { error: firstTimeError } = await updateFirstTimeUser(supabase, email, true);
    if (firstTimeError) {
      console.error('Error updating first_time_user:', firstTimeError);
      throw firstTimeError;
    }

    console.log(`Successfully updated first_time_user for ${email}`);

    // Update is_pro_subscribers to true
   

    console.log(`User ${email} is now a pro subscriber`);

    // TODO: Send a welcome email to the user
    // You can implement email sending logic here or call a separate function

  } catch (error) {
    console.error('Error in handleSubscriptionActivated:', error);
    throw error;
  }
}