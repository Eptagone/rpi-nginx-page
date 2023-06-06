/**
 * Name: tailwind.config.cjs
 * Description: Tailwind CSS configuration file.
 */

const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					'50': '#f8e7ec',
					'100': '#f2cfd9',
					'200': '#e4a0b3',
					'300': '#d7708e',
					'400': '#c94168',
					'500': '#bc1142',
					'600': '#960e35',
					'700': '#710a28',
					'800': '#4b071a',
					'900': '#26030d',
				}
			},
			fontFamily: {
				'cascadia-code': ['Cascadia Code', 'Courier New', 'Courier', 'monospace'],
				'cascadia-code-pl': ['Cascadia Code PL', 'Courier New', 'Courier', 'monospace'],
				'cascadia-mono': ['Cascadia Mono', 'Courier New', 'Courier', 'monospace'],
				'cascadia-mono-pl': ['Cascadia Mono PL', 'Courier New', 'Courier', 'monospace'],
			},
		}
	},
	plugins: [
		require('tailwindcss-animated'),
	],
};
