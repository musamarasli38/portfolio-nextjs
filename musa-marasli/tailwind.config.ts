import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        
        "shooting-star": {
          "100%": { transform: "translate(0, 0) rotate(45deg)", opacity: "0" },
          "70%": { opacity: "1"  },
          "0%": {
            transform: "translate(450px, -300px) rotate(45deg)",
            opacity: "0",
          },
        },
      },animation: {
        "shooting-star": "shooting-star 50s linear forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
