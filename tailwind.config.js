/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-gray': 'rgba(165, 165, 165, 1)',
                'light-gray': 'rgba(229, 229, 229, 1)',
                'dark-green': 'rgba(0, 100, 0, 1)',
                'dark-green-100': 'rgba(0, 75, 35, 0.6)',
                'dark-purple': 'rgba(62, 31, 71, 0.65)',
                'light-blue': 'rgba(165, 255, 214, 1)',
                'dark-blue': 'rgba(76, 201, 240, 0.9)',
                'dark-blue-100': 'rgba(44, 125, 160, 0.9)',
                'dark-blue-200': 'rgba(65, 90, 119, 0.7)',
            },
        },
    },
    plugins: [],
}