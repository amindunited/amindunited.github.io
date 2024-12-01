# Package Managers

## Package Managers - An Overview

A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring software.

A Package Manager will allow you to install libraries and tools that did not come with the Operating System.

Even when writing a Javascript project there will come a need for a Ruby, or Python Library, and you'll need a package Manager to help with that.

* Operating System Specific Notes:

  If you are on Linux, you already have one, but you can still install homebrew.

  If you are on OS X, you need Homebrew

  If you are using Windows it's probably best to use [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/about).

## macOS

  For installing free and Open-source software on macOs, like Compilers, Interpreters, Programming Languages.
  ### Homebrew

  _"Homebrew installs the stuff you need that Apple (or your Linux system) didn’t."_

  One line install:
  ```BASH
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

  Now you can install software using the `brew` command

  ```BASH
  brew install fish
  ```

  [Homebrew Website](https://brew.sh/)



