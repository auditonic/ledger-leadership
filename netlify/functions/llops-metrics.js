/**
 * LLOps Metrics Function
 * Returns operational metrics for the dashboard
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
    const metrics = await calculateMetrics();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(metrics),
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

async function calculateMetrics() {
  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const now = new Date();
  const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const last7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Submissions in last 7 days
  const { count: submissions7d } = await supabase
    .from("field_notes")
    .select("*", { count: "exact", head: true })
    .gte("created_at", last7d.toISOString());

  // Review queue (submitted + reviewing)
  const { count: reviewQueue } = await supabase
    .from("field_notes")
    .select("*", { count: "exact", head: true })
    .in("publish_status", ["submitted", "reviewing"]);

  // Published total
  const { count: publishedTotal } = await supabase
    .from("field_notes")
    .select("*", { count: "exact", head: true })
    .eq("publish_status", "published");

  // Generate sparkline data (last 24 hours, hourly)
  const sparkline = [];
  for (let i = 23; i >= 0; i--) {
    const hourStart = new Date(now.getTime() - i * 60 * 60 * 1000);
    const hourEnd = new Date(hourStart.getTime() + 60 * 60 * 1000);
    
    // Mock latency for now - replace with actual metrics if available
    const latency_ms = Math.round(120 + Math.sin(i / 3) * 30 + Math.random() * 20);
    
    sparkline.push({
      hour: `${String(hourStart.getHours()).padStart(2, "0")}:00`,
      latency_ms,
    });
  }

  // Calculate uptime (mock for now - replace with actual monitoring)
  const uptime_24h = 99.92;

  return {
    uptime_24h,
    submissions_7d: submissions7d || 0,
    review_queue: reviewQueue || 0,
    published_total: publishedTotal || 0,
    sparkline,
  };
}
