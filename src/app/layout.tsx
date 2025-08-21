import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ITF — Solar CRM",
  description: "Field-ready solar CRM for jobs, contacts, and tasks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased")}>
        <div className="min-h-dvh">{children}</div>
      </body>
    </html>
  );
}