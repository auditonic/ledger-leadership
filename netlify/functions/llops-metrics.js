/**
 * LLOps Metrics
 * Returns operational metrics: uptime, submissions, review queue, published count
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

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        uptime_24h: 0,
        submissions_7d: 0,
        review_queue: 0,
        published_total: 0,
        sparkline: [],
      }),
    };
  }

  try {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Get submissions in last 7 days
    const submissionsUrl = new URL(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/field_notes`);
    submissionsUrl.searchParams.set("select", "created_at,publish_status");
    submissionsUrl.searchParams.set("created_at", `gte.${sevenDaysAgo.toISOString()}`);

    const submissionsResp = await fetch(submissionsUrl.toString(), {
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });

    let submissions_7d = 0;
    let review_queue = 0;
    let published_total = 0;

    if (submissionsResp.ok) {
      const submissions = await submissionsResp.json();
      submissions_7d = submissions.length || 0;
      review_queue = submissions.filter(s => s.publish_status === "submitted" || s.publish_status === "reviewing").length || 0;
    }

    // Get total published count
    const publishedUrl = new URL(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/field_notes`);
    publishedUrl.searchParams.set("select", "id");
    publishedUrl.searchParams.set("publish_status", "eq.published");

    const publishedResp = await fetch(publishedUrl.toString(), {
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });

    if (publishedResp.ok) {
      const published = await publishedResp.json();
      published_total = published.length || 0;
    }

    // Generate sparkline data (mock for now - can be enhanced with real latency data)
    const sparkline = Array.from({ length: 24 }).map((_, i) => ({
      hour: `${String(i).padStart(2, "0")}:00`,
      latency_ms: Math.round(120 + Math.sin(i / 3) * 30 + Math.random() * 20),
    }));

    // Uptime calculation (simplified - would need actual monitoring data)
    const uptime_24h = 99.9; // Placeholder

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        uptime_24h,
        submissions_7d,
        review_queue,
        published_total,
        sparkline,
      }),
    };
  } catch (e) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        uptime_24h: 0,
        submissions_7d: 0,
        review_queue: 0,
        published_total: 0,
        sparkline: [],
      }),
    };
  }
}
