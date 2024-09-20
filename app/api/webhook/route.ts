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
        case 'subscription.canceled':
          await handleSubscriptionCanceled(event, supabase);
          break;
        case 'subscription.deactivated':
          await handleSubscriptionDeactivated(event, supabase);
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
    // Get user details from Supabase
    const user = await getUser(supabase);
    if (!user) {
      throw new Error('User not found');
    }

    // Update user's subscription status in the database
    /*
    await getUserDetails(supabase, user.id, {
      status: 'active',
      product: product,
      product_name: productName,
      subscription_id: event.data.subscription,
      price: event.data.price,
      activated_at: new Date().toISOString()
    });
*/
    // If it's the user's first subscription, update first_time_users
    const userDetails = await getUserDetails(supabase);
    if (userDetails?.first_time_users) {
      await updateFirstTimeUser(supabase, user.id, false);
    }

    const is_pro_subscribers = await getUserDetails(supabase);
    if (is_pro_subscribers?.is_pro_subscribers) {
      await updateProUser(supabase, user.id, true);
    }

    // TODO: Send a welcome email to the user
    // You can implement email sending logic here or call a separate function

  } catch (error) {
    console.error('Error updating user subscription:', error);
    throw error;
  }
}

async function handleSubscriptionCanceled(event: FastSpringEvent, supabase: any) {
  console.log(`Subscription canceled: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} canceled subscription to ${productName} (${product})`);

  try {
    // Get user details from Supabase
    const user = await getUser(supabase);
    if (!user) {
      throw new Error('User not found');
    }

    // Update user's subscription status in the database


    // TODO: Send a cancellation confirmation email to the user

  } catch (error) {
    console.error('Error updating user subscription:', error);
    throw error;
  }
}

async function handleSubscriptionDeactivated(event: FastSpringEvent, supabase: any) {
  console.log(`Subscription deactivated: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} subscription to ${productName} (${product}) was deactivated`);

  try {
    // Get user details from Supabase
    const user = await getUser(supabase);
    if (!user) {
      throw new Error('User not found');
    }

    // Update user's subscription status in the database
   

    // TODO: Send a deactivation notification email to the user

  } catch (error) {
    console.error('Error updating user subscription:', error);
    throw error;
  }
}