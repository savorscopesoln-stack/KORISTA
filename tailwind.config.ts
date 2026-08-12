import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Korista design tokens ----
        // Deep press-ink navy — primary, used for authority sections
        ink: {
          DEFAULT: "#16233F",
          600: "#233457",
          700: "#101A2E",
          900: "#0A1220",
        },
        // Spot-color crimson — accent, used like a stamp or Pantone swatch
        press: {
          DEFAULT: "#C81E3A",
          600: "#A81730",
          100: "#F7DEE1",
        },
        // "Approved" stamp green — reserved for WhatsApp / go-ahead actions
        approve: {
          DEFAULT: "#1F8A50",
          600: "#186E40",
        },
        // Cool uncoated-paper neutrals
        paper: {
          DEFAULT: "#F7F5EF",
          alt: "#EEEAE0",
        },
        surface: "#FFFFFF",
        text: {
          ink: "#161A24",
          muted: "#5B5F6B",
          onDark: "#F7F5EF",
          onDarkMuted: "#AEB4C4",
        },
        border: {
          DEFAULT: "#DEDACB",
          onDark: "#2B3856",
        },
        warn: "#B7791F",
        error: "#B3261E",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "10px",
        lg: "20px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 2px 10px rgba(10, 18, 32, 0.06)",
        lift: "0 16px 40px rgba(10, 18, 32, 0.16)",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
