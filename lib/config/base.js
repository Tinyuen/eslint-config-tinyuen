module.exports = {
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false,
  },
  env: {
    browser: true,
  },
  globals: {},
};
