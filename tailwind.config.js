/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
