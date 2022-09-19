/**
 * The jest config is the entrypoint of our tests, in here we load 
 * the global config and we specify some other options.
 */
module.exports = {
  globalSetup: './global-setup.config.js',
  testMatch: ['**/*.spec.js'],
  testEnvironment: 'node',
  verbose: true,
};
