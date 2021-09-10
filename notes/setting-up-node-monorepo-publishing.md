# Setting up Node Monorepo Publishing

  ## Prerequisites
  
  ### System Setup
  1. Browsers
  2. Terminal
  3. System Developer Tools (MacOs Xcode) 
  4. System Package Manger (Homebrew)
  5. Git
  6. Node
      - NVM
  7. IDE

  ### Service Providers
  
  1. Code version Management (Git) Should have it from step 5 above...
    
      a. [Quick Install](./setting-up-node-monorepo-publishing/detailed/dcvs-git.md#/installing_git)
      
      b. [Git Details](./setting-up-node-monorepo-publishing/detailed/dcvs-git.md)

  2. Code hosting (Github) 

      a. [Quick]() - (Not set up yet)

      b. [Git Host Options](./setting-up-node-monorepo-publishing/detailed/code-hosting.md)

  3. A Host

      a. [Quick]() - (Not set up yet)

      b. [Hosting Options](./setting-up-node-monorepo-publishing/detailed/hosting/index.md)

  4. Pipeline (Github Actions)

      a. [Quick]() - (Not set up yet)

      b. [CI/CD Options](./setting-up-node-monorepo-publishing/detailed/ci-cd-providers.md)
    
  5. A Package Repository to publish to.

      b. [NPM](./setting-up-node-monorepo-publishing/detailed/npm.md)

<hr/>

  ### Prep Work

  1. SSH Keys - Have the public RSA one on hand
  2. Github Account Token.


## Project Init

  1. Create Repo, check it out.
  2. Set Node Version.
  3. yarn int.
  4. Add 'Community Docs' (Readme, Contributing, code of conduct)
  5. Add Browser List, EsLint, Prettier, Lint Staged Commit Lint, ...see table below
  6. Add Lerna.


## TOC

  | Lib  | Feature | Install|        |
  |:---- |:------- |:-------|:------:|
  | BowsersList | Share Browser Config between tools, Libraries | [BrowsersList](./githooks-automation/detailed-walkthrough.md#browserslist) |
  | ESLint | Code analysis | [ESLint](./githooks-automation/detailed-walkthrough.md#eslint) |
  | Prettier | Code Formatting | [Prettier](./githooks-automation/detailed-walkthrough.md#prettier) |
  | Lint Staged | Git Hooks for ESLinst and Prettier | [Lint Staged](./githooks-automation/detailed-walkthrough.md#prettier-git-hooks) |
  | Commit Lint | Git Commit Analysis and Formatting | [Commit Lint](./githooks-automation/detailed-walkthrough.md#commit-lint) |
  | Commitizen | Git Commit Assistant | [Commitizen](./githooks-automation/detailed-walkthrough.md#commitizen) |
  | Semantic Release | Release Chore Automation | [Semantic Release](./githooks-automation/detailed-walkthrough.md#semantic-release) |
  | Lerna | Multi Package management | [Lerna](./) |
