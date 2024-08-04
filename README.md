# Saucedemo
## README
Automation structure

### Frameworks:
- Node.js, Cucumber and Cypress.
  
### Frameworks:
- Node.js

## Environment Configuration ##
## Installation ##
```sh
 npm install
```
- To install Cypress:
```sh
 npm cypress install
```
#### Project Structure:
-Gherkin features (Cucumber) "cypress/e2e"
-Steps definitions and Page Objects "cypress/e2e/steps"
-Test Videos will be save on "cypress/videos"
-cucumber-html-report will be in "report" directory
-Logs and methods are configured to appear on console during the execution.

#### Reports:

**Cucumber-html-report**
-Directory "report"
-It is necessary execute "npm run cypress:report" to see details.

#### To run the automation tests:

```sh
npx cypress run
```

or by script
```sh
npm run cypress:run
```
**To execute all features on Chrome Browser:**

```sh
npx cypress run --browser chrome
```
_____________________________________________
**Version:** 1.0 <br>
**Created:** 2024-08-04

E-mail: helio-white@hotmail.com 
Hélio Castel-Branco
