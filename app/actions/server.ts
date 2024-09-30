'use server'

import { exec } from 'child_process'
import { promisify } from 'util'
import { createClient } from '@/utils/supabase/server'
import { getUserDetails, getUser, updateFirstTimeUser } from '@/utils/supabase/queries'
import { updatecredits } from '@/utils/supabase/subscriptionUtils'
const execAsync = promisify(exec)

export async function runPythonScript(title: string, email: string) {

console.log(`Starting job submission for title: ${title}, email: ${email}`)

  const supabase = createClient()
  const user = await getUser(supabase)

  if (!user) {
    return { error: 'Authentication required', details: 'User must be logged in to process CSV' }
  }

  try {
    // Use nohup to keep the process running even if the SSH session is closed
    // Use & to run the process in the background
    // Redirect all output to a log file
    const command = `ssh root@45.55.50.247 "cd serveryoushorts && source venv/bin/activate && nohup python3 submit_job.py '${title}' ${email} > job_submission.log 2>&1 &"`
    
    console.log('Executing command:', command)

    const { stdout, stderr } = await execAsync(command)
    
    if (stderr) {
      console.error('CSV processing error:', stderr)
      return { error: stderr, details: 'Error occurred during CSV processing' }
    }
    
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
      output: stdout 
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