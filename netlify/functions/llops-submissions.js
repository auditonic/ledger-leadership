/**
 * LLOps Submissions List
 * Returns field note submissions filtered by status
 * Requires authentication (admin/reviewer role)
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

  // Check authentication
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server configuration error" }) };
  }

  // Verify JWT and get user role
  try {
    const token = authHeader.replace("Bearer ", "");
    const verifyResp = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/auth/v1/user`, {
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!verifyResp.ok) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid token" }) };
    }

    const user = await verifyResp.json();

    // Get user profile to check role
    const profileResp = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/profiles?id=eq.${user.id}&select=role`, {
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });

    if (!profileResp.ok) {
      return { statusCode: 403, headers, body: JSON.stringify({ error: "Access denied" }) };
    }

    const profiles = await profileResp.json();
    const profile = profiles[0];

    if (!profile || (profile.role !== "admin" && profile.role !== "reviewer")) {
      return { statusCode: 403, headers, body: JSON.stringify({ error: "Insufficient permissions" }) };
    }
  } catch (e) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Authentication failed" }) };
  }

  // Get status filter
  const status = event.queryStringParameters?.status || "all";

  // Build query
  const url = new URL(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/field_notes`);
  url.searchParams.set("select", "id,created_at,edge,attribution,publish_status,role,org_context,situation,applied,result,unclear,public_role,public_context");
  url.searchParams.set("order", "created_at.desc");
  url.searchParams.set("limit", "100");

  if (status !== "all") {
    url.searchParams.set("publish_status", `eq.${status}`);
  }

  try {
    const resp = await fetch(url.toString(), {
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Accept": "application/json",
      },
    });

    if (!resp.ok) {
      const text = await resp.text();
      return { statusCode: 502, headers, body: JSON.stringify({ error: "Database query failed", details: text }) };
    }

    const submissions = await resp.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        submissions: submissions || [],
      }),
    };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error", details: e.message }) };
  }
}
