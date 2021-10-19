# Signing commits

In order to sign commits you will need [GPG keys setup](./gpg.md).


Setup the signing key in your git config
```BASH
# Global Config
git config --global user.signingkey ****************
# Local
git config user.signingkey ****************
```

Now in global `~/.gitconfig` or local `./git/config`

should now have a section that looks like:  

```BASH
# ...
[user]
	name = Your Name
	email = yourname@email.com
  # the signing key should be the identifier
  signingkey = ****************
[commit]
	gpgsign = true
# ...
```

To configure your Git client to sign commits by default for a local repository, run either
```BASH
# Global Config
git config --global commit.gpgsign true
# Local
git config commit.gpgsign true
```

OR

When committing changes in your local branch, add the `-S` flag to the git commit command:
```BASH
git commit -S -m your commit message
```

## Troubleshooting

If the commits are not being signed:

[ ] - Are gpgtools [installed](./gpg.md)?

[ ] - Has the signing key been added?

[ ] - Does the git config have the correct username and email for this repo?

[ ] - Is the local `./.gitconfig` overriding the global?

[  ] - Is the git client or the shell looking in the wrong place for GPG?
  ```
  git config --global gpg.program gpg2
  ```
  ```
  ln -s /usr/local/bin/gpg /usr/local/bin/gpg2
  ```


