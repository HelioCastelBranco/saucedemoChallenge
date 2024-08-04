const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({

  e2e: {
    "specPattern": "**/*.feature",
    chromeWebSecurity: false,
    testIsolation: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: true
})