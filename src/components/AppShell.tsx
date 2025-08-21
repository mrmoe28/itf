"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "./BottomNav";
import { Zap } from "lucide-react";

export default function AppShell({ title, children }: { title: string; children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const u = typeof window !== "undefined" ? localStorage.getItem("itf_user") : null;
    if (!u) {
      router.replace("/auth/signin");
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin">
          <Zap className="h-8 w-8 text-[hsl(var(--brand))]" />
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <header className="sticky top-0 z-40 glass-effect border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">{title}</h1>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-[hsl(var(--brand))]" />
            <span className="font-bold text-[hsl(var(--brand))]">ITF</span>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl p-6 space-y-6">{children}</main>
      <BottomNav />
    </div>
  );
}
