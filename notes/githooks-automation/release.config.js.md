# Semantic Release Config


Run this script in your console to generate a release.config

```
cat > release.config.js <<EOL
module.exports = {
  'branches': ['master', 'next'],
  "preset": "angular",
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    ["@semantic-release/changelog", {
      "changelogFile": "docs/CHANGELOG.md",
    }],
    ["@semantic-release/release-notes-generator", {
      "preset": "angular",
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      },
      "writerOpts": {
        "commitsSort": ["subject", "scope"]
      }
    }],
    ["semantic-release-contributors", {
      "format": "string",
      "pkgRoot": "."
    }]
    ["@semantic-release/git", {
      "assets": ["docs/CHANGELOG.md"],
    }],
  ]
};
EOL
```

⚠️ If you do not want to publish to NPM __remove__ the line containing ```@semantic-release/npm```.


Return to guide [here](./../githooks-project-automation.md#semantic-release)

## References
More Details [here](./semantic-release.md)
