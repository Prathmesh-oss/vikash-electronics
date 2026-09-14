import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        bg: {
          primary: "#111827",
          secondary: "#1F2937",
          tertiary: "#161F30",
          card: "#192231",
          elevated: "#243042",
        },
        brand: {
          purple: "#312E5B",
          "purple-light": "#45417D",
          "purple-dark": "#232042",
          blue: "#0EA5E9",
          "blue-glow": "#38BDF8",
          red: "#EF233C",
          "red-glow": "#F87171",
          orange: "#F97316",
          "orange-glow": "#FB923C",
          yellow: "#FACC15",
          "yellow-glow": "#FDE047",
          white: "#FFFFFF",
          gray: "#E5E7EB",
          "gray-muted": "#9CA3AF",
          "gray-dark": "#4B5563",
          border: "#374151",
          "border-subtle": "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        script: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        "glow-blue": "0 0 20px -3px rgba(14, 165, 233, 0.35)",
        "glow-blue-lg": "0 0 35px -5px rgba(14, 165, 233, 0.5)",
        "glow-orange": "0 0 20px -3px rgba(249, 115, 22, 0.35)",
        "glow-orange-lg": "0 0 35px -5px rgba(249, 115, 22, 0.5)",
        "glow-red": "0 0 20px -3px rgba(239, 35, 60, 0.35)",
        "glow-yellow": "0 0 20px -3px rgba(250, 204, 21, 0.35)",
        "glow-purple": "0 0 25px -3px rgba(49, 46, 91, 0.6)",
        tech: "0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)",
        "tech-hover": "0 10px 30px -5px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(14, 165, 233, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-tech": "linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.95) 100%)",
        "gradient-card": "linear-gradient(180deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.8) 100%)",
        "gradient-purple": "linear-gradient(135deg, #312E5B 0%, #1F2937 100%)",
        "gradient-accent": "linear-gradient(90deg, #0EA5E9 0%, #F97316 100%)",
        "circuit-pattern": "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glowPulse: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
