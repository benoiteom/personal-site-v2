import { Suspense } from "react";
import { createClient } from "@supabase/supabase-js";
import { PulseDashboard, PulseAuthGate } from "@pulsekit/react";
import { getPulseTimezone } from "@pulsekit/next";
import { Spinner } from "@/components/ui/spinner";
import "@pulsekit/react/pulse.css";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

async function Dashboard({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const timezone = await getPulseTimezone();

  const params = await searchParams;

    // Date range for Traffic tab
    const timeframe = (params.from && params.to)
      ? { from: params.from, to: params.to }
      : "7d";

  return (
    <PulseDashboard
      supabase={supabase}
      siteId="default"
      timeframe={timeframe}
      tab={params.tab || "traffic"}
      range={(params.range as "7d" | "30d") || "7d"}
      timezone="UTC"
      refreshEndpoint="/api/pulse/refresh-aggregates"
      eventType={params.eventType}
      eventPath={params.eventPath}
      eventSession={params.eventSession}
      eventPage={parseInt(params.eventPage || "0", 10)}
    />
  );
}

export default function AnalyticsPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  return (
    <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "1.5rem" }}><Spinner style={{ width: 24, height: 24 }} /></div>}>
      <PulseAuthGate secret={process.env.PULSE_SECRET!}>
        <Dashboard searchParams={searchParams} />
      </PulseAuthGate>
    </Suspense>
  );
}