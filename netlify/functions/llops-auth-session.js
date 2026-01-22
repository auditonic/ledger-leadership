/**
 * LLOps Auth Session Check
 * Verifies Supabase JWT and returns user role
 * Used by LLOps Control Center to check authentication
 */

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "GET") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: false, authed: false, error: "Server configuration error" }),
    };
  }

  // Get token from Authorization header
  const authHeader = event.headers.authorization || event.headers.Authorization;

  if (!authHeader) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: false, authed: false, error: "No token provided" }),
    };
  }

  try {
    const token = authHeader.replace("Bearer ", "");

    // Verify JWT with Supabase
    const verifyResp = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/auth/v1/user`, {
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!verifyResp.ok) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ok: false, authed: false, error: "Invalid token" }),
      };
    }

    const user = await verifyResp.json();

    // Get user profile to check role
    const profileResp = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/profiles?id=eq.${user.id}&select=role,email`, {
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });

    if (!profileResp.ok) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ok: false, authed: false, error: "Profile not found" }),
      };
    }

    const profiles = await profileResp.json();
    const profile = profiles[0];

    if (!profile) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ok: false, authed: false, error: "Profile not found" }),
      };
    }

    // Check if user has admin or reviewer role
    const hasAccess = profile.role === "admin" || profile.role === "reviewer";

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        authed: hasAccess,
        user: {
          id: user.id,
          email: profile.email || user.email,
          role: profile.role,
        },
      }),
    };
  } catch (e) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: false, authed: false, error: e.message }),
    };
  }
}
