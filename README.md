<img src="./images/logo.sample.png" alt="Romain Lebascle Logo" align="right">

# Romain Lebascle &middot; [![CircleCI](https://circleci.com/gh/RoNoMaD/gatsby-cv.svg?style=svg)](https://circleci.com/gh/RoNoMaD/gatsby-cv) [![Netlify Status](https://api.netlify.com/api/v1/badges/99800f3e-5fb3-42cf-8e01-3da152843bcb/deploy-status)](https://app.netlify.com/sites/stoic-austin-186a1f/deploys) [![dependencies Status](https://david-dm.org/RoNoMaD/gatsby-cv/status.svg)](https://david-dm.org/RoNoMaD/gatsby-cv) [![Known Vulnerabilities](https://snyk.io/test/github/RoNoMaD/gatsby-cv/badge.svg)](https://snyk.io/test/github/RoNoMaD/gatsby-cv) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

> Romain Lebascle resume and blog

Website presenting my experience and realisations aswell as my technical writings.

## Developing

### Built With

List main libraries, frameworks used

- [Gatsby](https://www.gatsbyjs.com/) : build incredible websites using a React-based framework and innovative data layer that makes integrating different CMS's, APIs, and services into one web experience incredibly easy.
- [NetlifyCMS](https://www.netlifycms.org/) : Open source content management for your Git workflow
- [Preact](https://preactjs.com/) : Fast 3kB alternative to React with the same modern API
- [Linaria](https://linaria.dev/) : Zero-runtime CSS in JS library

#### Formatting/Linting/Testing dev dependencies

- [Prettier](https://prettier.io/) : An opinionated code formatter.
- [ESLint](https://eslint.org/) : A pluggable linting utility for JavaScript and JSX.
- [stylelint](https://stylelint.io/) : A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- [Jest](https://jestjs.io/) : is a delightful JavaScript Testing Framework with a focus on simplicity.
- [testing-library](https://testing-library.com/) : Simple and complete testing utilities that encourage good testing practices

### Prerequisites

Install the following tools :

- [Git](https://git-scm.com/downloads) : A distributed version control system.

- [NodeJS](https://nodejs.org/en/download/) : a JavaScript runtime built on Chrome's V8 JavaScript engine. It includes [npm](https://www.npmjs.com/) as a package manager for JavaScript.

- [Yarn v1](https://classic.yarnpkg.com/lang/en/) : a package manager for JavaScript.

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/RoNoMaD/gatsby-cv.git
cd gatsby-cv/
yarn install
yarn develop
```

- clone the repository from GitHub
- navigate to project folder
- install dependencies
- run the project in developement mode

### Building

```shell
yarn build
```

### 💫 Deploying

Every change push on the main branch to the remote repository will trigger a build and deploy on Netlify.
You can access Netlify dashboard here :
https://app.netlify.com/sites/romainlebascle/overview

### Publishing

To publish new content you can use NetlifyCMS.

## Versioning

We have no versioning system yet.
We can maybe use [SemVer](http://semver.org/) for versioning.

## Configuration

See `.env.example` file

```
# Figma API key and id used to generate design tokens
FIGMA_APIKEY=
FIGMA_ID=
# Google Recaptcha key used for the contact form
SITE_RECAPTCHA_KEY=
```

## Tests

As this website is mainly static, we are not doing so much tests.

The only thing we really test is the Contact form as it implies user interactions, front and back end validations.

Run the following command to run the tests :

```shell
yarn test
```

This will run the unit and integration tests with Jest and react-testing-library.

## Style guide

We enforce standard formatting using Prettier. It is automatically run before every commit via a githook (Husky/lint staged).
You can also run it via command line :

```shell
yarn prettier
```

## CMS

We use Netlify CMS, a Git based headless CMS.
It provide an interface to edit markdown files, commit them to the git repository and trigger and new build.

## CI

[CircleCI Dashboard](https://app.circleci.com/pipelines/github/RoNoMaD/gatsby-cv)

CI is running the following steps on every PR :

- check formatting (via Prettier)
- linting (via ESLint and Stylelint)
- run unit and integration tests (via Jest and testing-library)
- run performance audit (via Lighthouse CI)

## Licensing

MIT
