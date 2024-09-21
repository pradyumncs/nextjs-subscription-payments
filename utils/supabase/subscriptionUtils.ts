import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';

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