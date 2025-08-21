"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  Briefcase, 
  CheckSquare, 
  Archive,
  Settings,
  Plus,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const projectItems = [
  { name: "Monicca - Saas Product", status: "active", color: "bg-green-500" },
  { name: "BGA - CRM Web App", status: "active", color: "bg-orange-500" },
  { name: "Monicca - Landing Page", status: "active", color: "bg-blue-500" },
  { name: "People Hours - Company Profile", status: "active", color: "bg-purple-500" },
  { name: "Bentall - Social Media Plan", status: "active", color: "bg-yellow-500" },
];

const navigationItems = [
  { name: "All Project", icon: Briefcase, count: 5 },
  { name: "Categories", icon: CheckSquare, count: 2 },
  { name: "Archive Projects", icon: Archive, count: 0 },
  { name: "Delete Projects", icon: Settings, count: 0 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary">
            <Building2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">ITF</h1>
            <p className="text-xs text-muted-foreground">Project Management</p>
          </div>
        </div>
        
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          New Projects
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href="/"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === "/" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1">{item.name}</span>
              {item.count > 0 && (
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                  {item.count}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-sm font-medium text-foreground">Recent</h3>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
          
          <div className="space-y-1">
            {projectItems.map((project) => (
              <Link
                key={project.name}
                href="/"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <div className={cn("w-2 h-2 rounded-full", project.color)} />
                <span className="text-muted-foreground text-sm truncate">
                  {project.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">User</p>
            <p className="text-xs text-muted-foreground">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}