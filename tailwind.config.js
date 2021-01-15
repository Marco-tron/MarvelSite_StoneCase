/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    // breakpoint configurations
    screens: {
        sm: "640px",
        md: "769px",
        lg: "1024px",
        xl: "1200px"
    },
    container: {},
  },
  variants: {
    extend: {
       borderWidth: ['hover', 'focus'],
    }

  },
  plugins: []
}
