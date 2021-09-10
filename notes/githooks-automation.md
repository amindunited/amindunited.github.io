# Git Hooks and Project Automation

Automating tasks with Githooks.

This is a detailed guide.

To get setup quickly use the [Quick Setup Guide](./githooks-automation/quick-setup.md).

or to dig deeper use the [Detailed Walkthrough](./githooks-automation/detailed-walkthrough.md).

## Table of Contents

1. [What are Git Hooks](#what-are-git-hooks)
2. [Managing Hooks](#managing-hooks)
3. [Use Cases](#use-cases)
4. [Installation](#installation)
5. [Setup](#setup)
6. [Notes](#notes)

## What are Git Hooks?

Every Git repository has a ```.git/hooks/``` directory. In that directory there are script files that represent each hook 'event' for the repository.

```
📁 - hooks/
  📄 - applypatch-msg.sample
  📄 - commit-msg.sample
  📄 - post-update.sample
  📄 - pre-applypatch.sample
  📄 - pre-commit.sample
  📄 - pre-push.sample
  📄 - pre-rebase.sample
  📄 - pre-receive.sample
  📄 - prepare-commit-msg.sample
  📄 - update.sample
```

Git Hooks can be set by removing the ```.sample``` extension of the file for that hook, and adding the code (Bash) that you would like to run.

More info at: [Githooks.com](https://githooks.com/)

## Managing Hooks

Since the ```.git``` directory is hidden, the hooks for a given repo are obscured.

Libraries like [Husky](https://github.com/typicode/husky) make it much easier, to see, edit, and manage Git Hooks.

With Husky you simply declare the hooks for the project in a husky.config.js
```
module.exports = {
  hooks: {
    # This will run the NPM test Command before evey commit.
    "pre-commit": "npm test"
  },
};
```

## Use Cases

- Running Tests
- Code Linting
- Code Formatting
- Customising Commit Messages
- Automating Releases

## Installation

  Git Hooks come standard in every git repository.

  We only need to setup the tasks that we want to run.

## Setup

  __Follow the quick setup instructions [here](./githooks-automation/quick-setup.md)__ it will only take a few minutes.

  or select a feature from the table below.

  | Lib  | Feature | Install|        |
  |:---- |:------- |:-------|:------:|
  | BowsersList | Share Browser Config between tools, Libraries | [BrowsersList](./githooks-automation/detailed-walkthrough.md#browserslist) |
  | ESLint | Code analysis | [ESLint](./githooks-automation/detailed-walkthrough.md#eslint) |
  | Prettier | Code Formatting | [Prettier](./githooks-automation/detailed-walkthrough.md#prettier) |
  | Lint Staged | Git Hooks for ESLinst and Prettier | [Lint Staged](./githooks-automation/detailed-walkthrough.md#prettier-git-hooks) |
  | Commit Lint | Git Commit Analysis and Formatting | [Commit Lint](./githooks-automation/detailed-walkthrough.md#commit-lint) |
  | Commitizen | Git Commit Assistant | [Commitizen](./githooks-automation/detailed-walkthrough.md#commitizen) |
  | Semantic Release | Release Chore Automation | [Semantic Release](./githooks-automation/detailed-walkthrough.md#semantic-release) |


## Notes

  These instructions recommend creating an individual configuration file for each tool or library. This is because:

  - Library Configuration is not the responsibility of the Package.json
  - There is no reason to publish build config with the package.
  - With Project Info, NPM run scripts and dependencies, the Package.json is large enough.
  - Files with Single responsibility reduce merge conflicts, and enable upgrades and refactors.

