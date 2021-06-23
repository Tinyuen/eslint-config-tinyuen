module.exports = {
  extends: [
    './lib/config/base',
    'eslint-config-airbnb-base',
    './lib/rules/es',
    './lib/rules/import',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
