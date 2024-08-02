const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bfhlRoutes = require('./routes/bfhl');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/bfhl', bfhlRoutes);

module.exports = app;
