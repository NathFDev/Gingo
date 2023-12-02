import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,ts,svelte}"],
	important: true,
	theme: {
		extend: {
			colors: {
				"sp-purple": "#7f17b3",
				"sp-dark-purple": "#2d0d6c",
				"sp-blue": "#0918c4",
				"sp-dark": "#0F0F0F"
			}
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["night"]
	}
} satisfies Config;
