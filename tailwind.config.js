/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
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
      backgroundImage: {
        "member-bg": "url('/landing/bg.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { top: "30vh" },
          "50%": { top: "60vh" },
        },
        floaticon: {
          "0%, 100%": {
            top: "20vh",
            // transform: 'rotate(-180deg)'
          },
          "50%": {
            top: "23vh",
            // transform: 'rotate(20deg)'
          },
        },
        floaticontwo: {
          "0%, 100%": {
            top: "60vh",
            // transform: 'rotate(-180deg)'
          },
          "50%": {
            top: "61vh",
            // transform: 'rotate(20deg)'
          },
        },
        side: {
          "0%, 100%": {
            left: "60vh",
            // transform: 'rotate(-180deg)'
          },
          "50%": {
            left: "63vh",
            // transform: 'rotate(20deg)'
          },
        },
        sides: {
          "0%, 100%": {
            left: "20vw",
            // transform: 'rotate(-180deg)'
          },
          "50%": {
            left: "80vw",
            // transform: 'rotate(20deg)'
          },
        },
        "pulse": {
          "0%, 100%": {
            opacity: "1",
            // transform: 'rotate(-180deg)'
          },
          "50%": {
            opacity: "0",
            // transform: 'rotate(20deg)'
          },
        },
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
        updown: "wiggle 10s linear infinite",
        topdown: "floaticon 5s ease-in infinite",
        topdowntwo: "floaticontwo 2s linear infinite",
        sideways: "side 4s linear infinite",
        sideway: "sides 20s linear infinite",
        "pulse": "pulse 10s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          /* For Firefox */
          "scrollbar-width": "none",
          /* For Chrome, Safari, and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
