const express = require('express');

const projectRouter = require('../project/projectRouter.js');
const actionRouter = require('../action/actionRouter.js');

const configureMiddleware = require('../config/middleware.js');

const server = express();


configureMiddleware(server);

server.use('/api/project', projectRouter); 

server.use('api/action', actionRouter);  //routes for all posts URL

module.exports = server;