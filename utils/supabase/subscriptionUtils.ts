import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';
import { createClient } from '@supabase/supabase-js';

interface SupabaseConfig {
  url: string;
  key: string;
}

// Get the environment variables (replace placeholders)
const supabaseConfig: SupabaseConfig | undefined = (() => {
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    return {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      key: process.env.SUPABASE_SERVICE_ROLE_KEY,
    };
  }
  return undefined; // Or throw an error here 
})();

// Validate that the config exists (important!)
if (!supabaseConfig) {
  throw new Error(
    'Missing Supabase environment variables! Check your .env file.'
  );
}

// Now it's safe to create the client:
export const supabase = createClient(
  supabaseConfig.url, 
  supabaseConfig.key 
);



export const updateFirstTimeUser2 = async (supabase: SupabaseClient, email: string, firstTimeUser: boolean) => {
  const { data, error } = await supabase
    .from('users')
    .update({ first_time_users: firstTimeUser })
    .eq('email', email);

  if (error) {
    console.error('Error updating first_time_users:', error);
    throw error;
  }

  console.log('updateFirstTimeUser2 result:', data);
  return data;
};

export const updateProUser = async (supabase: SupabaseClient, email: string, isProUser: boolean) => {
  const { data, error } = await supabase
    .from('users')
    .update({ is_pro_subscribers: isProUser })
    .eq('email', email);

  if (error) {
    console.error('Error updating is_pro_subscribers:', error);
    throw error;
  }

  console.log('updateProUser result:', data);
  return data;
};