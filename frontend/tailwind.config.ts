import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Paleta de cores obrigatória
        prussian: {
          DEFAULT: "#13293D",
          light: "#1a3a52",
          dark: "#0d1f2a",
        },
        sapphire: {
          DEFAULT: "#006494",
          light: "#0077b3",
          dark: "#005175",
        },
        celadon: {
          DEFAULT: "#247BA0",
          light: "#2d8fc4",
          dark: "#1c5f7a",
        },
        carolina: {
          DEFAULT: "#1B98E0",
          light: "#2ba5f0",
          dark: "#1578b8",
        },
        azure: {
          DEFAULT: "#E8F1F2",
          light: "#f5f8f9",
          dark: "#d4e3e5",
        },
        darkNavy: {
          DEFAULT: "#1F2121",
          light: "#2a2d2d",
          dark: "#141515",
        },
        cinzaMedio: {
          DEFAULT: "#A7A9A9",
          light: "#b8baba",
          dark: "#969898",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1B98E0", // Carolina Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#006494", // Sapphire Blue
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#A7A9A9", // Cinza Médio
          foreground: "#1F2121", // Dark Navy
        },
        accent: {
          DEFAULT: "#247BA0", // Celadon Blue
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'medium': '0 6px 20px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
