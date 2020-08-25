# EsLint in Angular 10

This is part of [Githooks Project Automation](./../githooks-project-automation.md).


## Eslint

Since Angular still doesn't ship with EsLint, and TsLint is [deprecated](https://medium.com/palantir/tslint-in-2019-1a144c2317a9) a few extra steps will be needed to add this to an Angular app.

## Install the schematics

```BASH
ng add @angular-eslint/schematics
```

This will give you:

  - @angular-eslint/builder — Angular CLI Builder to run ESLint for Angular apps with standart command ng lint
  - @angular-eslint/eslint-plugin — plugin with rules for linting Angular apps
  - @angular-eslint/eslint-plugin-template — Angular Template rules
  - @angular-eslint/template-parser - parse Angular Templates
  - @typescript-eslint/parser — plugin to parse TypeScript code
  - @typescript-eslint/eslint-plugin

## EsLint default config

 If for some reason you don't have an eslintrc.js in the root of your project, you can create one with [this template](./partial-configs/eslint/1-eslintrc-default.md)


## Use eslint for ng Lint
Modify the ```Angular.json``` so that the ```ng lint``` command runs @angular-eslint/builder:

```JSON
"lint": {
  "builder": "@angular-eslint/builder:lint",
  "options": {
    "eslintConfig": ".eslintrc.js",
    "tsConfig": [
      "tsconfig.app.json",
      "tsconfig.spec.json",
      "e2e/tsconfig.json"
    ],
    "exclude": [
      "**/node_modules/**"
    ]
  }
},
```

** Take notice of the line with ```"e2e/tsconfig.json"``` your tsconfig for e2e tests may be in a different directory. This will likely be the case if you are using Cypress.

## Install Common Eslint Rules

```
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-airbnb-typescript
```

When these rules are added they will be added to the 'extends' array of an override rule. In the example below, it is an override for ```*.ts``` files.


```JSON
//...
overrides: [
  {
    files: ['*.ts'],
    extends: [
      'airbnb-typescript/base',
      'prettier/@typescript-eslint'
    ]
  }
]
//...
```
⚠️ 
We will edit eslint config [later](./partial-configs/eslint/10-eslintrc-for-angular.md), so there is no need to do it now.
The code above is just for example ⚠️ 

## Install Lint rules for Jasmine

```
npm install eslint-plugin-jasmine --save-dev
```

When the Jasmine rule is added it will be added as an "override":

```JSON
overrides: [
//...
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
      extends: ['plugin:jasmine/recommended'],
      plugins: ['jasmine'],
      env: { jasmine: true },
    },
//...
]
```
⚠️ This will be added to the config [later](./partial-configs/eslint/10-eslintrc-for-angular.md), so there is no need to do it now.⚠️ 


## Back

Now that Eslint is installed, and Angular is configured to use it, we can [continue with the rest of the setup](./../githooks-project-automation.md#visual-studio-code-plugin).

## References

[Migrate Angular app to ESLint with Prettier](https://dev.to/bzvyagintsev/migrate-angular-app-to-eslint-with-prettier-airbnb-styleguide-husky-and-lint-staged-862)
