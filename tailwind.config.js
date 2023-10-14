/** @type {import('tailwindcss').Config} */

import { colors as defaultColors } from "tailwindcss/defaultTheme";

const colors = {
  ...defaultColors,
  ...{
    "tomato": "hsl(4, 100%, 67%)",
    "dark-slate-grey": "hsl(234, 29%, 20%)",
    "charcoal-grey": "hsl(235, 18%, 26%)",
    "light-blue": "hsl(206, 94%, 87%)",
    "grey": "hsl(231, 7%, 60%)",
    white: "hsl(0, 0%, 100%)",
  },
};

export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: colors
    },
  },
  plugins: [],
}