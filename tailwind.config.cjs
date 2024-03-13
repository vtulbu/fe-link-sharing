const colors = require("./src/constants");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ["Instrument Sans", ...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
		},
		extend: {
			colors: {
				...colors
			}
		}
	},

	plugins: []
};

module.exports = config;
