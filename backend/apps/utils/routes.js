const express = require('express');

const utils = express();

utils.get('/health', require('./src/health'));

module.exports = utils;