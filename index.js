const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');

// Get data

app.get('/api/harry', (req, res) => {
    connection.query('SELECT * from harry', (err, results) => {
    });
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
  });