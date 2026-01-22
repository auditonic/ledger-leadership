/**
 * Shared Authentication Utility for Netlify Functions
 * Verifies Supabase JWT tokens and checks user roles
 */

export async function verifyAuth(event, requiredRole = 'reviewer') {
  // Allow bypass for development (set LLOPS_AUTH_DISABLED=true)
  if (process.env.LLOPS_AUTH_DISABLED === 'true') {
    return { ok: true, user: { id: 'dev-user', role: 'admin' } };
  }

  const authHeader = event.headers.authorization || event.headers.Authorization;
  
  if (!authHeader?.startsWith('Bearer ')) {
    return { ok: false, error: 'Missing authorization header' };
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Verify JWT and get user
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return { ok: false, error: 'Invalid token' };
    }

    // Get user profile with role
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role, email')
      .eq('id', user.id)
      .single();

    if (profileError || !profile) {
      return { ok: false, error: 'Profile not found' };
    }

    // Check role hierarchy
    const roleHierarchy = { user: 1, reviewer: 2, admin: 3 };
    const userLevel = roleHierarchy[profile.role] || 0;
    const requiredLevel = roleHierarchy[requiredRole] || 0;

    if (userLevel < requiredLevel) {
      return { ok: false, error: 'Insufficient permissions' };
    }

    return {
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        role: profile.role,
      },
    };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

export function getAuthHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };
}
