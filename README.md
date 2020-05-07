<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

# Romain Lebascle

> Resume, portofolio and blog

Website presenting my experience and realisations aswell as my technical writings.

[![Netlify Status](https://api.netlify.com/api/v1/badges/99800f3e-5fb3-42cf-8e01-3da152843bcb/deploy-status)](https://app.netlify.com/sites/stoic-austin-186a1f/deploys)

[![dependencies Status](https://david-dm.org/RoNoMaD/gatsby-cv/status.svg)](https://david-dm.org/RoNoMaD/gatsby-cv)

[![CircleCI](https://circleci.com/gh/RoNoMaD/gatsby-cv.svg?style=svg)](https://circleci.com/gh/RoNoMaD/gatsby-cv)

## Developing

### Built With

We list here the main js dependencies.

#### Front (UI) dependencies

- [Gatsby](https://www.gatsbyjs.org/) : A free and open source framework based on React that helps developers build blazing fast SSG websites.
- [Preact](https://preactjs.com/) : Fast 3kB alternative to React with the same modern API.
- [linaria](https://linaria.now.sh/) : Zero-Runtime CSS in JS
- [Netlify CMS](https://www.netlifycms.org/) : Open source content management for your Git workflow

#### Formatting/Linting/Testing dev dependencies

- [Prettier](https://prettier.io/) : An opinionated code formatter.
- [ESLint](https://eslint.org/) : A pluggable linting utility for JavaScript and JSX.
- [Stylelint](https://stylelint.io/) : A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- [Jest](https://jestjs.io/) : is a delightful JavaScript Testing Framework with a focus on simplicity.
- [testing-library](https://testing-library.com/) : Simple and complete testing utilities that encourage good testing practices

### Prerequisites

Install the following tools :

- [Git](https://git-scm.com/downloads) : A distributed version control system.

- [NodeJS](https://nodejs.org/en/download/) : a JavaScript runtime built on Chrome's V8 JavaScript engine. It includes [npm](https://www.npmjs.com/) as a package manager for JavaScript.

- [Yarn]() :

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone git@github.com:RoNoMaD/gatsby-cv.git
cd gatsby-cv/
yarn install
yarn start
```

### Building

```shell
yarn build
```

## Tests

As this website is mainly static, we are not doing so much tests.

The only thing we really test is the Contact form as it implies user interactions, front and back end validations.

Run the following command to run the tests :

```shell
yarn test
```

## CI

[CircleCI Dashboard](https://app.circleci.com/pipelines/github/RoNoMaD/gatsby-cv)

CI is running the following steps on every PR :

- check formatting (via Prettier)
- linting (via ESLint and Stylelint)
- run unit and integration tests (via Jest and testing-library)
- run performance audit (via Lighthouse CI)

## 💫 Deploy

Everything merged on master branch on Github is automatically deployed on [Netlify](https://app.netlify.com/sites/stoic-austin-186a1f/overview).
