/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': [
          '-apple-system', 
          'BlinkMacSystemFont', 
          'SF Pro Display', 
          'SF Pro Text', 
          'system-ui', 
          'sans-serif'
        ],
        'display': [
          '-apple-system', 
          'BlinkMacSystemFont', 
          'SF Pro Display', 
          'SF Pro Text', 
          'system-ui', 
          'sans-serif'
        ],
        'sans': [
          '-apple-system', 
          'BlinkMacSystemFont', 
          'SF Pro Display', 
          'SF Pro Text', 
          'system-ui', 
          'sans-serif'
        ]
      },
    },
  },
  plugins: [],
}
