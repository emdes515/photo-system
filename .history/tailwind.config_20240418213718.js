/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				XLdirs: 'repeat(6, minmax(1fr, 192px))',
			},
		},
	},
	plugins: [require('daisyui')],
}
