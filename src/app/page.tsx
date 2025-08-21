"use client";
import AppShell from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <AppShell title="Dashboard">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="card-float"><CardHeader><CardTitle>Active Jobs</CardTitle></CardHeader><CardContent className="text-3xl font-bold text-brand">--</CardContent></Card>
        <Card className="card-float"><CardHeader><CardTitle>In-Progress Tasks</CardTitle></CardHeader><CardContent className="text-3xl font-bold text-brand">--</CardContent></Card>
        <Card className="card-float"><CardHeader><CardTitle>Blocked</CardTitle></CardHeader><CardContent className="text-3xl font-bold text-brand">--</CardContent></Card>
      </section>
      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="card-float"><CardHeader><CardTitle>Recent Jobs</CardTitle></CardHeader><CardContent className="text-gray-500">No jobs yet. {/* TODO: fetch from Neon */}</CardContent></Card>
        <Card className="card-float"><CardHeader><CardTitle>My Tasks</CardTitle></CardHeader><CardContent className="text-gray-500">No tasks yet. {/* TODO: fetch from Neon */}</CardContent></Card>
      </section>
    </AppShell>
  );
}
