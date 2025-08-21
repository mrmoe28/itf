"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

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
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      
      {/* Sign In Card */}
      <Card className="relative w-full max-w-md dark-card">
        <CardHeader className="text-center space-y-6 pb-8">
          {/* Brand Logo */}
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-primary shadow-lg">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                ITF
              </h1>
              <p className="text-xs text-muted-foreground">Project Management</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <CardTitle className="text-xl text-foreground">Sign in to your workspace</CardTitle>
            <p className="text-sm text-muted-foreground">
              Enter your name to access your projects
            </p>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Full Name
              </label>
              <Input
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                className="tap bg-input border-border focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full tap bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
              disabled={!name.trim()}
            >
              Continue
            </Button>
          </form>
          
          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-center text-xs text-muted-foreground">
              Professional project management platform
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
