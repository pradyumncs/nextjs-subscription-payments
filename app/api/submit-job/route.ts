import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { getUserDetails, getUser, updateFirstTimeUser } from '@/utils/supabase/queries';
import { updatecredits } from '@/utils/supabase/subscriptionUtils';

export async function POST(request: Request) {
  const { title, email } = await request.json();

  const supabase = createClient();
  const user = await getUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  try {
    // Get user details
    const userDetails = await getUserDetails(supabase);
    
    // Check if user has enough credits
    const creditCost = 10; // Adjust this value as needed
    if (userDetails.credits < creditCost) {
      return NextResponse.json({ error: 'Insufficient credits' }, { status: 400 });
    }

    // Update first time user status if needed
    if (userDetails.first_time_users) {
      await updateFirstTimeUser(supabase, user.id, false);
    }

    // Deduct credits
    const newCreditAmount = userDetails.credits - creditCost;
    const updatedCredits = await updatecredits(supabase, userDetails.email, newCreditAmount);

    // Submit job to external API
    const response = await fetch('http://45.55.50.247:3000/submit-job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, email }),
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({
      ...data,
      creditsDeducted: creditCost,
      remainingCredits: updatedCredits
    });
  } catch (error) {
    console.error('Job submission error:', error);
    return NextResponse.json({ error: 'Failed to submit job' }, { status: 500 });
  }
}