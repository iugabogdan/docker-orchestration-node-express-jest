const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 3000;

app.post('/add', (req, res) => {
    const result = addition(req.body.a, req.body.b);

    res.send({
        additionResult: result,
    })
})

function addition(a, b) {
    return a + b;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})