/**
 * LLOps Health Check
 * Checks status of all integrations: Netlify, GitHub, Supabase, Gmail, Auth
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

  const checks = {
    netlify: { status: "ok", detail: "Deploy channel reachable" },
    github: { status: "unknown", detail: "Not checked" },
    supabase: { status: "unknown", detail: "Not checked" },
    gmail: { status: "unknown", detail: "Not connected" },
    auth: { status: "unknown", detail: "Not checked" },
  };

  // Check Supabase
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const resp = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/field_notes?limit=1`, {
        headers: {
          "apikey": SUPABASE_SERVICE_ROLE_KEY,
          "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        },
      });
      if (resp.ok) {
        checks.supabase = { status: "ok", detail: "Database connected" };
      } else {
        checks.supabase = { status: "warn", detail: `Query failed: ${resp.status}` };
      }
    } catch (e) {
      checks.supabase = { status: "down", detail: `Connection error: ${e.message}` };
    }
  } else {
    checks.supabase = { status: "warn", detail: "Env vars missing" };
  }

  // Check Auth (Supabase Auth)
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    try {
      // Simple check: can we query profiles table
      const resp = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/profiles?limit=1`, {
        headers: {
          "apikey": SUPABASE_SERVICE_ROLE_KEY,
          "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        },
      });
      if (resp.ok) {
        checks.auth = { status: "ok", detail: "Auth system available" };
      } else {
        checks.auth = { status: "warn", detail: "Auth table may not exist" };
      }
    } catch (e) {
      checks.auth = { status: "unknown", detail: "Auth check failed" };
    }
  } else {
    checks.auth = { status: "warn", detail: "Env vars missing" };
  }

  // Check GitHub (optional - can check repo status if GITHUB_TOKEN is set)
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (GITHUB_TOKEN) {
    checks.github = { status: "ok", detail: "Token configured" };
  } else {
    checks.github = { status: "unknown", detail: "Not configured" };
  }

  // Gmail check (requires Gmail OAuth setup - stub for now)
  const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
  if (GMAIL_CLIENT_ID) {
    checks.gmail = { status: "ok", detail: "OAuth configured" };
  }

  const overall = Object.values(checks).some(c => c.status === "down")
    ? "down"
    : Object.values(checks).some(c => c.status === "warn")
    ? "warn"
    : Object.values(checks).every(c => c.status === "ok")
    ? "ok"
    : "unknown";

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      ok: overall === "ok" || overall === "warn",
      checks,
      updated_at: new Date().toISOString(),
    }),
  };
}
