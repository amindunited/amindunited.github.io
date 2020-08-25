# Default EsLint Config

This is part of [Githooks Project Automation](./../../../githooks-project-automation.md).

** This (or similar) will be created by running:  ```npx eslint --init``` and selecting 'js' config, and 'airbnb' from common styles.

If not, run this script in your console to generate a lint-staged.config

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


Return to guide [here](./../../detailed-walkthrough.md#eslint)

