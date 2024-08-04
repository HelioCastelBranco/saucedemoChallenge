Saucedemo README
Overview
This project utilizes the following frameworks:

Node.js
Cucumber
Cypress
Environment Configuration
Installation
Install Dependencies:

bash
Copiar código
npm install
Install Cypress:

bash
Copiar código
npm cypress install
Project Structure
Gherkin Features (Cucumber):
Directory: cypress/e2e
Step Definitions and Page Objects:
Directory: cypress/e2e/steps
Test Videos:
Directory: cypress/videos
Cucumber HTML Reports:
Directory: report
Logs
Logs and methods are configured to appear on the console during execution.
Reports
To generate and view reports:

bash
Copiar código
npm run cypress:report
Running Automation Tests
To run all tests:

bash
Copiar código
npx cypress run
or using a script:

bash
Copiar código
npm run cypress:run
To run all tests on Chrome Browser:

bash
Copiar código
npx cypress run --browser chrome
Version
Version: 1.0
Created: 2024-04-24
Contact
Email: helio-white@hotmail.com
Author: Hélio Castel-Branco
