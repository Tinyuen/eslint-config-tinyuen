module.exports = {
  extends: [
    './lib/config/base',
    'eslint-config-airbnb-base',
    './lib/rules/es',
    './lib/rules/import',
    './lib/rules/typescript',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
};
