# Terminal

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
