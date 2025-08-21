"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function Jobs() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-hidden">
        <header className="border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-foreground">Jobs</h1>
              <p className="text-sm text-muted-foreground">Manage your installation projects</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Job
            </Button>
          </div>
        </header>

        <div className="p-6">
          <Card className="dark-card">
            <CardHeader>
              <CardTitle>Installation Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No jobs yet.</p>
                <Button>Create your first installation project</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
