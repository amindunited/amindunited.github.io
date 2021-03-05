# Git Hooks and Project Automation

Automating tasks with Githooks.

There is a fair amount setup and configuration, both the 'quick setup', and the 'detailed walkthrough' documentation include scripts to speed things up.

## Table of Contents

1. [Why?](#why-use-git-hooks)
2. [Quick Setup Guide ↗️](./quick-setup.md).
3. [Detailed Guide ↗️](./detailed-walkthrough.md).


## Why use Git Hooks ?

Git hooks can be used to automate repetitive tasks, and assist in creating consistency.
For example git hooks can be used for:
- Code Linting
- Code Formatting
- Test Coverage Assurance
- Commit Message Linting
- versioning
- changelog updates
- updating contributor lists

**BUT**

When enforcing things like lint rules (for code or for commit messages) it can become very frustrating, especially on a new project, to find the correct format. This is often a trial and error process, or requires very detailed documentation.

There are tools that can be used to provide auto-formators, or interfaces that will assist with adhering to, contributing to, and maintaining these rules.


Two of those tools that are noteworthy (*at the time of writting), are:

- Commitizen, which provides an iterface for creating formatted Commit messages.
  - This makes it much easier to adhere to the Commit Message Linting rules, as the contributing developer does not need to know what the linting rules are.
- Prettier, which can be used to format the code in accordance to the configured linting rules
  - This allows the developer to work without spending too much time conforming to the linting rules, as they will be automatically applied on commit.

