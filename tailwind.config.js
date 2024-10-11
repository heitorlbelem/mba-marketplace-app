/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        base: ['Poppins', 'sans-serif'],
        title: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'orange-base': '#F24D0D',
        'orange-dark': '#C43C08',
        'blue-light': '#D7EFF9',
        'blue-base': '#5EC5FD',
        'blue-dark': '#009CF0',
        white: '#FFFFFf',
        background: '#FBF4F4',
        shape: '#F5EAEA',
        'gray-100': '#ADADAD',
        'gray-200': '#949494',
        'gray-300': '#666666',
        'gray-400': '#3D3D3D',
        'gray-500': '#1D1D1D',
        danger: '#DC3545',
        success: '#28A745',
      },
    },
  },
  plugins: [],
}
