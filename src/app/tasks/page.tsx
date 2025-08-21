"use client";
import AppShell from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const lanes = ["Backlog","In Progress","Blocked","Done"] as const;

export default function Tasks() {
  return (
    <AppShell title="Tasks">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {lanes.map(lane=>(
          <Card key={lane} className="card-float">
            <CardHeader><CardTitle className="text-sm">{lane}</CardTitle></CardHeader>
            <CardContent className="text-gray-500">No tasks yet. {/* TODO: fetch from Neon */}</CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
