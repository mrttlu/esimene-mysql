// Import express and put it into express constant
const express = require('express');
// Create express object and put it into app constant
const app = express();

// Import logger middleware
const logger = require('./api/middlewares/logger');
// Import routes
const routes = require('./api/routes/routes');
// Middleware required for receiving body from request object as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(routes);

module.exports = app;
