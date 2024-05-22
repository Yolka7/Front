/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'arimo': ['Arimo', 'sans-serif']
    },
    screens: {
      'ssm': '421px',
      'sm': '640px',
      'md': '768px',
      'mmd': '880px',
      'lg': '1024px',
      '2xl': '1536px',
      'xl': '1280px',
      'xxl': '1820px'
    },
    boxShadow: {
      'accent': 'inset var(--accent) 0 0 0 1rem;'
    }
  },
  extend: {
    opacity: {
      '76': '0.76'
    },
    colors: {
      gray: {
        'bg': '#343541',
        '900': '#202123',
      }
    },


  },
  plugins: [
  ],
}

