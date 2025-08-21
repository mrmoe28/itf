#!/bin/bash

# ────────────────────────────────────────────────────────────────────────────────
# 6) Auth page
echo "🔐 Creating auth page..."
mkdir -p src/app/auth/signin
cat > src/app/auth/signin/page.tsx <<'TSX'
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const existing = localStorage.getItem("itf_user");
      if (existing) router.replace("/");
    }
  }, [router]);

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    localStorage.setItem("itf_user", JSON.stringify({ name }));
    router.replace("/");
  }

  return (
    <main className="grid place-items-center min-h-dvh p-6">
      <Card className="w-full max-w-md card-float">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in to ITF</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Your Name</label>
              <Input
                placeholder="e.g. Moe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full bg-brand hover:opacity-90">Continue</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
TSX

# ────────────────────────────────────────────────────────────────────────────────
# 7) Pages: Dashboard / Jobs / Contacts / Tasks (NO mock data)
echo "📄 Creating main pages..."
cat > src/app/page.tsx <<'TSX'
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
TSX

mkdir -p src/app/jobs
cat > src/app/jobs/page.tsx <<'TSX'
"use client";
import AppShell from "@/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";

export default function Jobs() {
  return (
    <AppShell title="Jobs">
      <div className="grid gap-4">
        <Card className="card-float">
          <CardContent className="p-4 text-gray-500">No jobs yet. {/* TODO: load from Neon */}</CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
TSX

mkdir -p src/app/contacts
cat > src/app/contacts/page.tsx <<'TSX'
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
TSX

mkdir -p src/app/tasks
cat > src/app/tasks/page.tsx <<'TSX'
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
TSX

echo "✅ Pages created successfully"
