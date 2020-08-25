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
  - [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer) 
    - Used to determine what version to bump (Major, Minor, Patch) based on the commit messages
  - [@semantic-release/github](https://github.com/semantic-release/github)
      - Publish Gihub releases
  - [@semantic-release/npm](https://github.com/semantic-release/npm)
      - Publish to NPM
  - [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
      - Generate release notes

  __Additional__
  - [@semantic-release/changelog](https://github.com/semantic-release/changelog)
      - Generate / update the changelog
  - [@semantic-release/git](https://github.com/semantic-release/git)
      - Commit changes back into the repository

  __Community Plugins__
  - [@google/semantic-release-replace-plugin](https://github.com/google/semantic-release-replace-plugin)
      - Replace strings thoughout the project, for example the version number.
  - [semantic-release-contributors](https://github.com/flo-sch/semantic-release-contributors#readme)
      - Updates the contributers list.

## What we are setting up...
  When there is a successful merge to the main branch, Semantic release will

  - analyse the commits and the previous release version, and set a new version on the package.

  While it does this, it can also:

  - Update the Release Notes with the release-notes-generator plugin
  - Update the Changelog with the changelog plugin
  - Update the contributers list with the semantic-release-contributors plugin
  - Replace any instances of the release version in the codebase with the @google/semantic-release-replace-plugin
  - Tag the branch with the git/github plugin
  - Publish the package with the npm plugin.


## Installation

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

## Add a Release Config

As documented [here](./release.config.js.md), and remove any features or plugins that you are not using.

## Clean up

### Package.json 

  For each of these config that has been created, remove it from the Package.json:

  - browserslist
  - eslintConfig
  - husky
  - lint-staged
  - config: {
    commitizen
  }

  ### CI/CD

  ⚠️ __Warnings__ ⚠️

  1. The CI/CD must have rewite (history) access to the git repository.

      - Add read/write and 'modify history' rights for the CI/CD in the repo.

  2. Semantic Release will not work in the CI/CD unless it is specifically installed.

      - Add ```npx semantic-release``` to your build steps __before__ you run npm scripts.

  ie (circle CI):

  ```YAML
  # Javascript Node CircleCI 2.0 configuration file
  #
  # Check https://circleci.com/docs/2.0/language-javascript/ for more details
  #
  version: 2

  defaults: &defaults
    working_directory: ~/repo
    docker:
      - image: circleci/node:12.16.3

  jobs: # Declare the jobs
    # Create a Job Named Test
    test:
      <<: *defaults
      steps:
        - checkout # Checkout the Code
        - run: npm install # Install dependencies
        - run: npm run build # Run the build
        - run: npm test # Run the tests
    # Create a Job Named Release
    release:
      <<: *defaults
      steps:
        - checkout # Checkout the Code
        - run: npm install # Install dependencies
        - run: npx semantic-release # Setup Semantic Release

  workflows: # Declare the workflows (there's only one)
    version: 2
    test-and-deploy:
      jobs:
        - test # Call the 'test' Job
        - release: # Call the Release job...but only if:
            requires:
              - test # the 'test' job has passed
            filters:
              branches:
                only:
                  - master # and this is the Master Banch
                ignore: /.*/
  ```


## References

[npm](https://www.npmjs.com/package/semantic-release)

[semantic release gitbook](https://semantic-release.gitbook.io/semantic-release/)

[Semantic release Docs](https://github.com/semantic-release/semantic-release)

