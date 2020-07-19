# General Requirements

### Browsers

You'll need a web browser to...use the web. Get Both.

- [Google Chrome](https://www.google.com/chrome/)
- [Firefox](https://www.mozilla.org/en-GB/firefox/new/)

### Global Package Manger

A Global Package Manager will allow you to install libraries and tools that did not come with the Operating System.

Even when writting a Javascript project there will come a need for a Ruby, or Python Library, and you'll need a package Manager to help with that.

* Operating System Specific Notes:

  If you are on Linux, you already have one, but installing homebrew is still a good idea.

  If you are on OS X, you need Homebrew

  If you are using Windows; Stop. Use Linux.


[Homebrew Website](https://brew.sh/)

One line install:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Terminal

The Terminal (or console to some) is an invaluable tool for modifying files, folders, system code, configurations, and running tasks.

There are a lot of tools for the terminal that will greatly ease and speed up you development.

If it seems daunting at first, don't worry. You can mostly get away with copying and pasting until you are comfortable.

Taking time to customise the terminal's shell, Plugins, Themes and colours is a great way to demystify it.

- OS X
  - Install Command Line Developer Tools
  - Install [iTerm2](https://www.iterm2.com/)
  - Install ZSH (not required, but worth it)
    - Install Homebrew (if you haven't already)
    ```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew doctor
    ```
    - Install zsh
    ```
    brew install zsh
    ```
    - Set zsh as your default shell
    ```
    sudo sh -c "echo $(which zsh) >> /etc/shells" && chsh -s $(which zsh)
    ```
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


### Code Editor

A good Text Editor, Code Editor, or Integrated Development Environment is vital in helping to Write, find and modify code.

There are a lot of options when it comes to picking an Editor, but at the time of writing, Visual Studio Code is the preferred choice amongst Javascript Developers.

  - [Install vscode](https://code.visualstudio.com/download)

### Node

Javascript originally just ran in the browser. It was used to decorate websites.

Now Javascript runs almost everywhere, and can be used for a lot more that just creating pop-ups.

The most common way to run Javascript outside of the browser is Node.

Node is a Javascript runtime, built on the [V8 Engine](https://v8.dev/). That's the same engine that borwsers like Chrome, and Edge use.

  - [Install Node](https://nodejs.org/en/download/package-manager/)

### NVM

[Node Version Manager](https://nodejs.org/en/download/package-manager/#nvm), or [NVM](https://nodejs.org/en/download/package-manager/#nvm) allows you to easily install and switch between node versions.

This is really useful if you want to run an older project, or start working on something that uses Node features that are new, or experimental.

One line install:
```
env VERSION=`python tools/getnodeversion.py` make install DESTDIR=`nvm_version_path v$VERSION` PREFIX=""
```

### Git

Git is a distributed version-control system for tracking changes in source code during software development.

Git is the de facto tool for tracking changes, hosting and sharing code. It will save you when you break you code, or need to find out what it was that you, or someone else did to the code.

One line install
```
brew install git
```
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
### Git Hosting account

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

### CI/CD Account

Continuous Integration and Continuous Delivery platforms provide tools for updating, testing, publishing and releasing code.

These are a great way to automate the mundane tasks of checking out code, installing, building, running tests, bundling, and releasing.



### NPM Account

### Hosting Account

## Recommended

  ### Terminal Tools

  - ZSH

    - [iTerm (zsh) Material Theme](http://amindunited.github.io/notes/iterm-with-material-theme)
    - [Example ZSH Config](http://amindunited.github.io/notes/my-current-zsh-settings)

  ### Code Editor Plugins

  - VSCode

    - [Example VSCode Settings](http://amindunited.github.io/notes/my-current-vscode-settings)
    - [Example VSCode Extensions](http://amindunited.github.io/notes/my-current-vscode-settings#extensions)


  ### Git Tools

  - GUIs

    - [Sourcetree](https://www.sourcetreeapp.com/)
    - [Github Desktop](https://desktop.github.com/)


