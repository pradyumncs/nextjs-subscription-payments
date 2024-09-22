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
    let credits = 10; // Default credits
    if (product === '1-month-daily-subscription') {
      credits = 300;
    } else if (product === '1-month-premium-subscription') {
      credits = 600;
    } else if (product === '1-month-massive-subscription') {
      credits = 1200;
    } else if (product === '1-month-starter-subscription') {
      credits = 120;
    } else if (product === '1-year-starter-subscription') {
      credits = 1440;
    } else if (product === '1-year-daily-subscription') {
      credits = 3600;
    } else if (product === '1-year-premium-subscription') {
      credits = 7200;
    } else if (product === '1-year-massive-subscription') {
      credits = 14400;
    }



    await updatecredits(supabase, email, credits);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/supabases:', error);
    return NextResponse.json({ error: 'Failed to process subscription data' }, { status: 500 });
  }
}
