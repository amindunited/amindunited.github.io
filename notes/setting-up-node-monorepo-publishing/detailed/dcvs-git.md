# Git and Distributed Version Control

Git is a distributed version-control system for tracking changes in source code during software development.

Git is the de facto tool for tracking changes, hosting and sharing code. It will save you when you break you code, or need to find out what it was that you, or someone else did to the code.

## A Short History of Git 

* Taken from [The Git Book](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git)

As with many great things in life, Git began with a bit of creative destruction and fiery controversy.

The Linux kernel is an open source software project of fairly large scope. During the early years of the Linux kernel maintenance (1991–2002), changes to the software were passed around as patches and archived files. In 2002, the Linux kernel project began using a proprietary DVCS called BitKeeper.

In 2005, the relationship between the community that developed the Linux kernel and the commercial company that developed BitKeeper broke down, and the tool’s free-of-charge status was revoked. This prompted the Linux development community (and in particular Linus Torvalds, the creator of Linux) to develop their own tool based on some of the lessons they learned while using BitKeeper. Some of the goals of the new system were as follows:

Speed

Simple design

Strong support for non-linear development (thousands of parallel branches)

Fully distributed

Able to handle large projects like the Linux kernel efficiently (speed and data size)

Since its birth in 2005, Git has evolved and matured to be easy to use and yet retain these initial qualities. It’s amazingly fast, it’s very efficient with large projects, and it has an incredible branching system for non-linear development

## Installing Git

  ### MacOs (Brew) 
  ```
  brew install git
  ```

  ### MacOs

  It's probably best that you install the `Xcode Command Line Tools`, Git is installed as part of them.
  
  You can use the quick script [here](./scripted/xcode-install.md) 
  
  ** its just
  
  ```
  xcode-select --install
  ```
  
  or read the Details [here](./detailed/xcode.md), (quick script here).

  There is also as installer, [here](https://git-scm.com/download/mac), but you really should just install the [Xcode Command Line Tools](./detailed/xcode.md).

  ### Debian Linux

  If you’re on a Debian-based distribution, such as Ubuntu, try apt:

  ```$ sudo apt install git-all```
  



  ## Git LFS
  
  Some repos use git LFS (Large File Storage) to help manage the repo size when dealing with Big files like images.
  
  ```brew install git-lfs```

  ```git install lfs```
  
  
  ## Git Tools

  - GUIs

    - [Sourcetree](https://www.sourcetreeapp.com/)
    - [Github Desktop](https://desktop.github.com/)





