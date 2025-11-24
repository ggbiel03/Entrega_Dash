/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2692f0',
        primaryLight: "#57aeff",
        danger: "#e74c3c",
        success: "#2ecc71",
        secondary: "#f39c12",
        chatClient: "#e0e0e0",
      },
    },
  },
  content: ["./*.html", "./js/*.js"],
};


