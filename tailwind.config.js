module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      boxShadow: {
        "xl": "3px -1px 34px -3px",
      },
      backgroundColor: {
        "main-blue": "#1A1A5A",
        "secondary-blue": "#2A2A64"
      },
      screens: {
        "md": { "max": "890px" }
      }
    }
  }
}

