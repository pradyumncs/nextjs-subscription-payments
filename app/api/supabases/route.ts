import { NextRequest, NextResponse } from 'next/server';
import { updateFirstTimeUser2, updateProUser, updatecredits } from '@/utils/supabase/subscriptionUtils'; // Import your existing function
import { supabase } from '@/utils/supabase/subscriptionUtils'; // Assuming you have Supabase client initialized in utils

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, productName, product, subscriptionId, userId } = body;

    console.log(`Received subscription data for user ${email}: ${productName} (${product})`);

    // Update user in Supabase using your existing function
    await updateFirstTimeUser2(supabase, email, false);
    await updateProUser(supabase, email, true);

    // Check if the productName is '1-month-daily-subscription' and update credits accordingly
    let credits = 120; // Default credits
    if (product === '1-month-daily-subscription') {
      credits = 200; // Set credits to 200 for this specific subscription
    }

    await updatecredits(supabase, email, credits);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/supabases:', error);
    return NextResponse.json({ error: 'Failed to process subscription data' }, { status: 500 });
  }
}
