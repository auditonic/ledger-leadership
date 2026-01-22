/**
 * Supabase Client Setup
 * Use this for client-side Supabase operations
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key not configured');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// Helper for getting current user
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
}

// Helper for getting user profile with role
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('role, email')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
}

// Helper for checking if user is admin
export async function isAdmin(userId: string): Promise<boolean> {
  try {
    const profile = await getUserProfile(userId);
    return profile?.role === 'admin';
  } catch {
    return false;
  }
}
