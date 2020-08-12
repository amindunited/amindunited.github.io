# Default EsLint Config

** This (or similar) will be created by running:  ```npx eslint --init``` and selecting 'js' config, and 'airbnb' from common styles.
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
