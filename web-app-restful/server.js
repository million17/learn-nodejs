const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let routes = require('./src/routes')
routes(app)

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + 'not found'})
})

app.listen(port, () => {
    console.log(`Server started : ${port}`);
});

app.get('/', (req,res) => {
    res.send('Hello Express');
});
