/* eslint-disable no-console, global-require */
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const http = require('http');
const webpackConfig = require('../webpack.config.dev');

const compiler = webpack(webpackConfig);
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('/*', (req, res) => {
  if (req.get('host') !== undefined) {
    const url = `${req.protocol}://${req.get('host')}`;
    const newReq = http.request(url, (newRes) => {
      newRes.pipe(res);
    });
    req.pipe(newReq);
  }
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
