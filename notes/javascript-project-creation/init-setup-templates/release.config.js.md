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
