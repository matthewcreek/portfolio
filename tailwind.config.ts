import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fade: 'fadeIn 1.5s linear',
        slideIn: 'slideIn .3s linear',
        slideOut: 'slideOut .3s linear',
        both: 'slide 3s linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity:'0%' },
          '100%': { opacity:'100%' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slideOut: {
          '0%': { transform: 'translateY(+100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
