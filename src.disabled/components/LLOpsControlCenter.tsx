"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
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

/**
 * LLOps Control Center
 *
 * Designed to run as an INTERNAL admin app behind Supabase Auth + role gating.
 * It talks only to Netlify Functions (server-side) so secrets never ship to the browser.
 *
 * Expected Netlify Functions (server-side):
 * - /.netlify/functions/llops-health
 * - /.netlify/functions/llops-metrics
 * - /.netlify/functions/llops-submissions?status=submitted|reviewing|published|rejected|all
 * - /.netlify/functions/llops-update-status   (POST { id, publish_status, public_role?, public_context? })
 * - /.netlify/functions/llops-gmail-search?query=...
 * - /.netlify/functions/llops-gmail-read?id=...
 * - /.netlify/functions/llops-auth-session (checks Supabase JWT + role)
 */

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
  const map: Record<string, any> = {
    ok: { label: "OK", icon: BadgeCheck, className: "bg-emerald-600 text-white" },
    warn: { label: "Attention", icon: AlertTriangle, className: "bg-amber-500 text-white" },
    down: { label: "Down", icon: AlertTriangle, className: "bg-red-600 text-white" },
    unknown: { label: "Unknown", icon: Clock, className: "bg-muted text-foreground" },
  };
  return map[kind] || map.unknown;
}

function edgeLabel(edge?: string) {
  const map: Record<string, string> = {
    reality: "Reality",
    obligation: "Obligation",
    continuity: "Continuity",
    margin: "Margin",
    reconciliation: "Reconciliation",
  };
  return map[edge || ""] || edge || "—";
}

// --------- Mock data (used until functions are wired) ---------
const MOCK = {
  health: {
    ok: false,
    checks: {
      netlify: { status: "ok", detail: "Deploy channel reachable" },
      github: { status: "ok", detail: "Repo connected" },
      supabase: { status: "warn", detail: "Schema pending / RLS not configured" },
      gmail: { status: "unknown", detail: "Not connected" },
      auth: { status: "warn", detail: "Auth not enabled" },
    },
    updated_at: new Date().toISOString(),
  },
  metrics: {
    uptime_24h: 99.92,
    submissions_7d: 7,
    review_queue: 3,
    published_total: 12,
    sparkline: Array.from({ length: 24 }).map((_, i) => ({
      hour: `${String(i).padStart(2, "0")}:00`,
      latency_ms: Math.round(120 + Math.sin(i / 3) * 30 + Math.random() * 20),
    })),
  },
  submissions: [
    {
      id: "a1",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
      edge: "reality",
      attribution: "anonymous",
      publish_status: "submitted",
      role: "Product Lead",
      org_context: "Growth team",
      situation: "Leadership kept getting pulled into prioritization decisions for small changes.",
      applied: "Asked the two questions; moved decision ownership to the on-call product owner.",
      result: "Escalations dropped; clearer decision boundary.",
      unclear: "How to handle cross-team tradeoffs without meetings.",
      public_role: null,
      public_context: null,
    },
    {
      id: "b2",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(),
      edge: "margin",
      attribution: "featured",
      publish_status: "reviewing",
      role: "Ops Manager",
      org_context: "Support org",
      situation: "Too many meetings to align simple handoffs.",
      applied: "Stopped work until ownership was explicit; replaced meeting with written handoff template.",
      result: "Meeting count fell; handoffs improved.",
      unclear: "How to enforce template adoption without policing.",
      public_role: "Ops Manager",
      public_context: "Support org",
    },
    {
      id: "c3",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(),
      edge: "continuity",
      attribution: "featured",
      publish_status: "published",
      role: "Engineering Manager",
      org_context: "Platform",
      situation: "Incidents escalated to leadership every weekend.",
      applied: "Moved incident decision rights to the incident commander; clarified escalation triggers.",
      result: "Leadership involvement reduced; faster resolution.",
      unclear: null,
      public_role: "Engineering Manager",
      public_context: "Platform",
    },
  ],
  gmail: {
    query: "",
    messages: [
      {
        id: "m1",
        from: "Contrib <someone@example.com>",
        subject: "Field note submission — Margin Edge",
        snippet: "I tried the rule about not starting work without ownership…",
        date: "Today",
      },
      {
        id: "m2",
        from: "Podcast Host <host@pod.example>",
        subject: "Invite: Ledger Leadership discussion",
        snippet: "Would love to have you on the show…",
        date: "Yesterday",
      },
    ],
    active: null,
  },
};

async function safeJson(resp: Response) {
  try {
    return await resp.json();
  } catch {
    return null;
  }
}

async function getAuthToken(): Promise<string | null> {
  try {
    const { supabase } = await import('@/lib/supabase');
    const { data: { session } } = await supabase.auth.getSession();
    return session?.access_token || null;
  } catch {
    return null;
  }
}

async function apiGet(path: string, { fallback }: { fallback: any }) {
  try {
    const token = await getAuthToken();
    const headers: HeadersInit = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const resp = await fetch(path, { headers });
    if (!resp.ok) throw new Error(await resp.text());
    const data = await safeJson(resp);
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

async function apiPost(path: string, body: any, { fallback }: { fallback: any }) {
  try {
    const token = await getAuthToken();
    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const resp = await fetch(path, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    if (!resp.ok) throw new Error(await resp.text());
    const data = await safeJson(resp);
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

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

function UptimeChart({ data }: any) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-4 w-4" />
          Latency (last 24h)
        </CardTitle>
        <CardDescription>Signals for uptime and response drift (illustrative until wired).</CardDescription>
      </CardHeader>
      <CardContent className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 18, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" tick={{ fontSize: 11 }} interval={3} />
            <YAxis tick={{ fontSize: 11 }} width={40} />
            <Tooltip />
            <Line type="monotone" dataKey="latency_ms" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

function DeploymentPipeline({ deployments }: { deployments?: any[] }) {
  // Mock deployment data if not provided
  const recentDeployments = deployments || [
    { id: "1", commit: "c9a19a4", status: "success", stages: ["build", "test", "deploy", "verify"], timestamp: new Date(Date.now() - 1000 * 60 * 5) },
    { id: "2", commit: "3b30fc4", status: "success", stages: ["build", "test", "deploy", "verify"], timestamp: new Date(Date.now() - 1000 * 60 * 15) },
    { id: "3", commit: "6f836fe", status: "failed", stages: ["build", "test"], failedStage: "test", timestamp: new Date(Date.now() - 1000 * 60 * 30) },
    { id: "4", commit: "144adda", status: "success", stages: ["build", "test", "deploy", "verify"], timestamp: new Date(Date.now() - 1000 * 60 * 60) },
  ];

  const stageLabels = {
    build: "Build",
    test: "Test",
    deploy: "Deploy",
    verify: "Verify",
  };

  const getStageStatus = (deployment: any, stage: string) => {
    if (deployment.failedStage === stage) return "failed";
    const stageIndex = deployment.stages.indexOf(stage);
    const failedIndex = deployment.stages.indexOf(deployment.failedStage || "");
    if (failedIndex !== -1 && stageIndex > failedIndex) return "pending";
    if (deployment.status === "success" || stageIndex < deployment.stages.length) return "success";
    return "pending";
  };

  const getStageColor = (status: string) => {
    switch (status) {
      case "success": return "bg-emerald-500";
      case "failed": return "bg-red-500";
      case "pending": return "bg-gray-300";
      default: return "bg-gray-300";
    }
  };

  const latest = recentDeployments[0];

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GitBranch className="h-4 w-4" />
          Deployment Pipeline
        </CardTitle>
        <CardDescription>Recent deployment status and pipeline visualization</CardDescription>
      </CardHeader>
      <CardContent className="p-5 space-y-4">
        {/* Latest Deployment Pipeline */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold">Latest: {latest.commit}</div>
            <Badge className={cn(
              "rounded-xl",
              latest.status === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
            )}>
              {latest.status === "success" ? "Success" : "Failed"}
            </Badge>
          </div>
          
          {/* Pipeline Visualization */}
          <div className="flex items-center gap-2">
            {["build", "test", "deploy", "verify"].map((stage, index) => {
              const status = getStageStatus(latest, stage);
              const isLast = index === 3;
              
              return (
                <React.Fragment key={stage}>
                  <div className="flex flex-col items-center">
                    <div className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center text-white text-xs font-semibold",
                      getStageColor(status)
                    )}>
                      {status === "success" ? <CheckCircle2 className="h-5 w-5" /> :
                       status === "failed" ? <AlertTriangle className="h-5 w-5" /> :
                       <Clock className="h-5 w-5" />}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stageLabels[stage as keyof typeof stageLabels]}</div>
                  </div>
                  {!isLast && (
                    <div className={cn(
                      "h-1 flex-1",
                      status === "failed" ? "bg-red-500" : 
                      status === "success" ? "bg-emerald-500" : "bg-gray-300"
                    )} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
          
          {latest.failedStage && (
            <div className="mt-2 text-xs text-red-600">
              Failed at: {stageLabels[latest.failedStage as keyof typeof stageLabels]}
            </div>
          )}
        </div>

        <Separator />

        {/* Recent Deployments List */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-muted-foreground">Recent Deployments</div>
          {recentDeployments.slice(0, 3).map((deploy) => (
            <div key={deploy.id} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "h-2 w-2 rounded-full",
                  deploy.status === "success" ? "bg-emerald-500" : "bg-red-500"
                )} />
                <span className="font-mono text-xs">{deploy.commit}</span>
                <span className="text-xs text-muted-foreground">
                  {deploy.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <Badge variant="outline" className="text-xs">
                {deploy.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SubmissionDetailDialog({
  open,
  onOpenChange,
  row,
  onUpdateStatus,
}: any) {
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
            Promote to published only when it’s tight, non-identifying (if anonymous), and teaches the edge.
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

function GmailTab({ initial }: any) {
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
            {messages.map((m: any) => (
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

export default function LLOpsControlCenter() {
  const now = useNow(30_000);
  const { user, signOut } = useAuth();

  const [health, setHealth] = useState<any>(MOCK.health);
  const [metrics, setMetrics] = useState<any>(MOCK.metrics);
  const [submissions, setSubmissions] = useState<any[]>(MOCK.submissions);

  const [filter, setFilter] = useState("submitted");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<any>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const h = await apiGet("/.netlify/functions/llops-health", { fallback: MOCK.health });
      const m = await apiGet("/.netlify/functions/llops-metrics", { fallback: MOCK.metrics });
      setHealth(h || MOCK.health);
      setMetrics(m || MOCK.metrics);
    })();
  }, [now]);

  useEffect(() => {
    (async () => {
      const data = await apiGet(`/.netlify/functions/llops-submissions?status=${encodeURIComponent(filter)}`, {
        fallback: { ok: true, submissions: MOCK.submissions.filter((s: any) => s.publish_status === filter) },
      });
      const rows = data?.submissions || [];
      setSubmissions(rows.length ? rows : (filter === "all" ? MOCK.submissions : MOCK.submissions.filter((s: any) => s.publish_status === filter)));
    })();
  }, [filter]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return submissions;
    return submissions.filter((s: any) =>
      [s.situation, s.applied, s.result, s.role, s.org_context, s.edge, s.attribution]
        .filter(Boolean)
        .some((v: any) => String(v).toLowerCase().includes(q))
    );
  }, [submissions, search]);

  const overall = useMemo(() => {
    const checks = health?.checks || {};
    const vals = Object.values(checks).map((c: any) => c?.status || "unknown");
    if (vals.includes("down")) return "down";
    if (vals.includes("warn")) return "warn";
    if (vals.every((v: any) => v === "ok")) return "ok";
    return "unknown";
  }, [health]);

  const overallPill = statusPill(overall);
  const OverallIcon = overallPill.icon;

  const onUpdateStatus = async (payload: any) => {
    setSubmissions((prev) => prev.map((s: any) => (s.id === payload.id ? { ...s, ...payload } : s)));

    await apiPost("/.netlify/functions/llops-update-status", payload, { fallback: { ok: true } });

    const data = await apiGet(`/.netlify/functions/llops-submissions?status=${encodeURIComponent(filter)}`, {
      fallback: { ok: true, submissions: MOCK.submissions.filter((s: any) => s.publish_status === filter) },
    });
    if (data?.submissions) setSubmissions(data.submissions);
  };

  // Auth is now handled by ProtectedRoute wrapper in page.tsx

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
            {user && (
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="rounded-xl">
                  {user.email || user.id.slice(0, 8)}
                </Badge>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            )}
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
                  Keep metrics minimal. If a number doesn’t change decisions, remove it.
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <UptimeChart data={metrics?.sparkline || MOCK.metrics.sparkline} />
                  <DeploymentPipeline deployments={metrics?.deployments} />
                </div>
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
                        {filtered.map((r: any) => (
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
                <GmailTab initial={MOCK.gmail} />
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
