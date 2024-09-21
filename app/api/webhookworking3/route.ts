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
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;

  console.log(`User ${email} subscribed to ${productName} (${product})`);

  // Send the subscription data to /api/subscriptions route
  try {
    const response = await fetch('https://youshorts.ai/api/supabases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        productName,
        product,
        subscriptionId: event.data.subscription,
        userId: event.data.account.id,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send subscription data: ${response.statusText}`);
    }

    console.log('Subscription data sent successfully to /api/subscription');
  } catch (error) {
    console.error('Error sending subscription data:', error);
  }
}
