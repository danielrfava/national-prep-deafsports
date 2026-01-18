
import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#121212",
        surface: "#1A1A1A",
        border: "#2A2D30",
        text: {
          primary: "#FFFFFF",
          secondary: "#E0E0E0",
        },
        accent: {
          DEFAULT: "#D32F2F",
          light: "#FF5252",
        },
        success: "#2E7D32",
        warning: "#ED6C02",
        info: "#0288D1",
      },
      borderRadius: {
        lg: "10px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.35)",
        nav: "0 2px 24px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config
