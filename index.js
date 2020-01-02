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

app.get('/api/wizard/name', (req, res) => {
  connection.query('SELECT name from wizard', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.get('/api/wizard/birthday', (req, res) => {
  connection.query('SELECT birthday from wizard', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.get('/api/wizard/wand', (req, res) => {
  connection.query('SELECT wand_length from wizard', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.get('/api/wizard/ishuman', (req, res) => {
  connection.query('SELECT is_human from wizard', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.get('/api/wizard/wandl', (req, res) => {
  connection.query('SELECT wand_length FROM wizard WHERE wand_length > 11 ORDER BY wand_length ASC ', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.get('/api/wizard/filtername', (req, res) => {
  connection.query('SELECT name FROM wizard WHERE name LIKE "%r" ', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.post('/api/wizard/postname', (req, res) => {
  const formData = req.body
  connection.query('INSERT INTO wizard SET ? ', formData, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.put('/api/wizard/modifyname/:id', (req, res) => {
  const formData = req.body
  const idWizard = req.params.id
  connection.query('UPDATE wizard SET ? WHERE id = ?', [formData, idWizard], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.put('/api/wizard/modifyrace/:id', (req, res) => {
  const idWizard = req.params.id
  connection.query('UPDATE wizard SET is_human = NOT is_human WHERE id = ?', [idWizard], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.delete('/api/wizard/deleteuser/:id', (req, res) => {
  const idWizard = req.params.id
  connection.query('DELETE FROM `wizard` WHERE `id` = ? ', [idWizard], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});

app.delete('/api/wizard/deletefalse', (req, res) => {
  const idWizard = req.params.id
  connection.query('DELETE FROM `wizard` WHERE `is_human` = false ', [idWizard], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données, moldu.');
    } else {
      res.json(results);
    }
    });
});