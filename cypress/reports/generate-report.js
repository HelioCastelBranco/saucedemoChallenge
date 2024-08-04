const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumber-json', // Path to the JSON files
  reportPath: 'cypress/reports', // Path where the report should be saved
  metadata: {
    browser: {
      name: 'chrome',
      version: '89'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  }
});