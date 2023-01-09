const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://stage.mzuri.ng",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: 1,
  watchForFileChanges: false,
});
