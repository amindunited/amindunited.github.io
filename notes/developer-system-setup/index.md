# Developer System Setup

## Table of Contents

1. [Browsers](#browsers)
2. [Xcode Developer Tools](#xcode-developer-tools)
3. [Global Package Manger](#global-package-manger)
4. [Python](#python)
5. [Terminal](#terminal)
6. [Code Editor / IDE](#code-editor)
7. [Node](#node)
8. [NVM](#nvm)
9. [Git](#git)
10. [SSH](#ssh-keys)
11. [Git Hosting](#git-hosting-account)
12. [CI/CD](#cicd-account)
13. [NPM js](#npm-account)

## Browsers

You'll need a web browser to...use the web. Get Both, and maybe Edge too.

a. [Google Chrome](https://www.google.com/chrome/)

b. [Firefox](https://www.mozilla.org/en-GB/firefox/new/)

c. [Edge](https://www.microsoft.com/en-us/edge)

  
  
## Xcode Developer Tools

Apples Xcode will install many useful utilities from a single easy command.

Learn more and Install [Xcode](./detailed/xcode.md)

## Global Package Manger

A Global Package Manager will allow you to install libraries and tools that did not come with the Operating System.

Even when writting a Javascript project there will come a need for a Ruby, or Python Library, and you'll need a package Manager to help with that.

Learn more and Install [Homebrew](./detailed/package-managers.md)

## Python

OS X ships with Python, so you can likely skip this step, but you may end up coming back if there is an issue installing something with pip.

```
# Install cmake to do builds
brew install cmake
# Install python...that was the goal here
brew install python
# Install pip so that we can load python packages
sudo easy_install pip
```

## Terminal

The Terminal (or console to some) is an invaluable tool for modifying files, folders, system code, configurations, and running tasks.

Learn more and Install a [terminal](./detailed/terminal.md)

## Code Editor

A good Text Editor, Code Editor, or Integrated Development Environment is vital in helping to Write, find and modify code.

There are a lot of options when it comes to picking an Editor, but at the time of writing, Visual Studio Code is the preferred choice amongst Javascript Developers.

  - [Install vscode](https://code.visualstudio.com/download)
  - [Suggested VSCode Extensions](./vscode/index.md)
  - [Configure vscode to use your terminal](./vscode/terminal-configuration.md)

## Node

Javascript originally just ran in the browser. It was used to decorate websites.

Now Javascript runs almost everywhere, and can be used for a lot more that just creating pop-ups.

The most common way to run Javascript outside of the browser is Node.

Node is a Javascript runtime, built on the [V8 Engine](https://v8.dev/). That's the same engine that browsers like Chrome, and Edge use.

Install with Homebrew:
```
brew install node
```
_or_

One liner to install node in OSX:
```
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

  - [Install Node](https://nodejs.org/en/download/package-manager/)

## NVM

[Node Version Manager](https://nodejs.org/en/download/package-manager/#nvm), or [NVM](https://nodejs.org/en/download/package-manager/#nvm) allows you to easily install and switch between node versions.

This is really useful if you want to run an older project, or start working on something that uses Node features that are new, or experimental.

Install nvm via Homebrew

```brew install nvm```

Create system directory for nvm

```mkdir ~/.nvm```

Add following line to your profile. (.profile or .zshrc or .zprofile)
```
# NVM
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

Reload Your profile
```
source ~/.zshrc
```

Confirm that nvm works
```
nvm --version
```

List the currently installed versions of Node
```
nvm ls
```

Install a Node version
```
nvm install 12.8.1
```

## Git

Git is a distributed version-control system for tracking changes in source code during software development.

Git is the de facto tool for tracking changes, hosting and sharing code. It will save you when you break you code, or need to find out what it was that you, or someone else did to the code.

Learn more and install git [here](./detailed/dcvs-git.md)

### SSH Keys

ssh keys (Secure SHell) are a way to secure, or authenticate your account for remote login.

Learn more and Setup SSH Keys [here](./detailed/ssh-keys.md)
## Code Hosting

You'll likely want to store, and maybe even, share your code.

Learn more and get set up with a provider [here](./detailed/code-hosting.md)
## CI/CD Account

Continuous Integration and Continuous Delivery platforms provide tools for updating, testing, publishing and releasing code.

These are a great way to automate the mundane tasks of checking out code, installing, building, running tests, bundling, and releasing.

### CI/CD Providers

 - [Github Actions](https://github.com/learn/devops)
 - [Travis-ci](https://travis-ci.org/)
 - [Circle-CI](https://circleci.com/)
 - [Gitlab](https://gitlab.com/)
 - [Bamboo](https://www.atlassian.com/software/bamboo)


## NPM Account

In order to publish a javascript module, you will need an NPM account.

[NPM signup](https://www.npmjs.com/signup)

## Hosting

[Hosting Providers](./hosting/index.md)

