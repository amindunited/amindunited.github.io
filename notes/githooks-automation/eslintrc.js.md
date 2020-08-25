# Creating an Es Lint Config

This is part of [Githooks Project Automation](./../githooks-project-automation.md).

## Basic

** This (or similar) will be created by running:  ```npx eslint --init```
```
cat > .eslintrc.js <<EOL
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "airbnb-base"
  ]
};
EOL
```

## Typescript

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
  },
};
EOL
```

## Prettier

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

## Typescript and Prettier

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
  },
};
EOL
```

Return to guide [here](./detailed-walkthrough.md).

## References

[Eslint - Getting Started](https://eslint.org/docs/user-guide/getting-started)

[Configuring ESLint](https://eslint.org/docs/user-guide/configuring)
