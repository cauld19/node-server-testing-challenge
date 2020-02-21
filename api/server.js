const express = require('express');

const bodyParser = require('body-parser')

const apiRouter = require('./api-router');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/api', apiRouter);

module.exports = server