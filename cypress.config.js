
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  defaultCommandTimeout: 6000,
  env: {
    url: "https://api.github.com/repositories/132619461",
    seatCarConfigUrl: "https://configurador.seat.es/seat-cc/configurator/LIVE/003/DEFAULT/es/car-selector"
  },
  
  retries: {
    runMode: 1,

  },
  projectId: "b8bn4b",

  e2e: {
    specPattern: 'cypress/integration/test/*.js',
  },
});

//messages -> json file ->html