module.exports = {
  purge: {
    enabled:false,
    content: [
      './resources/views/**/*.html',
      './resources/js/**/*.vue',
      './resources/js/**/*.js',
    ],
    options: {
      whitelist: [],
    }
  },
    
  theme: {
    colors:{
      transparent: 'transparent',
      white:"#fff",
      black:"#000",
      current: 'currentColor',
      primary:"var(--color-primary)",
      // Accent
      accent:"var(--color-accent)",
      "accent-dark":"var(--color-accent-dark)",
      "accent-light":"var(--color-accent-light)"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '6rem',
      subtitle:'2rem',
      title: '8rem',
    },
    screens: {
      sm: '560px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      title:[
        'inter'
      ],
      sans: [
        'inter',
        'system-ui',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['JetBrains Mono','monospace'],
    },
    fontWeight: {
      normal: 'var(--font-weight-normal)',
      bold: 'var(--font-weight-bold)'
    },
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      aside: "var(--width-aside)",
      main:"var(--width-main)",
      full: '100%',
      screen: '100vw',
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}