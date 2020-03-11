module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    "prettier"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "prettier/prettier": "error",
    "no-console": "off",
  },

};
