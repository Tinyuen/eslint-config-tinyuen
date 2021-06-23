module.exports = {
  extends: [
    './lib/config/base',
    'eslint-config-airbnb',
    './lib/rules/es',
    './lib/rules/import',
    './lib/rules/jsx-a11y',
    './lib/rules/react',
  ].map(require.resolve),
  parser: 'babel-eslint'
};
