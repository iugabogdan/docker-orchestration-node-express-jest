const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const port = 3000;

/**
 * Our server is pretty dummy, he only knows to add two numbers
 * But for demo purpose, it is enough.
 * Our route is /add, and it expects to receive two numbers(a and b) in the body
 */
app.post('/add', (req, res) => {
  const result = addition(req.body.a, req.body.b);

  res.send({
    additionResult: result,
  });
});

function addition(a, b) {
  return a + b;
}

/**
 * Our server will listen for requests on port 3000
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
