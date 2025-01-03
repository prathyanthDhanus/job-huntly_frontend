/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-blue" : "#1E3A8A",
        "custom-lightBlue" : "#26A4FF",
        "custom-darkBlue" : "#4640DE",
        "custom-white" : "#ffffff",
        "custom-lightGray" : "#9CA3AF",
        "custom-green": "#10B981", 
        "custom-red": "#EF4444",  
        "custom-yellow": "#F59E0B",
     },
     
    },
  },
  plugins: [],
}