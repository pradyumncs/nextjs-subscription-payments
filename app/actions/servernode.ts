'use server'

import { createClient } from '@/utils/supabase/server'
import { getUserDetails, getUser, updateFirstTimeUser } from '@/utils/supabase/queries'
import { updatecredits } from '@/utils/supabase/subscriptionUtils'

async function submitJobToProcessor(title: string, email: string) {
  const response = await fetch('http://45.55.50.247:3000/submit-job', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any necessary authentication headers
    },
    body: JSON.stringify({ title, email }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit job to processor');
  }

  return await response.json();
}

export async function runPythonScript(formData: FormData) {
  const title = formData.get('title') as string
  const email = formData.get('email') as string

  console.log(`Starting job submission for title: ${title}, email: ${email}`)

  const supabase = createClient()
  const user = await getUser(supabase)

  if (!user) {
    return { error: 'Authentication required', details: 'User must be logged in to process CSV' }
  }

  try {
    // Submit job to your DigitalOcean server
    const jobResult = await submitJobToProcessor(title, email);

    console.log('CSV processing started successfully')

    // Update user's first-time status
    const userDetails = await getUserDetails(supabase)
    if (userDetails?.first_time_users) {
      console.log("Updating first time user status")
      await updateFirstTimeUser(supabase, user.id, false)
    }

    // Deduct credits for CSV processing
    const currentCredits = userDetails?.credits || 0
    const creditCost = 100 // Adjust this value as needed
    const newCreditAmount = currentCredits - creditCost

    // Update credits
    const updatedCredits = await updatecredits(supabase, userDetails.email, newCreditAmount)

    return { 
      message: 'CSV processing started successfully. You will receive an email when the processing is complete.', 
      details: `${creditCost} credits have been deducted. Remaining credits: ${updatedCredits}`,
      output: jobResult 
    }
  } catch (error) {
    console.error('Error starting CSV processing:', error)
    
    if (error instanceof Error) {
      return { 
        error: 'Internal server error', 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }
    } else {
      return { 
        error: 'Internal server error', 
        details: 'An unexpected error occurred'
      }
    }
  }
}