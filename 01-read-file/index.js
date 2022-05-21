const fs = require('fs');
const path = require('path');
const pt = path.join(__dirname, 'text.txt');

/* const stream = fs.createReadStream(pt, 'utf-8');
stream.on('data', chunk => console.log(chunk.toString()));
stream.on('close', () => stream.close()); */

const stream = new fs.ReadStream(pt, 'utf-8');
stream.on('readable', () => {
  let data = stream.read();
  if (data !== null) console.log(data);
});

stream.on('end', () => {
  console.log('Содержимое файла выведено в консоль');
});

