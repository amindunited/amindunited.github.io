# Husky Config for Lint-Staged

This is part of [Githooks Project Automation](./../../../githooks-project-automation.md).

Be sure to have already installed eslint, prettier lint-staged, and Husky.

Run this script in your console to generate a lint-staged.config

```
cat > husky.config.js <<EOL
module.exports = {
  "hooks": {
    "pre-commit": "lint-staged && npm test"
  }
}
EOL
```


Return to guide [here](./../../detailed-walkthrough.md#lint-staged-and-husky)
