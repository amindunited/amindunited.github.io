# EsLintrc Prettier

This is part of [Githooks Project Automation](./../../../githooks-project-automation.md).

Adding prettier to eslint only requires extending prettier, and adding some parser options to the default eslintrc.

Run this script in your console to generate an eslintrc that is configured to use prettier.

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

Return to guide [here](./../../detailed-walkthrough.md#prettier)
