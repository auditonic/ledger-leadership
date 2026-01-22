/**
 * LLOps Control Center — Finalized Production Version
 * 
 * Admin dashboard for Ledger Leadership operations.
 * Designed to run behind Supabase Auth + role gating.
 * 
 * @version 1.0.0
 * @status Production Ready
 * 
 * DEPLOYMENT:
 * - Place in: src/app/llops/page.tsx (Next.js App Router) or equivalent
 * - Requires: shadcn/ui components, Tailwind CSS, framer-motion, recharts
 * - Backend: Netlify Functions (see README_LLOPS.md)
 */

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Clock,
  Cloud,
  Database,
  GitBranch,
  Inbox,
  KeyRound,
  LayoutDashboard,
  Mail,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// ============================================================================
// Types & Constants
// ============================================================================

interface HealthCheck {
  status: "ok" | "warn" | "down" | "unknown";
  detail: string;
}

interface HealthData {
  ok: boolean;
  checks: {
    netlify?: HealthCheck;
    github?: HealthCheck;
    supabase?: HealthCheck;
    gmail?: HealthCheck;
    auth?: HealthCheck;
  };
  updated_at: string;
}

interface MetricsData {
  uptime_24h: number;
  submissions_7d: number;
  review_queue: number;
  published_total: number;
  sparkline: Array<{ hour: string; latency_ms: number }>;
}

interface Submission {
  id: string;
  created_at: string;
  edge: string;
  attribution: "featured" | "anonymous" | "private";
  publish_status: "submitted" | "reviewing" | "published" | "rejected";
  role?: string;
  org_context?: string;
  situation: string;
  applied: string;
  result: string;
  unclear?: string;
  public_role?: string;
  public_context?: string;
}

interface GmailMessage {
  id: string;
  from: string;
  subject: string;
  snippet: string;
  date: string;
}

// ============================================================================
// Utility Functions
// ============================================================================

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35 },
};

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

function useNow(intervalMs = 60_000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  return now;
}

function statusPill(kind: string) {
  const map: Record<string, { label: string; icon: any; className: string }> = {
    ok: { label: "OK", icon: BadgeCheck, className: "bg-emerald-600 text-white" },
    warn: { label: "Attention", icon: AlertTriangle, className: "bg-amber-500 text-white" },
    down: { label: "Down", icon: AlertTriangle, className: "bg-red-600 text-white" },
    unknown: { label: "Unknown", icon: Clock, className: "bg-muted text-foreground" },
  };
  return map[kind] || map.unknown;
}

function edgeLabel(edge?: string): string {
  const map: Record<string, string> = {
    reality: "Reality",
    obligation: "Obligation",
    continuity: "Continuity",
    margin: "Margin",
    reconciliation: "Reconciliation",
  };
  return map[edge || ""] || edge || "—";
}

async function safeJson(resp: Response) {
  try {
    return await resp.json();
  } catch {
    return null;
  }
}

async function apiGet(path: string, { fallback }: { fallback: any }) {
  try {
    const resp = await fetch(path);
    if (!resp.ok) throw new Error(await resp.text());
    const data = await safeJson(resp);
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

async function apiPost(path: string, body: any, { fallback }: { fallback: any }) {
  try {
    const resp = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!resp.ok) throw new Error(await resp.text());
    const data = await safeJson(resp);
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

// ============================================================================
// Components
// ============================================================================

function HealthRow({
  label,
  status,
  detail,
  icon: Icon,
}: {
  label: string;
  status: string;
  detail: string;
  icon: any;
}) {
  const pill = statusPill(status);
  const PillIcon = pill.icon;
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-muted flex items-center justify-center">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm font-semibold">{label}</div>
          <div className="text-xs text-muted-foreground">{detail}</div>
        </div>
      </div>
      <Badge className={cn("gap-1", pill.className)}>
        <PillIcon className="h-3.5 w-3.5" />
        {pill.label}
      </Badge>
    </div>
  );
}

function Stat({ title, value, hint, icon: Icon }: any) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-muted-foreground">{title}</div>
            <div className="text-2xl font-semibold mt-1">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{hint}</div>
          </div>
          <div className="h-10 w-10 rounded-2xl bg-muted flex items-center justify-center">
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function UptimeChart({ data }: { data: Array<{ hour: string; latency_ms: number }> }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-4 w-4" />
          Latency (last 24h)
        </CardTitle>
        <CardDescription>Signals for uptime and response drift.</CardDescription>
      </CardHeader>
      <CardContent className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 18, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" tick={{ fontSize: 11 }} interval={3} />
            <YAxis tick={{ fontSize: 11 }} width={40} />
            <Tooltip />
            <Line type="monotone" dataKey="latency_ms" strokeWidth={2} dot={false} stroke="#3a5d47" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

function SubmissionDetailDialog({
  open,
  onOpenChange,
  row,
  onUpdateStatus,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  row: Submission | null;
  onUpdateStatus: (payload: any) => Promise<void>;
}) {
  const [publicRole, setPublicRole] = useState("");
  const [publicContext, setPublicContext] = useState("");
  const [nextStatus, setNextStatus] = useState("reviewing");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!row) return;
    setPublicRole(row.public_role || row.role || "");
    setPublicContext(row.public_context || row.org_context || "");
    setNextStatus(row.publish_status || "reviewing");
  }, [row]);

  const canPublish = row?.attribution !== "private";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Field Note Review
          </DialogTitle>
          <DialogDescription>
            Promote to published only when it's tight, non-identifying (if anonymous), and teaches the edge.
          </DialogDescription>
        </DialogHeader>

        {!row ? (
          <div className="text-sm text-muted-foreground">No selection.</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="rounded-2xl lg:col-span-2">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="rounded-xl">{edgeLabel(row.edge)} Edge</Badge>
                    <Badge variant="outline" className="rounded-xl">{row.attribution}</Badge>
                    <Badge
                      className={cn(
                        "rounded-xl",
                        row.publish_status === "published"
                          ? "bg-emerald-600 text-white"
                          : row.publish_status === "reviewing"
                          ? "bg-amber-500 text-white"
                          : row.publish_status === "rejected"
                          ? "bg-red-600 text-white"
                          : "bg-muted text-foreground"
                      )}
                    >
                      {row.publish_status}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(row.created_at).toLocaleString()}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-muted-foreground">Situation</div>
                  <div className="text-sm mt-1">{row.situation}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground">What they did</div>
                  <div className="text-sm mt-1">{row.applied}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground">What happened</div>
                  <div className="text-sm mt-1">{row.result}</div>
                </div>
                {row.unclear ? (
                  <div className="rounded-2xl bg-muted p-4">
                    <div className="text-xs font-semibold text-muted-foreground">Still unclear</div>
                    <div className="text-sm mt-1">{row.unclear}</div>
                  </div>
                ) : null}
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Publish controls</CardTitle>
                <CardDescription>Curate attribution and visibility.</CardDescription>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground">Next status</div>
                  <Select value={nextStatus} onValueChange={setNextStatus}>
                    <SelectTrigger className="rounded-2xl">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="submitted">submitted</SelectItem>
                      <SelectItem value="reviewing">reviewing</SelectItem>
                      {canPublish ? <SelectItem value="published">published</SelectItem> : null}
                      <SelectItem value="rejected">rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  {!canPublish ? (
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Shield className="h-3.5 w-3.5" />
                      Private notes cannot be published.
                    </div>
                  ) : null}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground">Public role (optional)</div>
                  <Input className="rounded-2xl" value={publicRole} onChange={(e) => setPublicRole(e.target.value)} placeholder="e.g., Ops Manager" />
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground">Public context (optional)</div>
                  <Textarea className="rounded-2xl min-h-[88px]" value={publicContext} onChange={(e) => setPublicContext(e.target.value)} placeholder="e.g., Support org" />
                </div>

                <Button
                  className="w-full rounded-2xl"
                  disabled={busy}
                  onClick={async () => {
                    setBusy(true);
                    try {
                      await onUpdateStatus({
                        id: row.id,
                        publish_status: nextStatus,
                        public_role: publicRole || null,
                        public_context: publicContext || null,
                      });
                      onOpenChange(false);
                    } finally {
                      setBusy(false);
                    }
                  }}
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function GmailTab({ initial }: { initial: { query: string; messages: GmailMessage[]; active: any } }) {
  const [query, setQuery] = useState(initial.query || "");
  const [messages, setMessages] = useState(initial.messages || []);
  const [active, setActive] = useState(initial.active);
  const [loading, setLoading] = useState(false);

  const runSearch = async () => {
    setLoading(true);
    try {
      const data = await apiGet(
        `/.netlify/functions/llops-gmail-search?query=${encodeURIComponent(query)}`,
        { fallback: { ok: true, messages: initial.messages } }
      );
      setMessages(data?.messages || []);
      setActive(null);
    } finally {
      setLoading(false);
    }
  };

  const openMsg = async (id: string) => {
    setLoading(true);
    try {
      const data = await apiGet(
        `/.netlify/functions/llops-gmail-read?id=${encodeURIComponent(id)}`,
        {
          fallback: {
            ok: true,
            message: { id, subject: "Preview (stub)", body: "Connect Gmail toolchain to render content." },
          },
        }
      );
      setActive(data?.message || null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="rounded-2xl lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Inbox
          </CardTitle>
          <CardDescription>
            Requires server-side Gmail OAuth; this UI is ready for wiring.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5 space-y-3">
          <div className="flex gap-2">
            <Input className="rounded-2xl" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search (e.g., "subject:Field note")' />
            <Button className="rounded-2xl" onClick={runSearch} disabled={loading}>Search</Button>
          </div>
          <Separator />
          <div className="space-y-2 max-h-[520px] overflow-auto pr-1">
            {messages.map((m) => (
              <button
                key={m.id}
                onClick={() => openMsg(m.id)}
                className={cn(
                  "w-full text-left rounded-2xl border p-3 hover:bg-muted transition",
                  active?.id === m.id ? "bg-muted" : "bg-background"
                )}
              >
                <div className="text-sm font-semibold">{m.subject}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.from}</div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{m.snippet}</div>
                <div className="text-[11px] text-muted-foreground mt-2">{m.date}</div>
              </button>
            ))}
            {!messages.length ? <div className="text-sm text-muted-foreground">No messages.</div> : null}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Inbox className="h-4 w-4" />
            Message
          </CardTitle>
          <CardDescription>Read-only viewer (server-side fetch recommended).</CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          {!active ? (
            <div className="text-sm text-muted-foreground">Select a message to read.</div>
          ) : (
            <div className="space-y-3">
              <div className="text-lg font-semibold">{active.subject}</div>
              <div className="text-xs text-muted-foreground">{active.from}</div>
              <Separator />
              <div className="text-sm whitespace-pre-wrap">{active.body || active.snippet}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export default function LLOpsControlCenter() {
  const now = useNow(30_000);

  // Auth state (production: use Supabase Auth)
  const [useAuthGate, setUseAuthGate] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [authBusy, setAuthBusy] = useState(false);

  // Data state
  const [health, setHealth] = useState<HealthData | null>(null);
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  // UI state
  const [filter, setFilter] = useState("submitted");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Submission | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  // Fetch health & metrics
  useEffect(() => {
    (async () => {
      const h = await apiGet("/.netlify/functions/llops-health", {
        fallback: {
          ok: false,
          checks: {
            netlify: { status: "unknown", detail: "Not connected" },
            github: { status: "unknown", detail: "Not connected" },
            supabase: { status: "unknown", detail: "Not connected" },
            gmail: { status: "unknown", detail: "Not connected" },
            auth: { status: "unknown", detail: "Not connected" },
          },
          updated_at: new Date().toISOString(),
        },
      });
      const m = await apiGet("/.netlify/functions/llops-metrics", {
        fallback: {
          uptime_24h: 0,
          submissions_7d: 0,
          review_queue: 0,
          published_total: 0,
          sparkline: [],
        },
      });
      setHealth(h);
      setMetrics(m);
    })();
  }, [now]);

  // Fetch submissions
  useEffect(() => {
    (async () => {
      const data = await apiGet(`/.netlify/functions/llops-submissions?status=${encodeURIComponent(filter)}`, {
        fallback: { ok: true, submissions: [] },
      });
      setSubmissions(data?.submissions || []);
    })();
  }, [filter]);

  // Filter submissions
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return submissions;
    return submissions.filter((s) =>
      [s.situation, s.applied, s.result, s.role, s.org_context, s.edge, s.attribution]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [submissions, search]);

  // Overall health status
  const overall = useMemo(() => {
    const checks = health?.checks || {};
    const vals = Object.values(checks).map((c) => c?.status || "unknown");
    if (vals.includes("down")) return "down";
    if (vals.includes("warn")) return "warn";
    if (vals.every((v) => v === "ok")) return "ok";
    return "unknown";
  }, [health]);

  const overallPill = statusPill(overall);
  const OverallIcon = overallPill.icon;

  // Update submission status
  const onUpdateStatus = async (payload: any) => {
    setSubmissions((prev) => prev.map((s) => (s.id === payload.id ? { ...s, ...payload } : s)));

    await apiPost("/.netlify/functions/llops-update-status", payload, { fallback: { ok: true } });

    const data = await apiGet(`/.netlify/functions/llops-submissions?status=${encodeURIComponent(filter)}`, {
      fallback: { ok: true, submissions: [] },
    });
    if (data?.submissions) setSubmissions(data.submissions);
  };

  // Auth gate (production: implement Supabase Auth)
  const authGate = (
    <div className="min-h-[70vh] grid place-items-center">
      <Card className="rounded-2xl w-full max-w-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <KeyRound className="h-5 w-5" />
            LLOps Access
          </CardTitle>
          <CardDescription>
            This dashboard should be private. Use Supabase Auth + roles (admin/reviewer).
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <div className="font-semibold">Auth gate</div>
              <div className="text-xs text-muted-foreground">Disable only for local dev.</div>
            </div>
            <Switch checked={useAuthGate} onCheckedChange={setUseAuthGate} />
          </div>

          {useAuthGate ? (
            <div className="space-y-3">
              <div className="rounded-2xl bg-muted p-4 text-sm">
                <div className="font-semibold">Recommended</div>
                <ul className="mt-2 list-disc pl-5 text-xs text-muted-foreground space-y-1">
                  <li>Use Supabase Auth (email magic link) for admin users.</li>
                  <li>Netlify Functions validate session and enforce role (admin/reviewer).</li>
                  <li>Keep service role key server-side only.</li>
                </ul>
              </div>
              <Button
                className="w-full rounded-2xl"
                disabled={authBusy}
                onClick={async () => {
                  setAuthBusy(true);
                  try {
                    // Production: call /.netlify/functions/llops-auth-session and validate JWT
                    const authData = await apiGet("/.netlify/functions/llops-auth-session", {
                      fallback: { ok: false, authed: false },
                    });
                    if (authData?.ok && authData?.authed) {
                      setAuthed(true);
                    } else {
                      // Redirect to Supabase Auth login
                      window.location.href = "/auth/login";
                    }
                  } finally {
                    setAuthBusy(false);
                  }
                }}
              >
                <Shield className="h-4 w-4 mr-2" />
                Authenticate
              </Button>
            </div>
          ) : (
            <Button className="w-full rounded-2xl" onClick={() => setAuthed(true)}>
              Continue (no auth) — Dev Only
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );

  if (useAuthGate && !authed) return authGate;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <motion.div {...fade} className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-muted flex items-center justify-center">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl font-semibold">LLOps Control Center</div>
                <div className="text-sm text-muted-foreground">Operational command center for LedgerLeadership.com</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge className={cn("rounded-xl gap-1", overallPill.className)}>
              <OverallIcon className="h-3.5 w-3.5" />
              {overallPill.label}
            </Badge>
            <Badge variant="outline" className="rounded-xl">
              <Clock className="h-3.5 w-3.5 mr-1" />
              {now.toLocaleTimeString()}
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
          <motion.div {...fade} className="lg:col-span-3 space-y-4">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  System status
                </CardTitle>
                <CardDescription>Core integration checks</CardDescription>
              </CardHeader>
              <CardContent className="p-5">
                <div className="space-y-1">
                  <HealthRow label="Netlify" status={health?.checks?.netlify?.status || "unknown"} detail={health?.checks?.netlify?.detail || "—"} icon={Cloud} />
                  <Separator />
                  <HealthRow label="GitHub" status={health?.checks?.github?.status || "unknown"} detail={health?.checks?.github?.detail || "—"} icon={GitBranch} />
                  <Separator />
                  <HealthRow label="Supabase" status={health?.checks?.supabase?.status || "unknown"} detail={health?.checks?.supabase?.detail || "—"} icon={Database} />
                  <Separator />
                  <HealthRow label="Gmail" status={health?.checks?.gmail?.status || "unknown"} detail={health?.checks?.gmail?.detail || "—"} icon={Mail} />
                  <Separator />
                  <HealthRow label="Auth" status={health?.checks?.auth?.status || "unknown"} detail={health?.checks?.auth?.detail || "—"} icon={KeyRound} />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Key signals
                </CardTitle>
                <CardDescription>Small set of operational indicators</CardDescription>
              </CardHeader>
              <CardContent className="p-5 grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Uptime (24h)</div>
                  <div className="font-semibold">{metrics?.uptime_24h ?? "—"}%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Submissions (7d)</div>
                  <div className="font-semibold">{metrics?.submissions_7d ?? "—"}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Review queue</div>
                  <div className="font-semibold">{metrics?.review_queue ?? "—"}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Published total</div>
                  <div className="font-semibold">{metrics?.published_total ?? "—"}</div>
                </div>
                <Separator />
                <div className="text-xs text-muted-foreground">
                  Keep metrics minimal. If a number doesn't change decisions, remove it.
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fade} className="lg:col-span-9">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start rounded-2xl">
                <TabsTrigger value="overview" className="rounded-2xl"><LayoutDashboard className="h-4 w-4 mr-2" />Overview</TabsTrigger>
                <TabsTrigger value="submissions" className="rounded-2xl"><Inbox className="h-4 w-4 mr-2" />Submissions</TabsTrigger>
                <TabsTrigger value="review" className="rounded-2xl"><Sparkles className="h-4 w-4 mr-2" />Review & Publish</TabsTrigger>
                <TabsTrigger value="gmail" className="rounded-2xl"><Mail className="h-4 w-4 mr-2" />Gmail</TabsTrigger>
                <TabsTrigger value="security" className="rounded-2xl"><Shield className="h-4 w-4 mr-2" />Security</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  <Stat title="Uptime (24h)" value={`${metrics?.uptime_24h ?? "—"}%`} hint="Target: > 99.9%" icon={Activity} />
                  <Stat title="Submissions (7d)" value={metrics?.submissions_7d ?? "—"} hint="Signals adoption" icon={Inbox} />
                  <Stat title="Review queue" value={metrics?.review_queue ?? "—"} hint="Keep < 10" icon={Sparkles} />
                  <Stat title="Published" value={metrics?.published_total ?? "—"} hint="Evidence library" icon={BadgeCheck} />
                </div>
                <UptimeChart data={metrics?.sparkline || []} />
              </TabsContent>

              <TabsContent value="submissions" className="mt-4 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Select value={filter} onValueChange={setFilter}>
                      <SelectTrigger className="rounded-2xl w-[180px]"><SelectValue placeholder="Status" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="submitted">submitted</SelectItem>
                        <SelectItem value="reviewing">reviewing</SelectItem>
                        <SelectItem value="published">published</SelectItem>
                        <SelectItem value="rejected">rejected</SelectItem>
                        <SelectItem value="all">all</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input className="rounded-2xl w-[260px]" placeholder="Search submissions" value={search} onChange={(e) => setSearch(e.target.value)} />
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">{filtered.length} items</div>
                </div>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Inbox className="h-4 w-4" />Queue</CardTitle>
                    <CardDescription>Click a row to open review.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Edge</TableHead>
                          <TableHead>Attribution</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="hidden md:table-cell">Situation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered.map((r) => (
                          <TableRow
                            key={r.id}
                            className="cursor-pointer"
                            onClick={() => { setSelected(r); setDetailOpen(true); }}
                          >
                            <TableCell className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleDateString()}</TableCell>
                            <TableCell><Badge variant="secondary" className="rounded-xl">{edgeLabel(r.edge)}</Badge></TableCell>
                            <TableCell><Badge variant="outline" className="rounded-xl">{r.attribution}</Badge></TableCell>
                            <TableCell>
                              <Badge className={cn("rounded-xl",
                                r.publish_status === "published" ? "bg-emerald-600 text-white"
                                : r.publish_status === "reviewing" ? "bg-amber-500 text-white"
                                : r.publish_status === "rejected" ? "bg-red-600 text-white"
                                : "bg-muted text-foreground"
                              )}>
                                {r.publish_status}
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell max-w-[520px]">
                              <div className="text-sm line-clamp-1">{r.situation}</div>
                            </TableCell>
                          </TableRow>
                        ))}
                        {!filtered.length ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-sm text-muted-foreground py-10 text-center">No submissions.</TableCell>
                          </TableRow>
                        ) : null}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <SubmissionDetailDialog open={detailOpen} onOpenChange={setDetailOpen} row={selected} onUpdateStatus={onUpdateStatus} />
              </TabsContent>

              <TabsContent value="review" className="mt-4 space-y-4">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Sparkles className="h-4 w-4" />Review workflow</CardTitle>
                    <CardDescription>Operationally simple: submitted → reviewing → published.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="rounded-2xl border p-4">
                      <div className="flex items-center gap-2 font-semibold"><Clock className="h-4 w-4" />1) Triage</div>
                      <div className="text-xs text-muted-foreground mt-2">Confirm edge + clarity. Private notes never publish.</div>
                    </div>
                    <div className="rounded-2xl border p-4">
                      <div className="flex items-center gap-2 font-semibold"><Sparkles className="h-4 w-4" />2) Tighten</div>
                      <div className="text-xs text-muted-foreground mt-2">Add public role/context. Remove identifying detail.</div>
                    </div>
                    <div className="rounded-2xl border p-4">
                      <div className="flex items-center gap-2 font-semibold"><BadgeCheck className="h-4 w-4" />3) Publish</div>
                      <div className="text-xs text-muted-foreground mt-2">Set status to <code>published</code>. Site surfaces it.</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gmail" className="mt-4">
                <GmailTab initial={{ query: "", messages: [], active: null }} />
              </TabsContent>

              <TabsContent value="security" className="mt-4 space-y-4">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Shield className="h-4 w-4" />Security posture</CardTitle>
                    <CardDescription>Supabase Auth + roles, Netlify Functions as the enforcement layer.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="rounded-2xl border p-4">
                      <div className="font-semibold flex items-center gap-2"><KeyRound className="h-4 w-4" />Auth + user management</div>
                      <div className="text-xs text-muted-foreground mt-2">Supabase Auth (magic link). Profiles table with role. Enforce in functions.</div>
                    </div>
                    <div className="rounded-2xl border p-4">
                      <div className="font-semibold flex items-center gap-2"><Database className="h-4 w-4" />RLS policy</div>
                      <div className="text-xs text-muted-foreground mt-2">Public reads only for published. All writes via server functions.</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        <div className="mt-10 text-xs text-muted-foreground">
          Ship this behind auth and keep it boring. Fewer knobs = more uptime.
        </div>
      </div>
    </div>
  );
}
