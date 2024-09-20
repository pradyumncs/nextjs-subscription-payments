// app/api/webhook/fastspring/route.ts

import { NextRequest, NextResponse } from 'next/server';
// Updated FastSpringEvent interface
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
    product: string;
    customer: {
      email: string;
    };
    // Add other relevant fields as needed
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
        // Add more cases for other event types as needed
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
  const { subscription, product, customer } = event.data;
  const email = customer.email;

  console.log(`Subscription activated: ${subscription}`);
  console.log(`Product: ${product}`);
  console.log(`Customer email: ${email}`);

  // Check if the product is the one-month daily subscription
  if (product === '1-month-daily-subscription') {
    // Implement your specific logic for the one-month daily subscription
    await processOneMonthDailySubscription(email, subscription);
  } else {
    console.log(`Unhandled product type: ${product}`);
  }
}

async function processOneMonthDailySubscription(email: string, subscriptionId: string) {
  // Implement your business logic here, e.g.:
  // 1. Update user's subscription status in the database
  // 2. Send a welcome email
  // 3. Provision any necessary resources for the subscription
  // 4. Log the subscription details

  console.log(`Processing one-month daily subscription for ${email}`);
  console.log(`Subscription ID: ${subscriptionId}`);

  // Example: Update user's subscription status (replace with actual database call)
  // await updateUserSubscription(email, '1-month-daily-subscription', subscriptionId);

  // Example: Send welcome email (replace with actual email sending logic)
  // await sendWelcomeEmail(email, '1-month-daily-subscription');

  // Add more specific logic as needed for your application
}