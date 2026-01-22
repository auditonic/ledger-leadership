export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,OPTIONS"
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
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Supabase env vars missing (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)" }) };
  }

  const url = new URL(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/field_notes`);
  url.searchParams.set("select", "created_at,edge,situation,applied,result,unclear,attribution,public_role,public_context,role,org_context");
  url.searchParams.set("publish_status", "eq.published");
  url.searchParams.set("order", "created_at.desc");
  url.searchParams.set("limit", "25");

  const resp = await fetch(url.toString(), {
    headers: {
      "apikey": SUPABASE_SERVICE_ROLE_KEY,
      "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Accept": "application/json"
    }
  });

  if (!resp.ok) {
    const text = await resp.text();
    return { statusCode: 502, headers, body: JSON.stringify({ error: "Supabase query failed", details: text }) };
  }

  const rows = await resp.json();

  // Strip private notes defensively (even though publish_status should prevent these)
  const safe = (rows || []).filter(r => r.attribution !== "private").map(r => ({
    created_at: r.created_at,
    edge: r.edge,
    situation: r.situation,
    applied: r.applied,
    result: r.result,
    unclear: r.unclear,
    attribution: r.attribution,
    role: r.public_role || (r.attribution === "featured" ? (r.role || null) : null),
    context: r.public_context || (r.attribution === "featured" ? (r.org_context || null) : null)
  }));

  return { statusCode: 200, headers, body: JSON.stringify({ ok: true, notes: safe }) };
}
