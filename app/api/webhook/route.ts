import { NextRequest, NextResponse } from 'next/server';

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
        phone: string;
      };
    };
    product: {
      product: string;
      display: string;
      sku: string | null;
      quantity: number;
      pricing: {
        price: { [currency: string]: number };
      };
    };
    price: number;
    currency: string;
    begin: number;
    next: number;
  };
}

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const events: FastSpringEvent[] = body.events;

    // Process each event
    for (const event of events) {
      switch (event.type) {
        case 'subscription.activated':
          await handleSubscriptionActivated(event);
          break;
        case 'subscription.canceled':
          await handleSubscriptionCanceled(event);
          break;
        case 'subscription.deactivated':
          await handleSubscriptionDeactivated(event);
          break;
        case 'subscription.updated':
          await handleSubscriptionUpdated(event);
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

async function handleSubscriptionActivated(event: FastSpringEvent) {
  console.log(`Subscription activated: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} subscribed to ${productName} (${product})`);
  // TODO: Implement logic to update user's subscription status in your database
  // TODO: Send a welcome email to the user
}

async function handleSubscriptionCanceled(event: FastSpringEvent) {
  console.log(`Subscription canceled: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} canceled subscription to ${productName} (${product})`);
  // TODO: Implement logic to update user's subscription status in your database
  // TODO: Send a cancellation confirmation email to the user
}

async function handleSubscriptionDeactivated(event: FastSpringEvent) {
  console.log(`Subscription deactivated: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} subscription to ${productName} (${product}) was deactivated`);
  // TODO: Implement logic to update user's subscription status in your database
  // TODO: Send a deactivation notification email to the user
}

async function handleSubscriptionUpdated(event: FastSpringEvent) {
  console.log(`Subscription updated: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} subscription to ${productName} (${product}) was updated`);
  // TODO: Implement logic to update user's subscription details in your database
  // TODO: Send a subscription update confirmation email to the user
}