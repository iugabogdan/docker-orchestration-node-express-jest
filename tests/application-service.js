const {
  postRequest,
} = require('./request');

/* We're loading the config based on the stage we want to run the test */
const config = require('./environment');

const APPLICATION_URL = config.application.url;
const ADD_PATH = '/add';

const headers = {
  'Content-Type': 'application/json',
};

/**
 * Triggers a bassic async post request to our application server, 
 * the params are the numbers you want to add.
 *
 * @param {Integer} a_ - the first number
 * @param {Integer} b_ - the second number
 *
 * @returns {Object} The response of the request
 */
async function addRequest(a_, b_) {
  const data = {
    a: a_,
    b: b_,
  };
  const response = await postRequest(`${APPLICATION_URL + ADD_PATH}`, headers, data);
  return response;
}

module.exports = {
  addRequest,
};
