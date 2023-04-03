const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  experimentalSessionSupport: false,
  chromeWebSecurity: false,
  

  env: {
    TAGS: "not @ignore",
    email: "tinalajqi1@gmail.com",
    password: "test123",
  },

  retries: {
    runMode: 2,
    openMode: 0,
  },

  
    e2e: {
      baseUrl: 'https://theme-dawn-demo.myshopify.com/',
      experimentalRunAllSpecs: true,
      setupNodeEvents(on, config) {
        allureWriter(on, config);
        return config;
    },

  }
  });
