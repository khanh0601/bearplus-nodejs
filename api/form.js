const express = require('express');
const bodyParser = require('body-parser');
const formRoutes = require('../routes/routerForm');
const serverless = require('serverless-http');  // Thêm serverless-http để chuyển Express thành serverless

const app = express();

// Middleware để parse body
app.use(bodyParser.json());

// Định tuyến cho form
app.use('/api/forms', formRoutes);

// Export ra serverless function
module.exports.handler = serverless(app);
