import type { Config } from 'tailwindcss'

const config : Config = {
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
        'gradient-rainbow': 'linear-gradient(90deg, #FF6464 0%, #FFBF59 50%, #47C9FF 100%)',
      },
      fontFamily: {
        'poppins': '\'Poppins\', sans-serif',
      },
      colors: {
        'primary-white': '#f5f5f7',
        'primary-black': '#1d1d1f',
      },
      boxShadow: {
        'jelly': '0px 10px 10px rgba(210, 187, 253, 0.50) inset,\n' +
          '  0px 5px 10px rgba(5, 5, 5, 0.212),\n' +
          '  0px -10px 10px rgb(124, 54, 255, 0.50) inset',
      },
      blur: {
        'xs': '2px',
      },
      screens: {
        'semi-lg': '840px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out 0.5s infinite',
      },
    },
  },
  plugins: [],
}
export default config
