const express = require('express');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/routerForm');

const app = express();
const port = 3000;

// Middleware để parse body
app.use(bodyParser.json());

// Định tuyến cho form
app.use('/api/forms', formRoutes);
app.use('/api/auth', auth);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
