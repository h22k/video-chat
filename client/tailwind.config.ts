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
        'gradient-rainbow': 'linear-gradient(90deg, #FF6464 0%, #FFBF59 50%, #47C9FF 100%)'
      },
      fontFamily: {
        'poppins': "'Poppins', sans-serif"
      },
      colors: {
        'primary-white': '#f5f5f7',
        'primary-black': '#1d1d1f'
      },
    },
  },
  plugins: [],
}
export default config
