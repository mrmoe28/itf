import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 
          DEFAULT: "#F58025", 
          foreground: "#111827" 
        },
        surface: "#FFFFFF",
        ink: "#111827",
        charcoal: "#1F2937",
        slateish: "#374151"
      },
      borderRadius: { 
        xl: "1rem", 
        "2xl": "1.25rem" 
      },
      boxShadow: { 
        float: "0 10px 30px rgba(0,0,0,0.10)" 
      },
      fontFamily: { 
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] 
      }
    }
  },
  plugins: [],
} satisfies Config;