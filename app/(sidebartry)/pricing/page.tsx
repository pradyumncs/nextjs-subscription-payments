import React from 'react';
import { Pricing } from '@/landingpage/sections/Pricing';
import { Footer } from '@/landingpage/sections/Footer';
import PricingTable from '@/landingpage/sections/Pricingmine';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { ContentLayout } from "@/dashboard/components/admin-panel/content-layout";

import {
  getUserDetails,
  getSubscription,
  getUser,
} from '@/utils/supabase/queries';
export default async function Account() {
  const supabase = createClient();
  const [user, userDetails, subscription] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
    getSubscription(supabase)
  ]);

  if (!user) {
    return redirect('/signin');
  }

  return (
    <ContentLayout title="">
      
        <PricingTable />
        </ContentLayout>
  );
}
