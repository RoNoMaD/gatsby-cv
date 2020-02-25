---
path: /blog/writing-history
title: Writing history
date: '2020-02-02'
description: Keep track of the changes in your code using Git
---
When you work on a team or on a public library, one common problem is keeping track of the changes made to the project. 

When using modern Source Control Manager like Git, the changes are tracked via commits and their messages. 

So the first step is setting up a commit template to guide the developers thru describing the changes they introduced.

Setup a commit template 

```shell
git config commit.template PATH
```

Source : <https://github.com/aaossa/git-gud/wiki/Setup-a-commit-template>

Convention de format : 

* https://www.conventionalcommits.org
* monorepo (repo multi packages) : https://github.com/atlassian/cz-lerna-changelog

Outils :

* Git commit template: https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration
* Git commit message linter : commitlint
* Git commit message CLI : commitizen

pull/merge request strategy/method : 

* https://blog.developer.atlassian.com/pull-request-merge-strategies-the-great-debate/
* https://bitbucket.org/blog/fast-forward-merges-bitbucket-cloud-default-like
* https://gitlab.com/help/user/project/description_templates.md#setting-a-default-template-for-issues-and-merge-requests

Changelog generation :

* https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli

Versionning :

* https://github.com/conventional-changelog/standard-version
* https://github.com/semantic-release/semantic-release

```jsx
const count = 42;
// ...
<p>You clicked {count} times</p>;
// ...
```
