# EsLintrc Prettier

Adding prettier to eslint only requires extending prettier, and adding some parser options to the default eslintrc.

```
cat > .eslintrc.js <<EOL
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "airbnb-base",
    "prettier"
  ]
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  }
};
EOL
```
