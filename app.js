const express = require('express');
const app = express();
const recensioniRouter = require('./api/routes/recensioni');

app.use('/recensioni', recensioniRouter);

module.exports = app;
//test