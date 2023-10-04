const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // env:{
    
  // },
  e2e: {
    baseUrl : "https://www.facebook.com/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/',
  },
});
