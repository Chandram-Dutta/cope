/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      SourceCodePro: ["Source Code Pro", "monospace"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"],
  },
};
