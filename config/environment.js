/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-ipsum-ui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      HOST: "http://localhost:3000"
      // Here you can pass flags/options to your application instance
      // when it is created
    }


    // "ember-cli-content-security-policy": "0.4.0",
  };

  if (environment === 'development') {
    ENV.APP.HOST = "http://localhost:3000"
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.HOST = process.env.OPEN_IPSUM_HOST
  }

  return ENV;
};
