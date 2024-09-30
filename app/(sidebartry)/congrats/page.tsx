import Link from "next/link";
import { ContentLayout } from "@/dashboard/components/admin-panel/content-layout";
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import {
  getUserDetails,
  getSubscription,
  getUser,
  updateFirstTimeUser
  
} from '@/utils/supabase/queries';
import Firsttime from "@/components/Firsttime";
import Component from "@/components/PremiumCreate";
import CongratsPage from "@/components/congrats/congrats";
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

  console.log(userDetails)

  // Check if it's the user's first visit (using first_time_users)
  if (userDetails?.first_time_users) { // Use the correct property name
    console.log("first time user"); 
    // Update the database using the correct column name
   // await updateFirstTimeUser(supabase, user.id, false);
  }

  console.log(userDetails.email)
  
  console.log(userDetails?.first_time_users)
  return (
    <ContentLayout title="">
   { /*  {userDetails?.first_time_users && <Firsttime/>} */}
   <CongratsPage />
      {/* ...rest of your component logic... */}
    </ContentLayout>
  );
}