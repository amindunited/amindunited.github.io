# Setting up Ruby on macOs

## System Ruby

macOx / os x ship with a version of Ruby, but that version is called system Ruby.

It is located in ```/usr/bin/ruby```.

If you run ```which ruby``` and see ```/usr/bin/ruby``` then you are still using 'System Ruby'.

This will cause the issues like:

```
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory.
```

If you need to use ```sudo``` to run or install a gem, then you are likely using 'System Ruby'. You do not want to do that.

## Ruby Version Manager (RVM)

Ruby Version Manager, often abbreviated as RVM, is a software platform for unix-like operating systems designed to manage multiple installations of Ruby on the same device.

RVM can be used to change between the 'System Ruby' and any other Ruby Versions.
## Installation


### GPG

In order to install RVM we'll need [gpg](https://gnupg.org/), which is the key manager that RVM uses.

```brew install gnupg```

Once GPG is installed, use it to get the the keys as described on the RVM website:

[Installing gpg keys](https://rvm.io/rvm/install#install-gpg-keys)


### RVM

```
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```

If this command gives you trouble, check for changes on the [RVM Website](https://rvm.io/rvm/install#any-other-system)

To start RVM
```
source /Users/robin/.rvm/scripts/rvm
```

To confirm that RVM is managing your Ruby versions:
```
which ruby
```
Should output
```
/Users/your-name/.rvm/rubies/ruby-2.7.0/bin/ruby
```

## Using RVM

 - List installed versions ```rvm list```
 - Change to another version ```rvm use```
 - To list the gems that are installed in the current Ruby version ```gem env```

