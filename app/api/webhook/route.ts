import { NextRequest, NextResponse } from 'next/server';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define the structure of the FastSpring event
interface FastSpringEvent {
  id: string;
  processed: boolean;
  created: number;
  type: string;
  live: boolean;
  data: {
    id: string;
    subscription: string;
    active: boolean;
    state: string;
    account: {
      id: string;
      contact: {
        first: string;
        last: string;
        email: string;
      };
    };
    product: {
      product: string;
      display: string;
    };
    price: number;
  };
}

// Create Supabase client
const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
    throw new Error('Missing Supabase environment variables');
  }

  console.log('Initializing Supabase client with URL:', supabaseUrl);
  const client = createClient(supabaseUrl, supabaseKey);
  console.log('Supabase client initialized');
  return client;
};

// Update first_time_users
const updateFirstTimeUser2 = async (supabase: SupabaseClient, email: string, firstTimeUser: boolean) => {
  console.log(`Attempting to update first_time_users for ${email} to ${firstTimeUser}`);
  const { data, error } = await supabase
    .from('users')
    .update({ first_time_users: firstTimeUser })
    .eq('email', email.trim());

  if (error) {
    console.error('Error updating first_time_users:', error.message, error.details, error.hint);
    throw error;
  }

  console.log('updateFirstTimeUser2 result:', data);
  return data;
};

// Update is_pro_subscribers
const updateProUser = async (supabase: SupabaseClient, email: string, isProUser: boolean) => {
  console.log(`Attempting to update is_pro_subscribers for ${email} to ${isProUser}`);
  const { data, error } = await supabase
    .from('users')
    .update({ is_pro_subscribers: isProUser })
    .eq('email', email.trim());

  if (error) {
    console.error('Error updating is_pro_subscribers:', error.message, error.details, error.hint);
    throw error;
  }

  console.log('updateProUser result:', data);
  return data;
};

// Check if user exists
async function checkUserExists(supabase: SupabaseClient, email: string) {
  console.log(`Double-checking if user ${email} exists...`);
  
  // Try exact match first
  const { data: exactMatch, error: exactError } = await supabase
    .from('users')
    .select('email')
    .eq('email', email.trim());

  if (exactError) {
    console.error('Error checking user existence (exact match):', exactError);
    throw exactError;
  }

  console.log('Exact match result:', exactMatch);

  // If no exact match, try case-insensitive match
  if (!exactMatch || exactMatch.length === 0) {
    const { data: caseInsensitiveMatch, error: caseInsensitiveError } = await supabase
      .from('users')
      .select('email')
      .ilike('email', email.trim());

    if (caseInsensitiveError) {
      console.error('Error checking user existence (case-insensitive):', caseInsensitiveError);
      throw caseInsensitiveError;
    }

    console.log('Case-insensitive match result:', caseInsensitiveMatch);
    return caseInsensitiveMatch && caseInsensitiveMatch.length > 0;
  }

  return true;
}

// Fetch all users for debugging
async function fetchAllUsers(supabase: SupabaseClient) {
  console.log('Fetching all users for debugging...');
  const { data, error } = await supabase
    .from('users')
    .select('email')
    .order('email');

  if (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }

  console.log('All users:', data);
  return data;
}

// Handle subscription activation
async function handleSubscriptionActivated(event: FastSpringEvent, supabase: SupabaseClient) {
  console.log(`Subscription activated: ${event.data.subscription}`);
  const { email } = event.data.account.contact;
  const { product, display: productName } = event.data.product;
  console.log(`User ${email} subscribed to ${productName} (${product})`);

  try {
    // Fetch all users for debugging
    await fetchAllUsers(supabase);

    // Check if user exists
    console.log(`Checking if user ${email} exists...`);
    const userExists = await checkUserExists(supabase, email);

    if (!userExists) {
      console.log(`User ${email} not found. Creating new user...`);
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert({ email: email.trim(), first_time_users: true, is_pro_subscribers: true })
        .single();

      if (createError) {
        console.error('Error creating user:', createError);
        throw createError;
      }

      console.log(`Created new user: ${email}`);
    } else {
      console.log(`Updating existing user: ${email}`);
      await updateFirstTimeUser2(supabase, email, true);
      console.log(`Successfully updated first_time_user for ${email}`);

      await updateProUser(supabase, email, true);
      console.log(`User ${email} is now a pro subscriber`);
    }

    // TODO: Send a welcome email to the user
  } catch (error) {
    console.error('Error in handleSubscriptionActivated:', error);
    throw error;
  }
}

// Main webhook handler
export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  let supabase: SupabaseClient;

  try {
    console.log('Initializing Supabase client...');
    supabase = createSupabaseClient();
    console.log('Supabase client initialized successfully');

    const body = await req.json();
    const events: FastSpringEvent[] = body.events;

    // Process each event
    for (const event of events) {
      switch (event.type) {
        case 'subscription.activated':
          await handleSubscriptionActivated(event, supabase);
          break;
       
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}