const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Get data
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});

app.get('/api/wizard', (req, res) => {
  connection.query('SELECT * from wizard', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

