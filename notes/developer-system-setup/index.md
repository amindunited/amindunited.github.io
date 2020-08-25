# Developer System Setup

## Table of Contents

1. [Browsers](#browsers)
2. [Mobile Emulators](#mobile-emulators)
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

You'll need a web browser to...use the web. Get Both.

- [Google Chrome](https://www.google.com/chrome/)
- [Firefox](https://www.mozilla.org/en-GB/firefox/new/)

## Mobile Emulators

1. Xcode (developer tools) from the app store

  then the command-line tools (this takes a long time):
  ```
  xcode-select --install
  ```

    Once Xcode is installed a link to the Ios simulator can be created by launching xcode:
      - Selecting 'xcode' menu -> 'Open Developer Tool' -> 'simulator'.
      - Once the simulator is open, drag its icon from the Launcher into the 'Applications' directory

## Global Package Manger

A Global Package Manager will allow you to install libraries and tools that did not come with the Operating System.

Even when writting a Javascript project there will come a need for a Ruby, or Python Library, and you'll need a package Manager to help with that.

* Operating System Specific Notes:

  If you are on Linux, you already have one, but you can stil install homebrew.

  If you are on OS X, you need Homebrew

  If you are using Windows; Stop. Use Linux or OSX.


One line install:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Make sure homebrew is up to date
```
brew update
```

Check the health of your homebrew install
```
brew doctor
```

[Homebrew Website](https://brew.sh/)


## Python

OS X ships with Python, so you can likely skip this step, but you may endup coming back if there is an issue installing something with pip.

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

There are a lot of tools for the terminal that will greatly ease and speed up you development.

If it seems daunting at first, don't worry. You can mostly get away with copying and pasting until you are comfortable.

Taking time to customise the terminal's shell, Plugins, Themes and colours is a great way to demystify it. It may not seem important to theme your terminal, but it will greatly empower you, as it helps you discover plugins and features.

- OS X
  - Install Command Line Developer Tools
  - Install [iTerm2](https://www.iterm2.com/)
  - Install [ZSH](./zsh/install-zsh.md), if you are using OS X Catalina or higher you likely already have it.
  - Install and customise [Oh-My-Zsh](./zsh/customising-zsh#install-oh-my-zsh)

- Linux

  - Install zsh (subsitute yum, or zypper as your system requires)

  ```
  sudo apt update
  sudo apt upgrade
  sudo apt install zsh
  ```

  - Set zsh as the default/login shell
    - List the available shells
    ```
    cat /etc/shells
    ```
    - Use chsh to change shells (using one of the paths listed from cat)
    ```
    chsh -s /usr/bin/zsh
    ```
- Windows

  ** Use Linux


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

One line install
```
brew install git
```
  ### Git Tools

  - GUIs

    - [Sourcetree](https://www.sourcetreeapp.com/)
    - [Github Desktop](https://desktop.github.com/)

### SSH Keys

ssh keys (Secure SHell) are a way to secure, or authenticate your account for remote login.

You will use ssh keys to securely login, create, or modify code, account settings, and more using external sites and service providers.

Go to your .ssh Directory
```
cd ~/.ssh
```

Check for existing keys, there should be 'id_rsa' (your private key) and 'id_rsa.pub' (your public key)
```
ls -al .
```

If they are not there, create them
```
ssh-keygen -t rsa -C "your_email@example.com"
```

Follow the prompts

Just press [enter]
```
Enter file in which to save the key (~/.ssh/id_rsa):
```

```
Enter passphrase (empty for no passphrase):
```

```
Your identification has been saved in ~/.ssh/id_rsa.
Your public key has been saved in ~/.ssh/id_rsa.pub.
The key fingerprint is:
**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:** example@e
The key's randomart image is:
+--[ RSA 2048]----+
|  .oo.           |
|         p       |
|          dd     |
|     . = = .     |
|      - t - .    |
|     -+-+-+-+    |
|     ¯\_(ツ)_/¯  |
|                 |
|                 |
+-----------------+
```


#### Using SSH key


Open your public key file ```id_rsa.pub```

```
code ./id_rsa.pub
```

copy the entire file contents and paste it into the input field of the site's ssh key

![Paste SSH key](./assets/images/ssh-key-paste.png)

## Git Hosting account

Now that we have git, we'll want somewhere to store the code. Especially if we want to share it.

Just sign up for a free account with any of these providers (but really, use [Github](https://github.com/)):

1. [Github](https://github.com/)
2. [Gitlab](https://about.gitlab.com/)
3. [Bitbucket](https://bitbucket.org/)

It is also possible that you work for a company that hosts thier own git instance. Just follow thier directions to setup.

#### You will also want to set up ssh keys for that account

  Make sure that you have a [public ssh key](#ssh-keys)

  - [Github ssh](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) && [Generating an ssh Key](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - [Gitlab ssh](https://dev.to/sndrx/how-to-set-up-an-ssh-key-and-use-it-in-gitlab--42p1)
  - [Bitbucket ssh](https://confluence.atlassian.com/bitbucketserver/ssh-user-keys-for-personal-use-776639793.html)

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

[NPM signup(https://www.npmjs.com/signup)

## Hosting

[Hosting Providers](./hosting/index.md)

