/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    fontSize: {
      xs: 'calc( 11px + (13 - 11) * ((100vw - 768px) / (1920 - 768)));',
      sm: 'calc( 12px + (14 - 12) * ((100vw - 768px) / (1920 - 768)));',
      md: 'calc( 13px + (15 - 13) * ((100vw - 768px) / (1920 - 768)));',
      lg: 'calc( 16px + (17 - 16) * ((100vw - 768px) / (1920 - 768)));',
      xl: 'calc( 20px + (22 - 20) * ((100vw - 768px) / (1920 - 768)));',
      xxl: 'calc( 45px + (50 - 45) * ((100vw - 768px) / (1920 - 768)));',
    },
    lineHeight: {
      '18': '1.3',
      '20': '1.3',
      '22': '1.3',
    },
    borderRadius: {
      'sm': '2px',
      'md': '6px',
      'lg': '8px',
      'full': '9999px',
      'large': '10px'
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', "sans-serif"],
      },
      colors: {
        'primary-color': '#8D95AF',
        'white': '#FFFFFF',
        'secondary-color': '#454b5f',
        'sub-heading': '#6C7287',
        'black-color': '#21232C',
        'theme-red-color': '#B3293D',
        'theme-red-dark': '#893951',
        'border-primary': '#BDC4D3',
        'border-color': '#D8DEEC',
        'chat-from': '#BB253B',
        'chat-to': '#772430',
        'btn-secondary': '#EDF0F6',
        'card-bg': '#EAEFFC'
      },
      height: {
        '72': '72px',
        '115': '115px',
      },
      width: {
        '38': '38px',
        '72': '72px',
        '76': '76px',
      },
      maxWidth: {
        '1012': '1012px',
        '660': '660px',
      },
      padding: {
        '9px': '9px',
        '26px': '26px',
        '46px': '46px',
        '50px': '50px',
        '90px': '90px',
      },
    },
  },
  plugins: [
    require('./node_modules/flowbite/plugin')
  ],
}