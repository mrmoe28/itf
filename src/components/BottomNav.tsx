"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Briefcase, Users, CheckSquare, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/jobs", icon: Briefcase, label: "Jobs" },
  { href: "/contacts", icon: Users, label: "Contacts" },
  { href: "/tasks", icon: CheckSquare, label: "Tasks" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  
  function signOut() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("itf_user");
    }
    router.replace("/auth/signin");
  }

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 glass-effect border-t border-border">
      <div className="mx-auto max-w-5xl px-safe">
        <ul className="grid grid-cols-5 gap-1">
          {items.map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex flex-col items-center justify-center py-3 px-2 tap rounded-lg transition-all duration-200",
                    "hover:bg-accent hover:text-accent-foreground",
                    active 
                      ? "text-[hsl(var(--brand))] bg-[hsl(var(--brand))]/10" 
                      : "text-muted-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs mt-1 font-medium">{label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button 
              onClick={signOut} 
              className="w-full flex flex-col items-center justify-center py-3 px-2 tap rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span className="text-xs mt-1 font-medium">Sign out</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
