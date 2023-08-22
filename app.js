const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.locals.pluralize = require('pluralize');


module.exports = app;