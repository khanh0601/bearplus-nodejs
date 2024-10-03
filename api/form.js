const express = require('express');
const bodyParser = require('body-parser');
const formRoutes = require('../routes/routerForm');
const auth = require('../routes/auth');
const cors = require('cors'); 


const app = express();

const corsOptions = {
    origin: 'https://caskxchange-bp.webflow.io',  // Thay bằng URL của frontend bạn
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
// Middleware để parse body
app.use(bodyParser.json());

// Định tuyến cho form
app.use('/api/forms', formRoutes);
app.use('/api/auth', auth);

module.exports = app;

// const express = require('express');
// const bodyParser = require('body-parser');
// const formRoutes = require('../routes/routerForm');

// const app = express();

// // Middleware để parse body
// app.use(bodyParser.json());

// // Định tuyến cho form
// app.use('/api/forms', formRoutes);

// // Xuất `app` để Vercel sử dụng như một serverless function
// module.exports = app;
