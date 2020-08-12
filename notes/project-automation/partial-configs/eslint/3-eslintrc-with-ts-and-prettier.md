## EsLintrc with Typescript and Prettier

```
cat > .eslintrc.js <<EOL
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    // Add any custom rules here.
  },
};
EOL
```
