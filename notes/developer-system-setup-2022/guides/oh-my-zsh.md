# Oh My Zsh

Oh My Zsh is an open source, framework for managing your Zsh configuration.

It provides Functions, Themes, Plugins, and Tools to make your Shell more powerful.

## Installing Oh My Zsh


### macOS

```BASH
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```


### Debian/Ubuntu Linux

1. Make sue wget is installed: 
  ```BASH
  apt install wget
  ```

2. Download and run the install script.

```BASH
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
```


3. copy the template zshrc

```BASH
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
source ~/.zshrc
```

4. copy over exports from .bash_profile


For example:
```BASH
# JAVA
export JAVA_HOME=$(/usr/libexec/java_home)
```

