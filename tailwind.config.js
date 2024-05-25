/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 100%": { top: "30vh" },
                    "50%": { top: "100vh" },
                },
                floaticon: {
                    "0%, 100%": {
                        'top': "10vh",
                        // transform: 'rotate(-180deg)'
                    },
                    "50%": {
                        'top': "100vh",
                        // transform: 'rotate(20deg)'
                    },
                },
                
            },
            animation: {
                updown: "wiggle 5s linear infinite",
                topdown: "floaticon 8s linear infinite",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-pattern": "url('/landing/person.jpeg')",
            },
        },
    },
    plugins: [],
};
