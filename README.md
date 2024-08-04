Saucedemo
README
Automation structure

Frameworks:
Node.js, Cucumber and Cypress.
Frameworks:
Node.js
Environment Configuration
Installation
 npm install
To install Cypress:
 npm cypress install
Project Structure:
Gherkin features (Cucumber) "cypress/e2e"
Steps definitions and Page Objects "cypress/e2e/steps"
Test Videos will be save on "cypress/videos"
cucumber-html-report will be in "report" directory
Logs and methods are configured to appear on console during the execution.
Reports:

Directory "report"
It is necessary execute "npm run cypress:report" to see details.
To run the automation tests:

npx cypress run

or by script

npm run cypress:run
To execute all features on Chrome Browser:

npx cypress run --browser chrome

Version: 1.0
Created: 2024-04-24

E-mail: helio-white@hotmail.com 
Hélio Castel-Branco
