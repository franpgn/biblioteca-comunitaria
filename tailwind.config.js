module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        'purple-h':' #655587'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
