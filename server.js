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
  
  app.get('/api/songs/:id', (req, res) => {
    const song = songsData.find(song => song.songId === parseInt(req.params.id));
    if (song) {
      res.json(song);
    } else {
      res.status(404).send('Song not found');
    }
  });
  
  app.get('/api/songs/artist/:name', (req, res) => {
    const artistSongs = songsData.filter(song => song.artistData.name.toLowerCase() === req.params.name.toLowerCase());
    if (artistSongs.length > 0) {
      res.json(artistSongs);
    } else {
      res.status(404).send('No songs found for this artist');
    }
  });
  

//defining and starting server code
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });