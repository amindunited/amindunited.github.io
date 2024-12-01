# Oh My Zsh

Oh My Zsh is an open source, framework for managing your Zsh configuration.

It provides Functions, Themes, Plugins, and Tools to make your Shell more powerful.

## Installing Oh My Zsh


### Requirements:

1. wget
  ```BASH
  apt install wget
  ```
2. git
  ```BASH
  apt install git
  ```

### Debian/Ubuntu Linux

Download and run the install script.

```BASH
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
```



```
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
source ~/.zshrc
```

### macOS

```BASH
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```


