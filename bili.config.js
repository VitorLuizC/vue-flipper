'use strict';

const vue = require('rollup-plugin-vue').default;
const autoprefixer = require('autoprefixer');

module.exports = {
  js: 'buble',
  input: 'src/Flipper.vue',
  format: ['es', 'cjs', 'umd'],
  plugins: [
    vue({
      css: false,
      style: {
        trim: false,
        postcssPlugins: [
          autoprefixer({ browsers: ['> 0.00001%'] })
        ]
      }
    })
  ]
};
