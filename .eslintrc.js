module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // add your custom rules here
  'rules': {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "never"
    }],
    // "typescript/rule-name": "error",
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
