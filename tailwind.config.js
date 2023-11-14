/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Helvetica, Arial, sans-serif",
        logoFont: "Agbalumo",
      },
      fontSize: {
        postCont: `clamp(.8rem,1.2vw,2.3rem)`,
        postTitle: `clamp(.5rem,1vw,1rem)`,
        postUser: `clamp(.7rem,1vw,2rem)`,
      },
    },
  },
  plugins: [],
};
