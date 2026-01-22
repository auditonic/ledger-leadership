/**
 * Authentication Utilities
 * Server-side and client-side auth helpers
 */

import { supabase } from './supabase';

// Safe wrapper functions that handle missing Supabase config
async function getUserProfile(userId: string) {
  if (!supabase || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return null;
  }
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('role, email')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return data;
  } catch {
    return null;
  }
}

async function isAdmin(userId: string): Promise<boolean> {
  try {
    const profile = await getUserProfile(userId);
    return profile?.role === 'admin';
  } catch {
    return false;
  }
}

// Client-side: Get current session
export async function getSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) throw error;
  return session;
}

// Client-side: Get current user with profile
export async function getCurrentUserWithProfile() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return null;

  try {
    const profile = await getUserProfile(user.id);
    return { ...user, profile };
  } catch {
    return { ...user, profile: null };
  }
}

// Client-side: Check if user has required role
export async function hasRole(requiredRole: 'admin' | 'reviewer' | 'user'): Promise<boolean> {
  const user = await getCurrentUserWithProfile();
  if (!user?.profile) return false;

  const roleHierarchy = { user: 1, reviewer: 2, admin: 3 };
  const userLevel = roleHierarchy[user.profile.role as keyof typeof roleHierarchy] || 0;
  const requiredLevel = roleHierarchy[requiredRole];

  return userLevel >= requiredLevel;
}

// Client-side: Sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  window.location.href = '/login';
}

// Client-side: Sign in with email/password
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

// Client-side: Sign up with email/password
export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

// Client-side: Reset password
export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });
  if (error) throw error;
}
