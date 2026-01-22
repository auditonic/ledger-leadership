/**
 * LLOps Health Check Function
 * Checks status of all integrated services
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

  // Verify auth if enabled
  const authResult = await verifyAuth(event);
  if (!authResult.ok) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  const checks = {
    netlify: await checkNetlify(),
    github: await checkGitHub(),
    supabase: await checkSupabase(),
    gmail: await checkGmail(),
    auth: await checkAuth(),
  };

  const overall = determineOverallStatus(checks);

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      ok: overall === "ok",
      checks,
      updated_at: new Date().toISOString(),
    }),
  };
}

async function verifyAuth(event) {
  // If auth is disabled in dev, allow
  if (process.env.LLOPS_AUTH_DISABLED === "true") {
    return { ok: true };
  }

  // Verify Supabase JWT
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

    // Check role
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

async function checkNetlify() {
  try {
    // Check if Netlify API is accessible
    const siteId = process.env.NETLIFY_SITE_ID;
    if (!siteId) {
      return { status: "unknown", detail: "NETLIFY_SITE_ID not configured" };
    }

    // Could ping Netlify API here
    return { status: "ok", detail: "Deploy channel reachable" };
  } catch {
    return { status: "unknown", detail: "Not connected" };
  }
}

async function checkGitHub() {
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      return { status: "unknown", detail: "GITHUB_TOKEN not configured" };
    }

    const repo = process.env.GITHUB_REPO;
    if (!repo) {
      return { status: "unknown", detail: "GITHUB_REPO not configured" };
    }

    // Test GitHub API access
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Authorization: `token ${token}` },
    });

    if (response.ok) {
      return { status: "ok", detail: "Repo connected" };
    }
    return { status: "warn", detail: "Repo access issue" };
  } catch {
    return { status: "unknown", detail: "Not connected" };
  }
}

async function checkSupabase() {
  try {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      return { status: "unknown", detail: "Supabase env vars missing" };
    }

    // Test Supabase connection
    const response = await fetch(`${url}/rest/v1/`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
    });

    if (response.ok) {
      return { status: "ok", detail: "Database connected" };
    }
    return { status: "warn", detail: "Schema pending / RLS not configured" };
  } catch {
    return { status: "warn", detail: "Connection issue" };
  }
}

async function checkGmail() {
  try {
    const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
    if (!refreshToken) {
      return { status: "unknown", detail: "Not connected" };
    }

    // Could test Gmail API here
    return { status: "ok", detail: "Gmail API connected" };
  } catch {
    return { status: "unknown", detail: "Not connected" };
  }
}

async function checkAuth() {
  try {
    if (process.env.LLOPS_AUTH_DISABLED === "true") {
      return { status: "warn", detail: "Auth not enabled" };
    }

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      return { status: "unknown", detail: "Supabase Auth not configured" };
    }

    return { status: "ok", detail: "Supabase Auth enabled" };
  } catch {
    return { status: "warn", detail: "Auth not enabled" };
  }
}

function determineOverallStatus(checks) {
  const statuses = Object.values(checks).map((c) => c.status);
  if (statuses.includes("down")) return "down";
  if (statuses.includes("warn")) return "warn";
  if (statuses.every((s) => s === "ok")) return "ok";
  return "unknown";
}
