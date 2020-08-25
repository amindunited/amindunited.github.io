## EsLintrc with Typescript and Prettier

This is part of [Githooks Project Automation](./../../../githooks-project-automation.md).

Run this script in your console to generate an eslintrc that is configured to use prettier, and typscript.

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

Return to guide [here](./../../../githooks-project-automation.md#prettier)
