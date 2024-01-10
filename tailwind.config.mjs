/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
    'h-screen',
    'h-[75vh]',
    'h-[50vh]',
		'h-[25vh]',
  ],
	theme: {
		extend: {
			screens: {
				'xs': '400px'
			}
		},
	},
	plugins: [],
}
