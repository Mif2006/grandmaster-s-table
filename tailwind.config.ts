import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        wood: {
          dark: "hsl(var(--wood-dark))",
          light: "hsl(var(--wood-light))",
        },
        brass: {
          DEFAULT: "hsl(var(--brass))",
          dark: "hsl(var(--brass-dark))",
        },
        marble: "hsl(var(--marble))",
        carbon: "hsl(var(--carbon))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "slide-piece": {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -20px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "rotate-3d": {
          "0%": { transform: "perspective(1000px) rotateY(0deg)" },
          "100%": { transform: "perspective(1000px) rotateY(360deg)" },
        },
        "pulse-brass": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px hsl(var(--brass) / 0.3)" },
          "50%": { opacity: "0.9", boxShadow: "0 0 40px hsl(var(--brass) / 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "slide-piece": "slide-piece 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "rotate-3d": "rotate-3d 20s linear infinite",
        "pulse-brass": "pulse-brass 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-wood": "var(--gradient-wood)",
        "gradient-brass": "var(--gradient-brass)",
        "gradient-hero": "var(--gradient-hero)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
