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
    <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[#0c0c0c] to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Sign In Card */}
      <Card className="relative w-full max-w-md dark-card z-10">
        <CardHeader className="text-center space-y-8 pb-8">
          {/* Brand Logo */}
          <div className="flex items-center justify-center gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/80 to-primary shadow-2xl backdrop-blur-sm border border-white/20">
              <Building2 className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                ITF
              </h1>
              <p className="text-xs text-white/60 font-medium tracking-wide">Project Management</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <CardTitle className="text-xl text-white font-semibold tracking-wide">
              Sign in to your workspace
            </CardTitle>
            <p className="text-sm text-white/60 leading-relaxed">
              Enter your name to access your projects and collaborate with your team
            </p>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-white/80 tracking-wide">
                Full Name
              </label>
              <Input
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                className="tap bg-white/5 border-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 text-white placeholder:text-white/40 backdrop-blur-sm rounded-xl py-3 px-4 font-medium"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full tap glass-button text-white font-semibold py-3 rounded-xl tracking-wide hover:scale-105 transition-all duration-300"
              disabled={!name.trim()}
            >
              Continue to Dashboard
            </Button>
          </form>
          
          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <p className="text-center text-xs text-white/50 font-medium tracking-wide">
              Professional project management platform
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
