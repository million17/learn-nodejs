const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server started : ${port}`);
});

app.get('/', (req,res) => {
    res.send('Hello Express');
});
