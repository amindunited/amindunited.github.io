```
cat > husky.config.js <<EOL
module.exports = {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
EOL
```
