---
path: /blog/writing-history
title: Writing history
date: "2020-02-02"
description: Keep track of the changes in your code using Git
---

When you work on a team or on a public library, one common problem is keeping track of the changes made to the project.

When using modern Source Control Manager like Git, the changes are tracked via commits and their messages.

# Commit conventions

Commit message conventions allow your team to add more meaning to your git history.

When setting up a convention remember to always present it to the team and to adapt it to the needs of your project.


# Setup a commit template

The first step you might take is setting up a commit template. It will guide the developers thru describing the changes they introduced.

```shell
git config commit.template FILE_PATH
```

where FILE_PATH is the path of the template file.

If you want to explore more options read the official doc at :
https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration

You can find an exemple based on [conventionalcommits.org](https://www.conventionalcommits.org) in this [gist](https://gist.github.com/adeekshith/cd4c95a064977cdc6c50). 

If you want to enforce the use of this template, you can use a ['prepare-commit-msg' git hook](https://git-scm.com/docs/githooks#_prepare_commit_msg).
My recommendation is to use [husky](https://github.com/typicode/husky) and a script like [commit-template](https://github.com/lennym/commit-template) to achieve that.

# Git commit message linter

- monorepo (repo multi packages) : https://github.com/atlassian/cz-lerna-changelog

Outils :

-

- Git commit message linter : commitlint
- Git commit message CLI : commitizen

pull/merge request strategy/method :

- https://blog.developer.atlassian.com/pull-request-merge-strategies-the-great-debate/
- https://bitbucket.org/blog/fast-forward-merges-bitbucket-cloud-default-like
- https://gitlab.com/help/user/project/description_templates.md#setting-a-default-template-for-issues-and-merge-requests

Changelog generation :

- https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli

Versionning :

- https://github.com/conventional-changelog/standard-version
- https://github.com/semantic-release/semantic-release

```jsx
const count = 42;
// ...
<p>You clicked {count} times</p>;
// ...
```
