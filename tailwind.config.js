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
                    "50%": { top: "60vh" },
                },
                floaticon: {
                    "0%, 100%": {
                        'top': "20vh",
                        // transform: 'rotate(-180deg)'
                    },
                    "50%": {
                        'top': "23vh",
                        // transform: 'rotate(20deg)'
                    },
                },
                floaticontwo: {
                    "0%, 100%": {
                        'top': "60vh",
                        // transform: 'rotate(-180deg)'
                    },
                    "50%": {
                        'top': "61vh",
                        // transform: 'rotate(20deg)'
                    },
                },
                side: {
                    "0%, 100%": {
                        'left': "60vh",
                        // transform: 'rotate(-180deg)'
                    },
                    "50%": {
                        'left': "63vh",
                        // transform: 'rotate(20deg)'
                    },
                },
                sides: {
                    "0%, 100%": {
                        'left': "20vw",
                        // transform: 'rotate(-180deg)'
                    },
                    "50%": {
                        'left': "80vw",
                        // transform: 'rotate(20deg)'
                    },
                },
                
            },
            animation: {
                updown: "wiggle 10s linear infinite",
                topdown: "floaticon 5s ease-in infinite",
                topdowntwo: "floaticontwo 2s linear infinite",
                sideways: "side 4s linear infinite",
                sideway: "sides 20s linear infinite",
               
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
