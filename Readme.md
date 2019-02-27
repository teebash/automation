# Automation Test

JS based framework

### Tech
This framework uses the below tech/libraries to write our automated tests.
* [Protractor](https://www.protractortest.org/#/) - end-to-end test framework for Angular and AngularJS applications
* [Protractor with typsescript](https://github.com/angular/protractor/tree/5.4.1/exampleTypescript) - Typescript provides code auto completion and helpful hints with a text editor like Microsoft's Visual Studio Code or another text editor with Typescript support.
* [protractor cucumber](https://github.com/protractor-cucumber-framework/protractor-cucumber-framework) - Cucumber implementation for javascript for writing our scenarios using gherkin syntax
* [Chai](http://chaijs.com/api/bdd/) - Assertion library for verifying the results of our tests

### Installation only once locally
Make sure you have Node.js installed on your machine. After cloning the project, install all dependencies by running the below via the terminal:

```sh
$ npm install
```
Make sure you have protractor installed by running the following in the terminal:

```sh
$ npm install -g protractor
```
For windows user, ensure you have java installed (https://www.java.com/en/)

Make sure you have typescript installed by running the following in the terminal:

```sh
$ npm instal -g typescript
```

Make sure you have a few from the list installed (The top 3 are important) via Market place extentions within your VS Code:
1. Cucumber (Gherkin) Full Support
2. npm commands for VS Code
3. GitLens -- Git Supercharged
4. Git History
5. VSCode-icons

This is relevant for binding the feature file to the step definition.

### Running tests
There are two ways you can run the tests:
1. Use the below script to run the all the specs on your local (remember you have root directory):
    This has been configured inside the package.json file as a script.

```sh
  npm run wm-update
  npm run test
``` 

