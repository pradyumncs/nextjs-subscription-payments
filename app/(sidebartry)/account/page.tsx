import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import {
  getUserDetails,
  getSubscription,
  getUser,
} from '@/utils/supabase/queries';
import AccountSection from '@/components/AccountSection';

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

  const isPro = userDetails?.is_pro_subscribers || false;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-center sm:text-6xl">
            Account
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-gray-600 sm:text-center sm:text-2xl">
            Manage your YouShorts subscription
          </p>
        </div>
        <AccountSection isPro={isPro} />
      </div>
    </section>
  );
}