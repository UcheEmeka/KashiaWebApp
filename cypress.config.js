const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://stage.mzuri.ng",
    setupNodeEvents
  },
  retries: 1,
  
  watchForFileChanges: false,
});
