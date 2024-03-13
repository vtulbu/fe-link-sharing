const colors = require("./src/constants");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	plugins: [require('flowbite/plugin')],
	theme: {
		fontFamily: {
			sans: ["Instrument Sans", ...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
		},
		colors,
	},
};

module.exports = config;
