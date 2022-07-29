/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: colors.stone["900"],
                primary: "#0EA5E9",
                secondary: colors.stone["800"],
                accent: colors.stone["400"],
                content: colors.white,
            },
            transitionDuration: {
                primary: "500ms",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
