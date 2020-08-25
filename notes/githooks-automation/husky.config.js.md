# Husky Config

This is part of [Githooks Project Automation](./../githooks-project-automation.md).


```
cat > husky.config.js <<EOL
module.exports = {
  hooks: {
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
    "pre-commit": "lint-staged && npm test",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
  },
};
EOL
```
