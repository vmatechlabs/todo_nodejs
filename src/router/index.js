const express = require('express');
const app = express();
const todo = require('./todo.routes');

app.use('/task', todo);

module.exports = app;
