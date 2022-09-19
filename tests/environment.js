/* Dynamic require based on the environment variable STAGE that was initialized in our global setup */
const config = require(`./environment/${process.env.STAGE}.js`);

module.exports = config;
