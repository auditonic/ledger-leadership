export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Supabase env vars missing (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  // Required fields
  const required = ["edge", "situation", "applied", "result", "attribution"];
  for (const k of required) {
    if (!payload[k] || String(payload[k]).trim().length === 0) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: `Missing required field: ${k}` }) };
    }
  }

  const attribution = String(payload.attribution);
  if (!["featured", "anonymous", "private"].includes(attribution)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid attribution value" }) };
  }

  const row = {
    name: payload.name || null,
    email: payload.email || null,
    role: payload.role || null,
    org_context: payload.context || null,
    edge: payload.edge,
    situation: payload.situation,
    applied: payload.applied,
    result: payload.result,
    unclear: payload.unclear || null,
    attribution,
    followup: payload.followup === "yes" || payload.followup === true,
    publish_status: "submitted"
  };

  const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/field_notes`;

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_SERVICE_ROLE_KEY,
      "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Prefer": "return=representation"
    },
    body: JSON.stringify(row)
  });

  if (!resp.ok) {
    const text = await resp.text();
    return { statusCode: 502, headers, body: JSON.stringify({ error: "Supabase insert failed", details: text }) };
  }

  const data = await resp.json();
  return { statusCode: 200, headers, body: JSON.stringify({ ok: true, inserted: data?.[0]?.id || null }) };
}
