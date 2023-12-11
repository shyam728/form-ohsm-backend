const express = require('express');
const db = require('./config/mongoose');
const port = 3000;
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Assuming 'routers' is a directory containing index.js
app.use('/property', require('./routers/property'));
app.use('/inventory', require('./routers/Inventory'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
