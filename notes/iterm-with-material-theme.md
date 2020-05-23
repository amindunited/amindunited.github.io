<link rel="stylesheet" href="/main.css"/>

# iterm, with zsh and Material Theme

June 11, 2019

### 1. install iTerm2: [https://www.iterm2.com/

### 2. install oh-my-zsh:

```Shell 
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### 3. copy over exports from .bash_profile


For example:

NVM:

```VIM
export NVM_DIR="/Users/robin/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
source ~/.nvm/nvm.sh

JAVA

export JAVA_HOME=$(/usr/libexec/java_home)

Python
export PATH=~/Library/Python/3.6/bin:$PATH
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```

then set the theme:
```VIM
# ZSH_THEME="robbyrussell"
ZSH_THEME="agnoster"
```

### 4. Now we need the [powerline fonts]('https://github.com/powerline/fonts')

```Shell
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```

go to iTerm ->preferences->profile->text set font to 12pt noto mono for powerline (or any powerline font)


### 5. finally need the iTerm colours:

ref: [https://github.com/MartinSeeler/iterm2-material-design]([https://github.com/MartinSeeler/iterm2-material-design])

 - download the file material-design-colors.itermcolors

 - iTerm2 > Preferences > Profiles > Colors Tab

 - Click Color Presets...

 - Click Import...

 - Select the material-design-colors.itermcolors file

 - Select the material-design-colors from Load Presets...


## Automagically use .nvmrc to load node version when changing directories

```
# Automatically switch node versions when a directory has a `.nvmrc` file
autoload -U add-zsh-hook
# Zsh hook function
load-nvmrc() {
    local node_version="$(nvm version)" # Current node version
    local nvmrc_path="$(nvm_find_nvmrc)" # Path to the .nvmrc file
    # Check if there exists a .nvmrc file
    if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")
    # Check if the node version in .nvmrc is installed on the computer
    if [ "$nvmrc_node_version" = "N/A" ]; then
        # Install the node version in .nvmrc on the computer and switch to that node version
        nvm install
    # Check if the current node version matches the version in .nvmrc
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
        # Switch node versions
        nvm use
    fi
    # If there isn't an .nvmrc make sure to set the current node version to the default node version
    elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
    fi
}
# Add the above function when the present working directory (pwd) changes
add-zsh-hook chpwd load-nvmrc
load-nvmrc

```

### Other plugins:

[awesome zsh plugins]('https://github.com/unixorn/awesome-zsh-plugins#plugins')





### References:

[https://medium.com/ayuth/iterm2-zsh-oh-my-zsh-the-most-power-full-of-terminal-on-macos-bdb2823fb04c](https://medium.com/ayuth/iterm2-zsh-oh-my-zsh-the-most-power-full-of-terminal-on-macos-bdb2823fb04c)









 