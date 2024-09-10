'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers'
import { 
  getUserDetails, 
  getSubscription, 
  getUser, 
  updateFirstTimeUser 
} from '@/utils/supabase/queries'
import { revalidatePath } from 'next/cache'

export async function createSeries(prevState: { message: string }, formData: FormData) {
  const supabase = createClient();
  const [user, userDetails, subscription] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
    getSubscription(supabase),
  ])


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
  if (!user) {
    redirect('/signin')
  }

  // Check if it's the user's first visit (using first_time_users)
  if (userDetails?.first_time_users) {
    console.log("first time user")

    // Update the database using the correct column name
    await updateFirstTimeUser(supabase, user.id, false)
  }

  console.log(userDetails?.first_time_users)




  revalidatePath('/')
  
  return { user, userDetails, subscription }
}