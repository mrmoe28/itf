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
