# Javascript Project Automation

## 

Situation

Task

Action

Result

## Goals

  - Consistent Code Style
  - Consistent Commits (easy to search, sort grok)
  - Easy / automated Releases
  - Solid Tests

## Preamble

  Although most projects have a linter. That linter often only provides hints, or some minor fixes (with ```lint --fix```). Having code consistency automated via git hooks, makes it much easier to catch mistakes, and maintain that consistency.

  [Prettier](#prettier) provides automated code formatting, an other layer on top of the linting, which makes it even easier to keep things consistent.

  If linting and code formatting is good for your code, and really consistency does help a lot, then it follows that it would be good for your commits too. We can use [Commit Lint](#commit-lint) to ensure nicely formatted, consistent git commits. There is one problem though. What if you don't remeber the commit format, or a new developer starts working on the project?

  To help with this we'll use [Commitizen](#commitizen), and interactive command line tool to help easily create formatted git commit messages.

  Once all of that is in place, we can easily setup some automated release tasks with semantic release, like:
    - Automated version bumping
    - Contributer log generation
    - Release Notes generation
    - Inject the release version into the code


## Install
  1. [esLint](#eslint)
  2. [Prettier](#prettier)
  3. [Lint Staged](#prettier-git-hooks)
  4. [Commit Lint](#commit-lint)
  5. [Commitizen](#commitizen)
  6. [Semantic Release](#semantic-release)


## EsLint

  Eslint is a code analysis that flags programming errors, bugs, stylistic errors, and suspicious constructs.

  If your project has tslint, it's time to uplift due to the [deprecation of TSLint](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)

  ```
  # install eslint
  # follow the prompts and create an .eslintrc.js
  npx eslint --init
  # Add typescript support
  npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
  ```

  This will give you a basic ```.eslintrc``` we'll configure eslint for typescript later.

  ### For Angular

  If the app uses Angular, follow this guide for [migrating to eslint](./project-automation/eslint-in-angular.md)

  ### Visual Studio Code Plugin

  To enable Linting on-save in vscode

  Install the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

  and in the ```.vscode/settings.json``` of the project, add:

  ```
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

  ```
  # install prettier
  npm install --save-dev --save-exact prettier
  npm install eslint-config-prettier --save-dev
  # Create prettierrc
  echo {}> .prettierrc.json
  ```

  ### Visual Studio Code Plugin

  To enable Prettier on-save in vscode

  Install the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

  and in the ```.vscode/settings.json``` of the project, add:

  ```
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

  Fortunately Linst-Staged will install Husky for us.

```
# lint-staged (via mrm which syncs up configs)
# This will also install husky. 🐕
npx mrm lint-staged
```

Set up a [lint-staged.config.js](./project-automation/partial-configs/husky.config/1-husky.config.lint-staged.md)

Set up a [husky.config.js](./project-automation/partial-configs/husky.config/1-husky.config.lint-staged.md)

- lint-staged, and husky configs should now be removed from package.json

## Commit Lint

```
npm install --save-dev @commitlint/{config-conventional,cli}
```

[Create a commitlint.config](./project-automation/commitlint.config.js.md)

[Add Commit Lint to husky config](./project-automation/husky.config.js.commitlint.md)

## Commitizen

Commitizen 

```
npm install commitizen  --save-dev
npm install cz-conventional-changelog --save-dev
```

[Add Commitizen Config](./project-automation/czrc.md)

[Add commitizen to the husky config](./project-automation/husky.config.js.md)

## semantic-release

[See: semantic-release Docs](https://github.com/semantic-release/semantic-release)

```
npm install semantic-release --save-dev
```

In order to update auto-update the the changelog:

```
npm install @semantic-release/changelog --save-dev
npm install @semantic-release/release-notes-generator --save-dev
npm install semantic-release-contributors --save-dev
```

[Add a release.config](./project-automation/release.config.js.md)
