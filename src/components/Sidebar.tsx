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
    <aside className="w-64 h-screen sidebar-glass flex flex-col relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      {/* Header */}
      <div className="p-6 border-b border-white/10 relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/80 to-primary shadow-lg backdrop-blur-sm border border-white/20">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">ITF</h1>
            <p className="text-xs text-white/60 font-medium tracking-wide">Project Management</p>
          </div>
        </div>
        
        <Button className="w-full glass-button text-white font-medium tracking-wide">
          <Plus className="h-4 w-4 mr-2" />
          New Projects
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href="/"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group relative overflow-hidden",
                "hover:bg-white/10 hover:backdrop-blur-sm hover:scale-105 hover:shadow-lg",
                pathname === "/" 
                  ? "bg-gradient-to-r from-primary/20 to-primary/10 text-white border border-primary/30 shadow-lg" 
                  : "text-white/70 hover:text-white"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <item.icon className="h-4 w-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="flex-1 relative z-10">{item.name}</span>
              {item.count > 0 && (
                <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full font-medium backdrop-blur-sm border border-white/20 relative z-10">
                  {item.count}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 mb-4 px-1">
            <h3 className="text-sm font-semibold text-white/90 tracking-wide">Recent</h3>
            <ChevronDown className="h-4 w-4 text-white/50 transition-transform duration-300 hover:rotate-180" />
          </div>
          
          <div className="space-y-1">
            {projectItems.map((project) => (
              <Link
                key={project.name}
                href="/"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300 group"
              >
                <div className={cn("w-3 h-3 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300", project.color)} />
                <span className="text-white/60 text-sm truncate group-hover:text-white/80 transition-colors duration-300">
                  {project.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-white/10 relative">
        <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-sm font-bold text-white">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">User</p>
            <p className="text-xs text-white/50 font-medium tracking-wide">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}