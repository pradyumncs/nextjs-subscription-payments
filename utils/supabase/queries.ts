import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';

export const getUser = cache(async (supabase: SupabaseClient) => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
});

export const getSubscription = cache(async (supabase: SupabaseClient) => {
  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .in('status', ['trialing', 'active'])
    .maybeSingle();

  return subscription;
});

export const getProducts = cache(async (supabase: SupabaseClient) => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { referencedTable: 'prices' });

  return products;
});

export const getUserDetails = cache(async (supabase: SupabaseClient) => {
  const { data: userDetails } = await supabase
    .from('users')
    .select('*')
    .single();
  return userDetails;
});




export const updateFirstTimeUserworking = async (supabase: SupabaseClient, id: string, firstTimeUser: boolean) => {
  const { error } = await supabase
    .from('users')
    .update({ first_time_users: firstTimeUser })
    .eq('id', id);

  if (error) {
    console.error('Error updating first_time_users:', error);
    throw error;
  }
};

export const updateFirstTimeUser = async (supabase: SupabaseClient, email: string, firstTimeUser: boolean) => {
  const { error } = await supabase
    .from('users')
    .update({ first_time_users: firstTimeUser })
    .eq('email', email);

  if (error) {
    console.error('Error updating first_time_users:', error);
    throw error;
  }
};

export const updateProUser = async (supabase: SupabaseClient, email: string, is_pro_subscribers: boolean) => {
  const { error } = await supabase
    .from('users')
    .update({ is_pro_subscribers: is_pro_subscribers })
    .eq('email', email);

  if (error) {
    console.error('Error updating is_pro_subscribers:', error);
    throw error;
  }
};