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

async function Dashboard() {
  const timezone = await getPulseTimezone();

  return (
    <PulseDashboard
      supabase={supabase}
      siteId="default"
      timeframe="7d"
      timezone={timezone}
    />
  );
}

export default function AnalyticsPage() {
  return (
    <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "1.5rem" }}><Spinner style={{ width: 24, height: 24 }} /></div>}>
      <PulseAuthGate secret={process.env.PULSE_SECRET!}>
        <Dashboard />
      </PulseAuthGate>
    </Suspense>
  );
}