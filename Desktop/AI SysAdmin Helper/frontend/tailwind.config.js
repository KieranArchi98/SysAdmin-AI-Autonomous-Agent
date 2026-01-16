/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./public/index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#3b82f6',
                'app-blue': '#3b82f6',
                'app-bg-grey': '#f8f9fa',
                'app-surface': '#ffffff',
                'app-border': '#000000',
                'zinc': {
                    '50': '#fafafa',
                    '100': '#f4f4f5',
                    '200': '#e4e4e7',
                    '400': '#a1a1aa',
                    '800': '#27272a',
                    '900': '#18181b',
                }
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
                'app-card': '2rem',
                'app-container': '3rem',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'card': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'app': '0 30px 60px -12px rgba(0, 0, 0, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
