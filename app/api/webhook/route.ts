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

  try {
    const body = await req.json();
    const events: FastSpringEvent[] = body.events;

    // Acknowledge receipt of the webhook immediately
    const response = NextResponse.json({ success: true }, { status: 200 });

    // Process events asynchronously
    processEvents(events).catch(error => {
      console.error('Error processing events:', error);
    });

    return response;
  } catch (error) {
    console.error('Error parsing webhook payload:', error);
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}

async function processEvents(events: FastSpringEvent[]) {
  for (const event of events) {
    switch (event.type) {
      case 'subscription.activated':
        await handleSubscriptionActivated(event);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  }
}

async function handleSubscriptionActivated(event: FastSpringEvent) {
  console.log(`Subscription activated: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} subscribed to ${productName} (${product})`);

  try {
    await sendSubscriptionDataToServer(email, productName, product);
  } catch (error) {
    console.error('Failed to send subscription data to server:', error);
    // TODO: Implement retry logic or store failed events for later processing
  }
}

async function sendSubscriptionDataToServer(email: string, productName: string, product: string) {
  const response = await fetch('/api/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, productName, product }),
  });

  if (!response.ok) {
    throw new Error('Failed to send subscription data to server');
  }

  const result = await response.json();
  console.log('Subscription data sent to server:', result);
}