"use client";
import AppShell from "@/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";

export default function Contacts() {
  return (
    <AppShell title="Contacts">
      <div className="grid gap-4">
        <Card className="card-float">
          <CardContent className="p-4 text-gray-500">No contacts yet. {/* TODO: load from Neon */}</CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
