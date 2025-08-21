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
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-yellow-50/30 pb-24">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-amber-100/10 via-transparent to-orange-100/10 pointer-events-none" />
      
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-orange-200/50">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-gray-800">{title}</h1>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-md">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div className="text-right">
              <span className="font-bold text-lg bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">ITF</span>
              <p className="text-xs text-gray-500 font-medium">Solar CRM</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="relative mx-auto max-w-5xl p-6 space-y-6">{children}</main>
      <BottomNav />
    </div>
  );
}
