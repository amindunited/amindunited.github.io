# Semantic Release

__Automated Semantic Versioning.__

Analyzes commits, and optionally:
 - updates version (major.minor.patch)
 - tags the branch
 - generates release notes
 - updates the contributors list
 - publishes the package

## Pre Installation

Before installing semantic release the project *must*
- Be an node module / npm project (semantic release can work with other languages, but requires npm for installation)
- Use git version control. Github, Gitlab, and Bitbucket are prefered (in that order)
- a consistent git commit message structure (conventional-changelog)


## Recommended Plugins and Features

  __Pre-installed__
  - [@semantic-release/commit-analyzer]()
  - [@semantic-release/github]()
  - [@semantic-release/npm]()
  - [@semantic-release/release-notes-generator]()

  __Additional__
  - [@semantic-release/changelog]()
  - [@semantic-release/git]()

  __Community Plugins__
  - [@google/semantic-release-replace-plugin]()
  - [semantic-release-contributors]()

## What we are setting up...
  When there is a successful merge to the main branch, Semantic release will, analyse the commits and the previous release version, and set a new version on the package.

  While it does this, it can also:

  - Update the Release Notes with the release-notes-generator plugin
  - Update the Changelog with the changelog plugin
  - Update the contributers list with the semantic-release-contributors plugin
  - Replace any instances of the release version in the codebase with the @google/semantic-release-replace-plugin
  - Tag the branch with the git/github plugin
  - Publish the package with the npm plugin.


## Installation
[See: semantic-release Docs](https://github.com/semantic-release/semantic-release)

__Install all features covered here__

```
npm install semantic-release @semantic-release/changelog @semantic-release/git @semantic-release/release-notes-generator semantic-release-contributors @google/semantic-release-replace-plugin --save-dev
```

__Install by Feature__

Semantic Release

```
npm install semantic-release --save-dev
```

Plugins

```
# Changelog
npm install @semantic-release/changelog --save-dev
# Git (if the project does not use github)
npm install @semantic-release/git --save-dev
# Release Notes
npm install @semantic-release/release-notes-generator --save-dev
# Contributers List
npm install semantic-release-contributors --save-dev
# Update Release Version references in codebase
npm install @google/semantic-release-replace-plugin --save-dev
```

[Add a release.config](../init-setup-templates/release.config.js.md)


## References

[npm](https://www.npmjs.com/package/semantic-release)

[semantic release gitbook](https://semantic-release.gitbook.io/semantic-release/)

