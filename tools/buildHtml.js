import fs from 'fs';

fs.createReadStream('client/index.html').pipe(fs.createWriteStream('dist/index.html'));
