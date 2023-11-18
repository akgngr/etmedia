/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "940px",
            xl: "1336px",
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Urbanist", "serif"],
        },
        extend: {},
    },

    plugins: [require("@tailwindcss/typography")],
};
