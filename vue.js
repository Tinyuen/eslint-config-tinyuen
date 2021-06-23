module.exports = {
  extends: [
    './lib/config/base',
    'eslint-config-airbnb-base',
    './lib/rules/es',
    './lib/rules/import',
    './lib/rules/vue',
  ].map(require.resolve),
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  }
};
