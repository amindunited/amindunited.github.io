# Project Creation

Before you start, you will need

1. A Git hosting service (Github, Gitlab, Bitbucket)
2. A CI/CD (Github Actions, Gitlab, Travis, CircleCI)
3. An npm account / org
4. Git installed on your machine.
5. Node installed on your machine.
6. Node Version Manager installed.

## What a nice project would have
  1. Documentation
  2. Consistent Code Style
  3. 100% Test Coverage
  4. Stable Releases

## What we want to do:
1. Set up any kind on javascript project (node, react, angular, ...)
2. Set up testing.
3. Save code changes to a repo.
4. Automate Publishing.

## Possible order of actions
1. Init Code -> Create Repo -> Automate -> Deploy
2. Create Repo -> Init Code -> Automate -> Deploy
3. Create Repo -> Setup Automation -> Init Code -> Deploy
4. Create Repo -> Init Code -> Deploy -> Setup Automation

## Steps for POAs

Possible order of actions

### 1. Init Code -> Create Repo -> Automate

  - Init Code eg:
    - ```mkdir my-app && cd $_ && npm init && git init```
    - ```npx create-react-app my-app --template typescript```
    - ```ng new my-app```

  - Create repo:

      * [More details here](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line)
    - If your project init didn't do it: ```git init```
    - Create a new repo
    - Copy the repo url (not the browser one, the 'clone' one. Usually: ssh://)
    - ```git remote add origin remote repository URL```
    - Once you write some code you can:
        * ```git add .```
        * ```git commit -m "Init Commit"```
        * ```git push``` or ```git push origin master```
    - Establish a Branching Strategy

  - Automate
    1. Set up a CI/CD
    2. [Prettier](#prettier)
    3. [Lint Staged](#prettier-git-hooks)
    4. [Commit Lint](#commit-lint)
    5. [Commitizen](#commitizen)
    6. [Semantic Release](#semantic-release)


Setting up a project

1. [Create a repo, init npm, and set node version.](#Create-a-repo-init-npm-and-set-node-version)
2. [Create a .gitignore file, Editor Config and Linting](#Create-a-gitignore-file-Editor-Config-and-Linting)
3. [Install Typescript and Jest](#Install-Typescript-and-Jest)

Setup Automation

1. [Prettier](#prettier)
2. [Lint Staged](#prettier-git-hooks)
3. [Commit Lint](#commit-lint)
4. [Commitizen](#commitizen)
5. [Semantic Release](#semantic-release)



## Setting up a project

#### Create a repo, init npm, and set node version.

```
# Create a git repo and check it out
git clone ssh:_repo_name_ && cd _repo_name_

# Add npm
npm init

# Set node version
node -v > .nvmrc

```

#### Create a .gitignore file, Editor Config and Linting

- [Create a .gitignore file](./init-setup-templates/gitignore.md)
- [Create an .editorconfig file](./init-setup-templates/editorconfig.md)
- Linting

```
# install eslint
# follow the prompts and create an .eslintrc.js
npx eslint --init
# Add typescript support
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- [Create an eslintrc](./init-setup-templates/eslintrc.js.md)

#### Install Typescript and Jest

```
npm install --save-dev typescript ts-node @types/node
```

- [Create a tsconfig.json file](./init-setup-templates/tsconfig.json.md)

- Install jest, and typescript files for jest

```
npm install --save-dev @types/jest jest ts-jest
```

- [Create a jest.config.js file](./init-setup-templates/jest.config.md)

- Create a Directory and index file for the source code

```
mkdir ./src && cat > ./src/index.ts <<EOL
export {};
EOL
```

- Add npm run scripts to Package.json

```
//...
"scripts": {
  "start": "ts-node ./index.ts",
  "ts:defs": "tsc --declaration --outDir ./dist --emitDeclarationOnly",
  "build": "rm -rf ./dist && tsc && npm run ts:defs",
  "test": "jest",
  "semantic-release": "semantic-release"
},
//...
```

## Setup Automation

### Prettier

```
# install prettier
npm install --save-dev --save-exact prettier
npm install eslint-config-prettier --save-dev
# Create prettierrc
echo {}> .prettierrc.json
```

### Prettier Git Hooks

```
# lint-staged (via mrm which syncs up configs) This will also install husky.
npx mrm lint-staged
```

[create lint-staged.config.js](./init-setup-templates/lint-staged.config.js.md)

[create husky.config.js](./init-setup-templates/husky.config.js.lint-staged.md)

- lint-staged, and husky configs can now be removed from package.json

### Commit Lint

```
npm install --save-dev @commitlint/{config-conventional,cli}
```

[Create a commitlint.config](./init-setup-templates/commitlint.config.js.md)

[Add Commit Lint to husky config](./init-setup-templates/husky.config.js.commitlint.md)

### Commitizen

```
npm install commitizen  --save-dev
npm install cz-conventional-changelog --save-dev
```

[Add Commitizen Config](./init-setup-templates/czrc.md)

[Add commitizen to the husky config](./init-setup-templates/husky.config.js.md)

### semantic-release

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

[Add a release.config](./init-setup-templates/release.config.js.md)
