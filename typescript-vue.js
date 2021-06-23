module.exports = {
  extends: [
    './lib/config/base',
    'eslint-config-airbnb-base',
    './lib/rules/es',
    './lib/rules/import',
    './lib/rules/vue',
    './lib/rules/typescript',
  ].map(require.resolve),
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
};
