# Lint Staged Config

Be sure to have already installed eslint, prettier lint-staged, and Husky [here](./../githooks-project-automation.md).


Run this script in your console to generate a lint-staged.config

```
cat > lint-staged.config.js <<EOL
module.exports = {
  "*.js": "eslint --cache --fix",
  "*.{js,css,md}": "prettier --write"
}
EOL
```

Return to guide [here](./detailed-walkthrough.md#lint-staged-and-husky)
