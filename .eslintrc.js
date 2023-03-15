module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['prettier'],
};
