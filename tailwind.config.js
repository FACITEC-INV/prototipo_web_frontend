/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Busca clases de Tailwind en la carpeta 'app'
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // (Si usas Pages Router)
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Si tienes una carpeta 'components' en la raíz
    './commonComponents/**/*.{js,ts,jsx,tsx,mdx}', // Basado en tu estructura de carpetas
  ],
  theme: {
    extend: {}, // Aquí puedes extender los temas predeterminados de Tailwind
  },
  plugins: [
    require('daisyui'), // Si estás usando DaisyUI
  ],
};
