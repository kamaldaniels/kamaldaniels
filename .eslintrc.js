module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  plugins: ['prettier', 'cypress'],
  // add your custom rules here
  rules: {},
}
