/**
 * Submit Field Note Function
 * Public endpoint for submitting field notes
 */

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Supabase env vars missing" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const {
      name,
      email,
      role,
      org_context,
      edge,
      situation,
      applied,
      result,
      unclear,
      attribution,
      followup,
    } = body;

    // Validate required fields
    if (!edge || !situation || !applied || !result || !attribution) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: "Missing required fields: edge, situation, applied, result, attribution",
        }),
      };
    }

    // Validate attribution
    if (!["featured", "anonymous", "private"].includes(attribution)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid attribution value" }),
      };
    }

    // Insert into Supabase
    const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/field_notes`;
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        name: name || null,
        email: email || null,
        role: role || null,
        org_context: org_context || null,
        edge,
        situation,
        applied,
        result,
        unclear: unclear || null,
        attribution,
        followup: followup || false,
        publish_status: "submitted",
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: "Database insert failed", details: text }),
      };
    }

    const data = await resp.json();
    const inserted = Array.isArray(data) ? data[0] : data;

    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({
        ok: true,
        id: inserted.id,
        message: "Field note submitted successfully",
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
