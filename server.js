// importing required modules
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//middleware
app.use(bodyParser.json());

//defining and starting server code
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });