const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern:'cypress/integration/*.js',
    baseUrl:'http://mimir.usersys.redhat.com/',
   //"includeShadowDom": true,
    "reporter":"mochawesome",
    						"reporterOptions":{
     						 "charts":true,
      						 "overwrite":false,
      						 "html":false,
     						 "json":true,
     						 "reportDir":"cypress/reports"
   								 },
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
