import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    maxWidth: {
      "7xl": "1400px",
      "w-60": "234px",
    },
    width: {
      "44": "175px",
      "48": "190px",
      "60": "235px",
      "11/12": "94%"
    },
    height: {
      "14": "60px",
      "16": "70px",
      "48": "198px",
      "56": "220px",
      "60": "248px",
      "96": "376px"
    },
    fontSize: {
      "5xl": "50px",
      "7xl": "72px",
      "9xl": "120px"
    },
    screens: {
      md: '600px',
      lg: '925px',
      xl: '1200px'
    }
  },
  plugins: [],
};
export default config;
