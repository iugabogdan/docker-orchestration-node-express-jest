const { argv } = require('yargs');

/**
 * We're using yargs argv to load the stage from CLI and then we're setting it as a environment variable
 */
switch (argv.stage) {
  case 'local':
    process.env.STAGE = 'local';
    break;
  case 'docker':
    process.env.STAGE = 'docker';
    break;
  default:
    process.env.STAGE = 'local';
}

module.exports = async () => {
};
