/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey01: "#9DA1AA",
        grey02: "#6B7280",
        grey03: "#4B5563",
        blue01: "#3B82F6",
        blue02: "#1F2937",
        green01: "#10B981",
        red01: "#EF4444",
      },
    },
  },
  plugins: [],
};
