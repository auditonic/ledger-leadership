/**
 * LLOps Update Submission Status
 * Updates publish_status and public_role/public_context for a field note
 * Requires authentication (admin/reviewer role)
 */

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
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

  // Parse request body
  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  const { id, publish_status, public_role, public_context } = payload;

  if (!id) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required field: id" }) };
  }

  if (publish_status && !["submitted", "reviewing", "published", "rejected"].includes(publish_status)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid publish_status" }) };
  }

  // Build update payload
  const updateData = {};
  if (publish_status) updateData.publish_status = publish_status;
  if (public_role !== undefined) updateData.public_role = public_role || null;
  if (public_context !== undefined) updateData.public_context = public_context || null;

  // Update in Supabase
  const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/field_notes?id=eq.${id}`;

  try {
    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Prefer": "return=representation",
      },
      body: JSON.stringify(updateData),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return { statusCode: 502, headers, body: JSON.stringify({ error: "Update failed", details: text }) };
    }

    const updated = await resp.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        updated: updated[0] || null,
      }),
    };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error", details: e.message }) };
  }
}
