#!/bin/bash
set -euo pipefail || true

# ────────────────────────────────────────────────────────────────────────────────
# 1) Deps + shadcn/ui
echo "📦 Setting up pnpm and installing dependencies..."
corepack enable || true
corepack prepare pnpm@10.4.0 --activate || true
pnpm add lucide-react class-variance-authority clsx tailwind-merge
pnpm dlx shadcn@latest init -d --yes
pnpm dlx shadcn@latest add button card input avatar badge sheet tabs dropdown-menu dialog textarea separator --yes

# ────────────────────────────────────────────────────────────────────────────────
# 2) Create src directory structure
echo "📁 Creating src directory structure..."
mkdir -p src/app src/components src/lib

# ────────────────────────────────────────────────────────────────────────────────
# 3) Tailwind theme & globals
echo "🎨 Configuring Tailwind theme..."
cat > tailwind.config.ts <<'TS'
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#F58025", foreground: "#111827" },
        surface: "#FFFFFF",
        ink: "#111827",
        charcoal: "#1F2937",
        slateish: "#374151"
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: { float: "0 10px 30px rgba(0,0,0,0.10)" },
      fontFamily: { sans: ["Inter", ...fontFamily.sans] }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
TS

cat > src/app/globals.css <<'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --radius: 1rem; }
html, body { height: 100%; background:#f8fafc; color:#111827; }
.card-float { @apply rounded-2xl shadow-float bg-surface; }
.tap { @apply min-h-11 min-w-11; } /* 44px tap targets */
CSS

# ────────────────────────────────────────────────────────────────────────────────
# 4) Base layout, utils
echo "🏗️ Creating layout and utilities..."
cat > src/app/layout.tsx <<'TSX'
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
TSX

cat > src/lib/utils.ts <<'TS'
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
TS

echo "✅ Script created successfully"
