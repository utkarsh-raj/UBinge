const express = require('express');

const stream = express();

stream.get('/test', require('./src/streamingService'));

module.exports = stream;
