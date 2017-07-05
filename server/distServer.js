/* eslint-disable no-console, global-require */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const auth = require('./api/auth');
const compression = require('compression');

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
