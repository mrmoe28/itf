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
    <nav className="fixed bottom-0 inset-x-0 z-50 backdrop-blur-md bg-white/95 border-t border-orange-200/50 shadow-2xl">
      <div className="mx-auto max-w-5xl px-4">
        <ul className="grid grid-cols-5 gap-1 py-2">
          {items.map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex flex-col items-center justify-center py-3 px-2 tap rounded-xl transition-all duration-200",
                    "hover:bg-amber-50 hover:scale-105",
                    active 
                      ? "text-white bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-orange-500/25" 
                      : "text-gray-500 hover:text-amber-600"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className={cn("h-5 w-5 transition-all", active ? "scale-110" : "")} />
                  <span className={cn("text-xs mt-1 font-medium", active ? "font-semibold" : "")}>{label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button 
              onClick={signOut} 
              className="w-full flex flex-col items-center justify-center py-3 px-2 tap rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all duration-200 hover:scale-105"
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
