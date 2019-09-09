# GIT commit --amend

## Background

- It is a git command for working with the commitments.

## Purpose

- The git commit --amend command is a way to modify the most recent commit
- It lets you combine staged changes with the previous commit instead of creating a new commit.
- Amending does not just alter the most recent commit, it replaces it entirely, meaning the amended commit will be a new entity with its own reference.

When you type commit --amend the editor opens and you can modify the commit.
Adding the -m option allows you to pass in a new message from the command line without being prompted to open an editor.

Don’t amend public commits!!!!

Amending a commit that is shared with another user will potentially require confusing and lengthy merge conflict resolutions.

# Hoisting

## Purpose

Hoisting is JavaScript's default behavior of moving declarations to the top.

Only functions and variable declarations (var) are hoisted.

Variable and function declarations are not physically moved to the top of your code. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

# Return Statement

## Purpose

- The return statement ends function execution and specifies a value to be returned to the function caller.
