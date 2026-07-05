import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#05050a",
          deep: "#020204",
          soft: "#0a0a14",
        },
        ivory: {
          DEFAULT: "#f5efe6",
          dim: "#cfc6b8",
        },
        gold: {
          DEFAULT: "#d4af7a",
          bright: "#f1d9a8",
          dim: "#8a6f45",
        },
        wine: {
          DEFAULT: "#5c1a24",
          bright: "#8f2436",
          deep: "#33101a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "serif"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(212,175,122,0.12) 0%, rgba(5,5,10,0) 70%)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(212,175,122,0.35)",
        "gold-lg": "0 0 90px rgba(212,175,122,0.25)",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 25px rgba(212,175,122,0.35)" },
          "50%": { boxShadow: "0 0 60px rgba(212,175,122,0.65)" },
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
