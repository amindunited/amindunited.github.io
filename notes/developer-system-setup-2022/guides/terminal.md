<link rel="stylesheet" href="/main.css"/>

# Terminal

![Well here we are typed on computer screen](../assets/well-here-we-are.gif)


Terminal, Console, Command line, this is where you enter commands into the computer.

It's often faster to do things through the terminal, but not always easier, so it's best to get familiar with it.

## Installing a Terminal Emulator

  macOS, and linux come with Terminals, so you don't _really_ need to install one.

  There are better ones that the default, though, and they may make things easier for you.
    
  macOS: [iTerm2](https://www.iterm2.com/)

  Gnome/Linux: [Terminator](https://gnome-terminator.org/)

  ```BASH
  sudo apt install terminator
  ```

## Shell

  The shell or Command-line interpreter, accepts commands and _interprets_ them for the system.

  ### Shells
  There can be multiple Shells on a system.
  These will be configured in `/etc/shells` a Linux / UNIX text file.
  ```
  # /etc/shells: valid login shells
  /bin/csh
  /bin/sh
  /usr/bin/es
  /usr/bin/rc
  /usr/bin/tcsh
  /bin/tcsh
  /bin/dash
  /bin/bash
  /usr/local/bin/fish
  ```
  
  ### Changing Shells

  You can change the current Shell with the `chsh` command.

  The `-s` flag is the name (path) to the shell that you would like to use.

  ```BASH
  chsh -s /usr/local/bin/fish
  ```

  ### Bash
  BASH (Bourne Again SHell) is the most popular shell, likely because it is the default on most GNU Linux machines, and previously on osX (macOS).

  ### ZSH
  ZSH (which is an extension of BASH) has become a favorite amongst Developers for it's ease of customisation and scripting.

  ZSH is now the default on macOS, and seems to be gaining popularity in the Linux community as well.

  #### To install ZSH on Debian/Ubuntu Linux
  
  ```BASH
  apt install zsh
  ```
  
  After the installation, change the default shell to zsh with `chsh`

  ```BASH
  chsh -s /usr/bin/zsh root
  ```

## Shell Configuration

Most Shells are configured with [~/.*rc](./configuration-files.md#rc-files)

These can usually be found in the current users' directory,  `~/.zshrc` for example
































 