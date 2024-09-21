import Link from "next/link";
import { ContentLayout } from "@/dashboard/components/admin-panel/content-layout";
import { CreateSeries } from "@/components/create-seriesfinalfree";
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import {
  getUserDetails,
  getSubscription,
  getUser,
  updateFirstTimeUser
} from '@/utils/supabase/queries';
import { updateFirstTimeUser2 } from "@/utils/supabase/subscriptionUtils";

export default async function PostsPage() {
  const supabase = createClient();
  const [user, userDetails, subscription] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
    getSubscription(supabase),
  ]);

  if (!user) {
    return redirect('/signin');
  }

  // Check if it's the user's first visit (using first_time_users)
  /*
  if (userDetails?.first_time_users) {
    console.log("first time user");

    // Ensure user.email is defined before passing it to the function
    if (user.email) { 
      // Update the database using the correct column name
      await updateFirstTimeUser(supabase, user.email, false);
      console.log("first time user updated"); 
    } else {
      console.error("User email is undefined. Cannot update first time user.");
    }
  }
*/

  if (userDetails?.first_time_users) {
    console.log("first time user");

    // Ensure user.email is defined before passing it to the function
    if (user.email) { 
      // Update the database using the correct column name
      await updateFirstTimeUser2(supabase, user.email, false);
      console.log("first time user updated"); 
    } else {
      console.error("User email is undefined. Cannot update first time user.");
    }
  }
  

  console.log(userDetails?.first_time_users);

  return (
    <ContentLayout title="All Posts">
      {userDetails?.first_time_users && <CreateSeries />}
      {/* ...rest of your component logic... */}
    </ContentLayout>
  );
}