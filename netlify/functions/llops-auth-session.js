/**
 * LLOps Auth Session Function
 * Verifies Supabase Auth session and returns user role
 */

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  try {
    const authHeader = event.headers.authorization || event.headers.Authorization;
    
    if (!authHeader?.startsWith("Bearer ")) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: "Missing authorization header" }),
      };
    }

    const token = authHeader.replace("Bearer ", "");

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Verify JWT and get user
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: "Invalid token" }),
      };
    }

    // Get user profile with role
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role, email")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      return {
        statusCode: 403,
        headers,
        body: JSON.stringify({ error: "Profile not found" }),
      };
    }

    // Check if user has required role
    if (!["admin", "reviewer"].includes(profile.role)) {
      return {
        statusCode: 403,
        headers,
        body: JSON.stringify({ error: "Insufficient permissions" }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        user: {
          id: user.id,
          email: user.email,
          role: profile.role,
        },
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
