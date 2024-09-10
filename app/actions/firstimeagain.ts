'use server'

import { createClient } from '@/utils/supabase/server'
import { getUserDetails, getSubscription, getUser, updateFirstTimeUser } from '@/utils/supabase/queries'
import { createSeries } from './create-series-action'

export type State = {
  message: string;
}

export async function createSeriesWithAuth(prevState: State, formData: FormData): Promise<State> {
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

  // Now proceed with creating the series
  return createSeries(prevState, formData)
}