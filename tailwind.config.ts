// tailwind.config.ts
export default {
	theme: {
		extend: {
			keyframes: {
				breathe: {
					'0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
					'50%': { opacity: 0.8, transform: 'scale(1.05)' },
				},
			},
			animation: {
				breathe: 'breathe 2s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
