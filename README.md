# es6-boilerplate
A boilerplate for writing ES6+ apps for the browser, today.

## Installation
[JSPM](http://jspm.io/) is a modern package manager built on top of [SystemJS](https://github.com/systemjs/systemjs), with the browser in mind. Packages can be installed from Github or NPM, and ES6 packages are transpiled to ES5 with [Babel](https://babeljs.io). Packages installed via JSPM can be imported into the app code using the [ES6 import statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import). To get started, install some development dependencies, as well as a handful of useful browser packages (including [React](https://facebook.github.io/react/), for example):

```
$ npm install -g jspm broccoli-cli
$ npm install
$ jspm install
```

## Configuration
Configuration files live in the `configs` directory. Currently, there are configs for [SystemJS](https://github.com/systemjs/systemjs), [ESLint](eslint.org), and [BrowserSync](www.browsersync.io). See the documentation for each of those for specifics on configuration options. Note: BrowserSync is currently disabled by default.

## Development
[Broccoli](http://broccolijs.com/) provides a very fast asset pipeline, with incremental builds. When developing, start the Broccoli server: 

```
$ broccoli serve
```

Broccoli will watch your source files for changes, and intelligently rebuild only the necessary parts. By default, the server can be accessed at port 4200 of your localhost.
