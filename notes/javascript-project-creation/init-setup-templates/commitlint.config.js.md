# Create a Commit Lint Config


## Basic
```
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

## With Custom Rules

```
cat > commitlint.config.js <<EOL
module.exports = {
  /*
   * Load a base Config (@commitlint/config-conventional) from node_modules.
   */
  extends: ["@commitlint/config-conventional"],
  /*
   * Any rules defined here will override rules from the base config that was loaded above
   */
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "improvement",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
EOL
```

## Refences

[Docs](https://commitlint.js.org/#/reference-rules)

[Npmjs Package](https://www.npmjs.com/package/@commitlint/config-conventional)
