const axios = require('axios').default;

/**
 * Basic Error handler for Axios
 *
 * @param {String} error - the error catched
 *
 */
function handleError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(`Status ${error.response.status}`);
    console.log(`Headers${error.response.headers}`);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
}

/**
 * Axios async function that helps us to trigger a basic post request to our server
 *
 * @param {String} url- the first number
 * @param {Object} headers - the headers you wish to send
 * @param {Object} data - the body of your request
 *
 * @returns {Object} The response of the request
 */
async function postRequest(url, headers, data) {
  return axios({
    method: 'post',
    url,
    headers,
    data,
  }).catch((error) => {
    handleError(error);
  });
}

// We can define the other methods(get, put, delete) here..
module.exports = {
  postRequest,
};
