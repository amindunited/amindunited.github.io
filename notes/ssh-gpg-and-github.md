# SSH GPG and Github

## SSH

Taken from [Developer System Setup](https://amindunited.github.io/notes/developer-system-setup/#ssh-keys)

Generate ssh key:

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


** You can add `-f "filename"` to set the output filename
```
ssh-keygen -t rsa -C "email@work_mail.com" -f "id_rsa_work_user1"
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

![Paste SSH key](notes/2021.10-developer-system-setup/assets/ssh/github-add-ssh-key.png)

## Git Hosting account

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


## Multiple accounts


  If you have multiple github accounts (maybe a personal and a work account). You may need multiple ssh keys.

  1) Create a new ssh key and set the filename
  2) upload the pub to the github account

  ### 3) with config
  You can create an `~/.ssh/config`

  ```
	Host github.com
	  HostName github.com
	  User git
	  IdentityFile ~/.ssh/id_rsa


  Host github-COMPANY
	  HostName github.com
	  User git
	  IdentityFile ~/.ssh/id_rsa_COMPANY
  ```

Now when you checkout, or set the remote for a COMPANY repo adding `-COMPANY` to the github url will use the id_rsa_COMPANY key
```
git remote add origin git@github-COMPANY:Company/testing.git
```

or *maybe*:
```
git remote set-url origin git@github-COMPANY:Company/testing
```

### 3) As Needed

You could also add or remove keys as needed:

```
ssh-add -D            //removes all ssh entries from the ssh-agent
ssh-add ~/.ssh/id_rsa                 // Adds the relevant ssh key
```


If doing the 'as needed' a hook could be set up in the shell to toggle the keys for you:

```


```

4) Either way you'll need to make sure that each git repo that you have checked out has the correct user config:

```
git config user.name "User 1"   // Updates git config user name
git config user.email "user1@workMail.com"
```


## GPG Key

Get the GPG command line tools for your system (macOs should already have it...I think)

```
https://www.gnupg.org/download/

```

Generate a key

```
gpg --full-generate-key
```

List the keys on your system

```
gpg --list-secret-keys --keyid-format=long
```

From the list of GPG keys, copy the long form of the GPG key ID you'd like to use. In this example, the GPG key ID is 3AA5C34371567BD2:
```
$ gpg --list-secret-keys --keyid-format=long
/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot 
ssb   4096R/42B317FD4BA89E7A 2016-03-10
```

```
Paste the text below, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is 3AA5C34371567BD2:

gpg --armor --export 3AA5C34371567BD2
# Prints the GPG key ID, in ASCII armor format
```

Copy your GPG key, beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`.


Paste that into your github account




## Signing commits

To configure your Git client to sign commits by default for a local repository, run `git config commit.gpgsign true`


When committing changes in your local branch, add the `-S` flag to the git commit command:
```BASH
git commit -S -m your commit message
```




