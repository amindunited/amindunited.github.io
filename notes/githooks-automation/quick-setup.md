# Githooks Quick Setup

This is the quick install guide. To learn more, cherry pick, or to customise the setup follow the [Detailed Guide](./detailed-walkthrough.md).

## Table of Contents
1. [Installation](#installation)
2. [Clean Up](#clean-up)
3. [Visual Studio Code](#visual-studio-code)

## Installation

#### What this will Install

  1. BrowsersList - [Details](./detailed-walkthrough.md#browserslist)
  2. ESLint - [Details](./detailed-walkthrough.md#eslint)
  3. Prettier - [Details](./detailed-walkthrough.md#prettier)
  4. Lint Staged - [Details](./detailed-walkthrough.md#prettier-git-hooks)
  5. Commit Lint - [Details](./detailed-walkthrough.md#commit-lint)
  6. Commitizen - [Details](./detailed-walkthrough.md#commitizen)
  7. Semantic Release - [Details](./detailed-walkthrough.md#semantic-release)

Run the code below in the root directory of the application.


```BASH
## BrowsersList
echo "Configuring Browsers List"

cat > .browserslistrc <<EOL

[production]
> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 9-10 # For IE 9-11 support, remove 'not'.

[development]
last 1 chrome version
last 1 firefox version
last 1 safari version

[ssr]
node 12
EOL


## ESLint
echo "Installing Eslint"
# Add typescript support to eslint
npm install eslint eslint-plugin-react@^7.20.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.21.2 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest --save-dev

## ESLint
echo "Configuring Eslint"

cat > .eslintrc.js <<EOL
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
  },
};
EOL

## Prettier
echo "installing prettier"

npm install prettier --save-dev --save-exact
npm install eslint-config-prettier --save-dev

echo "Configuring prettier"
echo {}> .prettierrc.json

## Lint Staged and Husky
  # lint-staged (via mrm which syncs up configs)
  # This will also install husky. 🐕

echo "Installing Lint-Staged"

npx mrm lint-staged

echo "Configuring Lint-Staged"

cat > lint-staged.config.js <<EOL
module.exports = {
  "*.js": "eslint --cache --fix",
  "*.{js,css,md}": "prettier --write"
}
EOL

echo "Configuring Husky"

cat > husky.config.js <<EOL
module.exports = {
  hooks: {
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
    "pre-commit": "lint-staged && npm test",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
  },
};
EOL

## Commit Lint
echo "Installing Commit Lint"

npm install --save-dev @commitlint/{config-conventional,cli}

echo "Configuring Commit Lint"
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

## Commitizen
echo "Installing Commitizen"

npm install commitizen -g
commitizen init cz-conventional-changelog --save-dev --save-exact

echo "Configuring Commitizen"

cat > .czrc <<EOL
{
  "path": "cz-conventional-changelog"
}
EOL

## Semantic Release
echo "Installing Semantic Release"

npm install semantic-release @semantic-release/changelog @semantic-release/git @semantic-release/release-notes-generator semantic-release-contributors @google/semantic-release-replace-plugin --save-dev

echo "Configuring Semantic Release"

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

## Clean up


### Release.Config.js

  - Remove "@semantic-release/npm", if not this project is not publishing to NPM.
  
### Package.json 

  Remove these configs from the Package.json:

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

## Visual Studio Code


#### To enable Linting on-save in vscode


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


#### To enable Prettier on-save in vscode


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
