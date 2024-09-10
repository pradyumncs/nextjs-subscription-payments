'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'
import { getUserDetails, getSubscription, getUser, updateFirstTimeUser } from '@/utils/supabase/queries'

export type State = {
  message: string;
}

export async function createSeries(prevState: State, formData: FormData): Promise<State> {
  const supabase = createClient()
  const [user, userDetails, subscription] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
    getSubscription(supabase)
  ]);

  if (!user) {
    return { message: 'Authentication required' }
  }

  console.log(userDetails)

  // Check if it's the user's first visit (using first_time_users)
  if (userDetails?.first_time_users) {
    console.log("first time user")
    // Update the database using the correct column name
    await updateFirstTimeUser(supabase, user.id, false)
  }

  // Extract form data
  const destination = formData.get('destination')
  const content = formData.get('content')
  const customPrompt = formData.get('customPrompt')
  const narrationVoice = formData.get('narrationVoice')
  const artStyle = formData.get('artStyle')
  const videoLanguage = formData.get('videoLanguage')
  const durationPreference = formData.get('durationPreference')

  // Here you would typically save this data to your database
  // For now, we'll just log it
  console.log({
    destination,
    content,
    customPrompt,
    narrationVoice,
    artStyle,
    videoLanguage,
    durationPreference
  })

  // TODO: Add your logic here to create the series in your database or external service

  // Revalidate the current path to reflect any changes
  

  // Ensure we're returning the success message
  return { message: 'Series created successfully!' }
}