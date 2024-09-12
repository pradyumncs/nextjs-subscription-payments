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
import Firsttime from "@/components/Firsttime";
import Firstvideo from "@/components/newvideo/firstvideo";
export default async function PostsPage() {

  return (
    <ContentLayout title="">
   { /*  {userDetails?.first_time_users && <Firsttime/>} */}
   < Firstvideo/>
      {/* ...rest of your component logic... */}
    </ContentLayout>
  );
}