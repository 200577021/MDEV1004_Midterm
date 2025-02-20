// importing required modules
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs')
const path = require('path')
const app = express();

//middleware
app.use(bodyParser.json());

//songsData have data's from json file
const songsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'songs.json')));

// defining API routes
app.get('/api/songs', (req, res) => {
    res.json(songsData);
  });
  
//defining and starting server code
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });