# SSH

Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.

The SSH protocol uses encryption to secure the connection between a client and a server. All user authentication, commands, output, and file transfers are encrypted to protect against attacks in the network. For details of how the SSH protocol works, see the protocol page. To understand the SSH File Transfer Protocol, see the SFTP page.


## TLDR;

🗝 &nbsp; 🔑 &nbsp; 🔐


ssh keys are a way to secure, or authenticate your account for remote login.

You will use ssh keys to securely login, create, or modify code, account settings, and more using external sites and service providers.

## SSH Keys

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

![Paste SSH key](../assets/images/ssh-key-paste.png)

