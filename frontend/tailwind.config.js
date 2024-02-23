/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "#CD0404",
      yellow: "#F9D949",
      white: "white",
      darkBlue: "#3C486B",
    },
  },
  plugins: [],
});
