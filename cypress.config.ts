import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/**/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
  },
});
