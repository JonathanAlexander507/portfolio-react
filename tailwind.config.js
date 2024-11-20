/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Para el archivo HTML principal
    "./src/**/*.{js,jsx,ts,tsx}", // Para todos los archivos en 'src'
    "./src/components/**/*.{js,jsx}", // Para archivos dentro de la carpeta 'components'
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
