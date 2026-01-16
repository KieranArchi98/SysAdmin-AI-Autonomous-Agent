/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a65ff', // Vibrant blue for the app background
                surface: '#ffffff',    // Pure white for the main container
                sidebar: {
                    DEFAULT: '#f9fafb',
                    active: '#3b82f6',
                },
                'edaca-blue': '#3b82f6',
                'edaca-grey': '#f3f4f6',
                'border-dark': '#111827',
            },
            borderRadius: {
                '3xl': '2rem',
                '4xl': '3rem',
            },
            boxShadow: {
                'app': '0 20px 50px -10px rgba(0, 0, 0, 0.2)',
            }
        },
    },
    plugins: [],
}
