/* eslint-disable no-console, global-require */
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const { resolve } = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config.dev');

const { NODE_ENV = 'development', PORT = 3000 } = process.env;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (NODE_ENV === 'production') {
  const FE_DIR = resolve(__dirname, '..', 'client');
  app.use(express.static(FE_DIR));
  app.get('/*', (req, res) => {
    res.sendFile(resolve(FE_DIR, 'index.html'));
  });
} else {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use('/*', (req, res) => {
    if (req.get('host') !== undefined) {
      const url = `${req.protocol}://${req.get('host')}`;
      const newReq = http.request(url, (newRes) => {
        newRes.pipe(res);
      });
      req.pipe(newReq);
    }
  });
}

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
