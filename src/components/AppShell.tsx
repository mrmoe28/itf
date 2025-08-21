"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "./BottomNav";

export default function AppShell({ title, children }: { title: string; children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const u = localStorage.getItem("itf_user");
    if (!u) router.replace("/auth/signin");
    else setReady(true);
  }, [router]);
  if (!ready) return null;
  return (
    <div className="pb-20">
      <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
          <div className="text-brand font-bold">ITF</div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl p-4">{children}</main>
      <BottomNav />
    </div>
  );
}
