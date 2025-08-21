"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

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
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-orange-100/20" />
      
      {/* Sign In Card */}
      <Card className="relative w-full max-w-md card-float backdrop-blur-sm bg-white/95 border border-orange-200/50">
        <CardHeader className="text-center space-y-4">
          {/* Brand Logo */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                ITF
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Solar CRM</p>
            </div>
          </div>
          <CardTitle className="text-2xl text-gray-800">Welcome Back</CardTitle>
          <p className="text-sm text-muted-foreground">Sign in to access your solar projects</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <Input
                placeholder="Enter your name (e.g. Moe)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                className="tap transition-all duration-200 border-orange-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full tap bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-orange-500/25 transition-all duration-200 transform hover:scale-[1.02]"
              disabled={!name.trim()}
            >
              Continue to Dashboard
            </Button>
          </form>
          
          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-orange-200/50">
            <p className="text-center text-xs text-muted-foreground">
              Field-ready solar project management
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
