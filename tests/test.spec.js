const { addRequest } = require('./application-service.js');

let response;

/**
 * The test does the following:
 * Triggers an async request to the server with two numbers as data (1 and 2)
 * then waits for the server to process the request
 * after that, we should receive a response
 * then we make sure that we assert the result
 */
describe('Requesting the server to add two numbers', () => {
  beforeAll(async () => {
    response = await addRequest(1, 2);
  });

  it('Should respond with the correct addition result', () => {
    expect(response.data.additionResult).toEqual(3);
  });
});