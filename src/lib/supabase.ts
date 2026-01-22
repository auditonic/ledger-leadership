/**
 * Supabase Client Setup
 * Use this for client-side Supabase operations
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

// Create a safe client that won't fail during build if env vars are missing
let supabaseClient: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    });
  } catch (error) {
    console.warn('Failed to create Supabase client:', error);
  }
} else {
  // Create a dummy client for build time that won't throw errors
  // This allows the build to complete even without env vars
  supabaseClient = createClient(
    'https://placeholder.supabase.co',
    'placeholder-key',
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
      },
    }
  );
}

export const supabase = supabaseClient!;

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
