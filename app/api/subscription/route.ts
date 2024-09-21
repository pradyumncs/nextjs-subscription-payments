import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import {
  getUserDetails,
  getSubscription,
  getUser,
  updateFirstTimeUser,
  updateProUser
} from '@/utils/supabase/queries';
import { updateFirstTimeUser2 } from "@/utils/supabase/subscriptionUtils";

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient();
    const body = await request.json();
    const { email, productName, product } = body;

    // Log the received data
    console.log(`Received subscription data: User ${email} subscribed to ${productName} (${product})`);

    // Get user data
    const [user, userDetails, subscription] = await Promise.all([
      getUser(supabase),
      getUserDetails(supabase),
      getSubscription(supabase),
    ]);

    if (!user) {
      return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
    }

    // Update first-time user status if necessary
    if (userDetails?.first_time_users) {
      console.log("First time user");
      if (user.email) {
        await updateFirstTimeUser2(supabase, user.email, false);
        console.log("First time user updated");
      } else {
        console.error("User email is undefined. Cannot update first time user.");
      }
    }

    // Update user's pro subscription status
    await updateProUser(supabase, email, true);
    console.log(`Updated pro subscription status for ${email}`);

    // Send a welcome email
    await sendWelcomeEmail(email, productName);

    // Trigger any other necessary actions
    await performAdditionalActions(email, product);

    // Respond with a success message
    return NextResponse.json({ 
      message: 'Subscription data processed successfully',
      data: { email, productName, product }
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing subscription data:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

async function sendWelcomeEmail(email: string, productName: string) {
  // Implement your email sending logic here
  console.log(`Sending welcome email for ${productName} to ${email}`);
}

async function performAdditionalActions(email: string, product: string) {
  // Implement any additional actions here
  console.log(`Performing additional actions for ${email} and ${product}`);
}