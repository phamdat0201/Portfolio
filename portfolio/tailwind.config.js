/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '0px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px'},
      },
      fontFamily:{
        Poppins:['Poppins', 'sans-serif']
      },
      height:{
        'header':'60px'
      },
      margin:{
        'header':'60px'
      },
      colors:{
        'main_color':'white',
        'main_bg':'rgb(15 23 42)',
        'hover_color':'rgb(56 189 248)',
        'second_color':'rgb(56 189 248)'
      },
      boxShadow: {
        'header_shadow': '1px 2px 12px #888888',
        'avt_shadow' : '1px 6px 3px 7px #1e2a3f',
        'button_shadow':'0 4px 15px 0 rgba(236 116 149 0.75)'
      },
      keyframes: {
        profile_animate: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
        tag_animate:{
          '0%':{transform:'translateY(-20%)'},
          '100%':{transform:'translateY(0%)'}
        }
      },
      animation: {
        profile_animate:'profile_animate 8s ease-in-out infinite 1s',
        tag_animate:'tag_animate 0.5s ease-in-out'
      },
      backgroundPosition:{
        'button_hover':'100% 0'
      },
      backgroundSize:{
        'button_size':'300% 100%'
      },
      backgroundImage:{
        'button_bg' : 'linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)'
      }
    },
  },
  plugins: [],
}