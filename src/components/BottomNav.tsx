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
    localStorage.removeItem("itf_user");
    router.replace("/auth/signin");
  }
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-surface border-t border-gray-200">
      <ul className="mx-auto max-w-3xl grid grid-cols-5">
        {items.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "flex flex-col items-center justify-center py-3 tap",
                  active ? "text-brand" : "text-slateish"
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs mt-1">{label}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <button onClick={signOut} className="w-full flex flex-col items-center justify-center py-3 tap text-slateish">
            <LogOut className="h-6 w-6" />
            <span className="text-xs mt-1">Sign out</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
