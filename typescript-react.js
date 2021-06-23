module.exports = {
  extends: [
    './lib/config/base',
    'eslint-config-airbnb',
    './lib/rules/es',
    './lib/rules/import',
    './lib/rules/jsx-a11y',
    './lib/rules/react',
    './lib/rules/typescript',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
};
