# Quick setup of developer's mac

So you have a new mac? Whatever.

### Here are a few notes to help speed up installing some useful tools 


1. Google Chrome
2. Xcode (developer tools) from the app store

	then the command-line tools:
	```
	xcode-select --install
	```

3. Homebrew:

   ``` 
	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	```
4. Git: ```brew install git```


5. Node: ``` brew install node```

	if you have permission issues: ```sudo chown -R $USER:$GROUP ~/.npm ```
	
	Node version management: See Managing Node Version.

5. iTerm (if you want it...but you do) [https://iterm2.com/](https://iterm2.com/)

6. sourcetree [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/)

7. add git highlighting to the terminal:

	instructions: [http://neverstopbuilding.com/gitpro](http://neverstopbuilding.com/gitpro)
	
	short version:
	
	```
	curl -o ~/.git-completion.bash 'https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash'
	```

	```
curl -o ~/.git-prompt.sh "https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh"
	```
	add the following to .bash_profile:
	
	```
	#!/bin/bash
	
	source ~/.git-completion.bash
	source ~/.git-prompt.sh
	
	MAGENTA="\[\033[0;35m\]"
	YELLOW="\[\033[0;33m\]"
	BLUE="\[\033[34m\]"
	LIGHT_GRAY="\[\033[0;37m\]"
	CYAN="\[\033[0;36m\]"
	GREEN="\[\033[0;32m\]"
	GIT_PS1_SHOWDIRTYSTATE=true
	export LS_OPTIONS='--color=auto'
	export CLICOLOR='Yes'
	export LSCOLORS=gxfxbEaEBxxEhEhBaDaCaD
	
	export PS1=$LIGHT_GRAY"\u@\h"'$(
	if [[ $(__git_ps1) =~ \*\)$ ]]
	# a file has been modified but not added
	then echo "'$YELLOW'"$(__git_ps1 " (%s)")
	elif [[ $(__git_ps1) =~ \+\)$ ]]
	# a file has been added, but not commited
	then echo "'$MAGENTA'"$(__git_ps1 " (%s)")
	# the state is clean, changes are commited
	else echo "'$CYAN'"$(__git_ps1 " (%s)")
	fi)'$BLUE" \w"$GREEN": "
	
	alias ll='ls -lah'
	alias gg='git status -s'
	
	```

restart your terminal

