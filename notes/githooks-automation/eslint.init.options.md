# ES Lint Init Options


## Table of Contents
1. [Install](#install)
2. [Prompts (short)](#prompts-short)
3. [Prompts (Detailed)](#prompts-detailed)

## Install

```BASH
# install eslint
# follow the prompts and create an .eslintrc.js
npx eslint --init
```

## Prompts (short)

1. [ESLint Use](#1-eslint-use)
    - Prompt: ```How would you like to use ESLint?```
    - Select: ```To check syntax, find problems, and enforce code style```

2. [Type of Modules](#2-type-of-modules)
    - Prompt: ```What type of modules does your project use?```
    - Select: ```JavaScript modules (import/export)```

3. [Framework](#3-framework)
    - Prompt: ```Which framework does your project use?```
    - Select: ```React```

4. [Type of Modules](#4-type-of-modules)
    - Prompt: ```Does your project use TypeScript?```
    - Select: ```Yes```

5. [Environment](#5-environment)
    - Prompt: ```Where does your code run?```
    - Select: ```Browser```

6. [Style Guide](#6-style-guide)
    - Prompt: ```How would you like to define a style for your project?```
    - Select: ```Use a popular style guide```

7. [Which Styleguide](#7-which-styleguide)
    - Prompt: ```Which style guide do you want to follow?```
    - Select: ```❯ Airbnb: https://github.com/airbnb/javascript```

8. [Config Format](#8-config-format)
    - Prompt: ```What format do you want your config file to be in?```
    - Select: ```❯ JavaScript```

9. [Installing Additional Dependencies](#9-installing-additional-dependencies)
    - Prompt: ```Would you like to install them now with npm?```
    - Select: ```Yes```

## Prompts (Detailed)

### 1. ESLint Use

Prompt: ```How would you like to use ESLint?```

Select: ```To check syntax, find problems, and enforce code style```

```BASH
  ? How would you like to use ESLint? … 
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style
```

### 2. Type of Modules

Prompt: ```What type of modules does your project use?```

Select: ```JavaScript modules (import/export)```

```BASH 
what type of modules does your project use? … 
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

### 3. Framework

Prompt: ```Which framework does your project use?```

For most cases Select: ```React```
Select: ```None of these``` if you are writing a Nodejs App
Select: ```Vue.js``` if you are writing a Vue.js App

```BASH
? Which framework does your project use? … 
❯ React
  Vue.js
  None of these
```

### 4. Type of Modules

Prompt: ```Does your project use TypeScript?```

```BASH
? Does your project use TypeScript? › No / Yes
```

### 5. Environment

Prompt: ```Where does your code run?

```BASH
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node
```

### 6. Style Guide

Prompt: ```How would you like to define a style for your project?```

Select: ```Use a popular style guide```

```BASH
? How would you like to define a style for your project? … 
❯ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)
```

### 7. Which Styleguide

Prompt: ```Which style guide do you want to follow?```

Select: ```❯ Airbnb: https://github.com/airbnb/javascript```

```BASH
? Which style guide do you want to follow? … 
❯ Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
```


### 8. Config Format

Prompt: ```What format do you want your config file to be in?```

Select: ```❯ JavaScript```

```BASH
? What format do you want your config file to be in? … 
❯ JavaScript
  YAML
  JSON
```

### Results

```BASH
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
```

### 10. Installing Additional Dependencies

Prompt: ```Would you like to install them now with npm?```
Select: ```Yes```

```BASH
? Would you like to install them now with npm? › No / Yes
```
