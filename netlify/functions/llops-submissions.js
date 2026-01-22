/**
 * LLOps Submissions Function
 * Lists field note submissions with optional status filter
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

  // Verify auth
  const authResult = await verifyAuth(event);
  if (!authResult.ok) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  try {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Parse query parameters
    const params = new URLSearchParams(event.queryStringParameters || {});
    const status = params.get("status") || "all";

    // Build query
    let query = supabase
      .from("field_notes")
      .select("*")
      .order("created_at", { ascending: false });

    // Filter by status
    if (status !== "all") {
      query = query.eq("publish_status", status);
    }

    const { data: submissions, error } = await query;

    if (error) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: error.message }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        submissions: submissions || [],
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

async function verifyAuth(event) {
  if (process.env.LLOPS_AUTH_DISABLED === "true") {
    return { ok: true };
  }

  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return { ok: false };
  }

  const token = authHeader.replace("Bearer ", "");
  try {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) return { ok: false };

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (!profile || !["admin", "reviewer"].includes(profile.role)) {
      return { ok: false };
    }

    return { ok: true, user };
  } catch {
    return { ok: false };
  }
}
