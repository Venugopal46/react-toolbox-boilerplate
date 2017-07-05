/* eslint-disable no-console */
import fs from 'fs';
import cheerio from 'cheerio';

fs.readFile('client/index.html', 'utf8', (err, markup) => {
  if (err) {
    console.log(err);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (er) => {
    if (er) {
      console.log(er);
    }
    console.log('index.html written to /dist');
  });
});
