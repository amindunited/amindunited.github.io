# Installing zsh

zsh is now the [default shell in os X Catalina](https://support.apple.com/en-us/HT208050)). You will only need to install it if you have an older OS version, or have upgraded.


## Install
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

### Migrating from Bash
If you are coming changing over from bash, you should make sure that your paths from bash are available in zsh.

in your zshrc (~/zshrc):
```VIM

# PATH
export PATH=$HOME/bin:/usr/local/bin:$PATH

# JAVA
export JAVA_HOME=$(/usr/libexec/java_home)

# Python
export PATH=~/Library/Python/3.6/bin:$PATH

# RVM (Ruby version Manager)
# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"
```
