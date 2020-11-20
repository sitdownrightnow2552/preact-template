module.exports = {
  important: true,

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: [],

  theme: {
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },
    colors: {},
    extend: {},
    aspectRatio: {
      'none': 0,
      'square': [1, 1],
      '3/2': [3, 2],
      '3/4': [3, 4],
    },
  },

  variants: {},

  plugins: [require('tailwindcss-aspect-ratio')],

  corePlugins: {
    preflight: false,
    strokeWidth: false,
    stroke: false,
    fill: false,
    appearance: false,
    boxSizing: false,
    float: false,
    clear: false,
    objectPosition: false,
    objectFit: false,
    fontFamily: false,
    fontSize: false,
    fontSmoothing: false,
    placeholderColor: false,
    placeholderOpacity: false,
    fontStyle: false,
    backgroundColor: false,
    borderColor: false,
    borderCollapse: false,
    textColor: false,
  },
};
