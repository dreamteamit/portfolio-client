/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#a51890",
          secondary: "#013ca6",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
=======
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  
  plugins: [
    require('flowbite/plugin')
]
}

>>>>>>> 8f20f057d483e6cd84db3cce514b172c6a1405f9
