const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const recensioniRouter = require('./api/routes/recensioni');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
})

app.use('/recensioni', recensioniRouter);

module.exports = app;
