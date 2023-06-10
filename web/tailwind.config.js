/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        Smartavigreen: {
          50: '#1ED970',
          100: '#17BF60',
          200: '#137357',
        },
        Smartaviblue: {
          50: '#4E5873',
          100: '#010B40',
        },
        Smartavigray: {
          50: '#DBDBDB',
          100: '#010B40',
        },
        Smartaviblack: {
          100: '#202021',
          50: '#4E5873',
        },
      },
      margin: {
        '20px': '20px',
      },
    },
  },
  plugins: [],
}
