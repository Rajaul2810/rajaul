/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          main:'var(--color-text-main)',
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/public/Hexagon.svg')",
      },
      backgroundColor:{
        skin:{
          fill:'var(--color-text-fill)'
        }
      }
    }
  },
  plugins: [require("daisyui")],
  dasyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    utils: false,
  },
}
