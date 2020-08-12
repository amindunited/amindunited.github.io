# Lint Staged Config

Be sure to have already installed eslint, prettier lint-staged, and Husky.

Follow the guide [here]('../../project-automation.md')

```
cat > lint-staged.config.js <<EOL
module.exports = {
  "*.js": "eslint --cache --fix",
  "*.{js,css,md}": "prettier --write"
}
EOL
```
