# Githooks Project Automation

__Detailed walk through__

This is a very detailed guide. To get setup quickly use the [Quick Setup Guide](./quick-setup.md).

## Table of Contents
  1. [Goals](#goals)
  1. [Preamble](#preamble)
  1. [Browsers List](#browserslist)
  1. [esLint](#eslint)
  2. [Prettier](#prettier)
  3. [Lint Staged](#lint-staged-and-husky)
  4. [Commit Lint](#commit-lint)
  5. [Commitizen](#commitizen)
  6. [Semantic Release](#semantic-release)
  6. [Clean Up](#clean-up)

## Goals

  - Consistent Code Style.
  - Consistent Commits (easy to search, sort, and understand).
  - Easy / automated Releases.
  - Solid Tests.

## Preamble

  Although most projects have a linter. That linter often only provides hints, or some minor fixes (with ```lint --fix```). Having code consistency automated via git hooks, makes it much easier to catch mistakes, and maintain that consistency.

  [Prettier](#prettier) provides automated code formatting, an other layer on top of the linting, which makes it even easier to keep things consistent.

  If linting and code formatting is good for your code (and really, consistency does help a lot), then it follows that it would be good for your commits too. We can use [Commit Lint](#commit-lint) to ensure nicely formatted, consistent git commits. There is one problem though. What if you don't remeber the commit format, or a new developer starts working on the project?

  To help with this we'll use [Commitizen](#commitizen), and interactive command line tool to help easily create formatted git commit messages.

  Once all of that is in place, we can easily setup some automated release tasks with semantic release, like:
    - Automated version bumping
    - Contributer log generation
    - Release Notes generation
    - Inject the release version into the code

## BrowsersList

Browsers List enabled sharing of targeted Browser and Node versions between libraries. It is used by Autoprefixer, Babel, postcss, and eslint.

The is no installation required, Any library that uses it will install it. Simply create a [.browserslistrc](./browserslistrc.md)


## EsLint

  Eslint is a code analysis that flags programming errors, bugs, stylistic errors, and suspicious constructs.

  If your project has tslint, it's time to uplift due to the [deprecation of TSLint](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)

  ### Install
  
  One line:

  ```BASH
  npm install eslint eslint-plugin-react@^7.20.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.21.2 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest --save-dev
  ```

  ### Install Via CLI
  To install ESLint via the CLI run and follow the [prompts](./eslint.init.options.md):

  ```BASH
  # install eslint
  # follow the prompts and create an .eslintrc.js
  npx eslint --init
  ```

  ```BASH
  # Add typescript support
  npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
  ```

  This will give you a basic ```.eslintrc``` we'll configure eslint for typescript later.

  ### For Angular

  If the app uses Angular, follow this guide for [migrating to eslint](./eslint-in-angular.md)

  ### Visual Studio Code Plugin

  To enable Linting on-save in vscode

  Install the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

  and in the ```.vscode/settings.json``` of the project, add:

  ```JSON
  "eslint.validate": [ "javascript", "typescript", "html"],

  "eslint.options": {
    "extensions": [".js", ".ts", "html"]
  },

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  ```

  ### EsLint References

  [Eslint - Getting Started](https://eslint.org/docs/user-guide/getting-started)

  [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

## Prettier

  Prettier is a code formatter that will to apply consistent styling rules.

  ```BASH
  # install prettier
  npm install --save-dev --save-exact prettier
  npm install eslint-config-prettier --save-dev
  # Create prettierrc
  echo {}> .prettierrc.json
  ```

  Add prettier to the [eslintrc](./partial-configs/eslint/2-eslintrc-with-prettier.md)

  ### Visual Studio Code Plugin

  To enable Prettier on-save in vscode

  Install the [vcode ESLint plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

  and in the ```.vscode/settings.json``` of the project, add:

  ```JSON
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
  }

  // Set the default
  // set to true if you want the formater to run on every save
  "editor.formatOnSave": false,
  // Enable per-language
  "[javascript]": {
    "editor.formatOnSave": true
  }

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  ```

## Lint Staged and Husky

  Lint staged is a tool that will run your linter rules on your code when it is staged in Git. In order to do this it needs Husky.

  Husky is a tool that make orchestrating Git Hooks easier. It can be used to run script on git events like on commit.

  Fortunately Lins-Staged will install Husky for us via mrm. MRM is a tool that automates syncing of some config files, in this case, lint-staged will use mrm to install husky.

```BASH
# lint-staged (via mrm which syncs up configs)
# This will also install husky. 🐕
npx mrm lint-staged
```

Set up a [lint-staged.config.js](./lint-staged.config.js.md)

Set up a [husky.config.js](./partial-configs/husky.config/1-husky.config.lint-staged.md)

- ⚠️ lint-staged, and husky configs should now be removed from package.json

## Commit Lint

Commit Lint will ensure that all commits meet with a defined commit structure.

To install:

```
npm install --save-dev @commitlint/{config-conventional,cli}
```

[Create a commitlint.config](./commitlint.config.js.md)

[Add Commit Lint to husky config](./partial-configs/husky.config/2-husky.config.commit-lint.md)

## Commitizen

Since [Commit Lint](#commit-lint) is enforcing a commit format, we will use Commitizen to provide interactive CLI to help dev's create commits in our chosen format.

To Install:

```
npm install commitizen -g
commitizen init cz-conventional-changelog --save-dev --save-exact
```

[Add Commitizen Config](./czrc.md)

[Add commitizen to the husky config](./husky.config.js.md)

## Semantic Release

Semantic Release automates tasks on merge. In this case we will set it up to run tasks on merge into the Master Branch.

for more info see [semantic-release Docs](https://github.com/semantic-release/semantic-release)

### Install Semantic Release

As documented [here](./semantic-release.md)

### Configure Semantic Release

[Add a release.config](./release.config.js.md)

In order for Semantic Release to work the CI/CD for the project will need Commit, and Rewrite access to the repository.


## Clean up


### Release.Config.js

  - Remove "@semantic-release/npm", if not this project is not publishing to NPM.

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

