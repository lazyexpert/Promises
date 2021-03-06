const fs = require('fs');
const async = require('./async');
const promisify = require('./promisify');

const readFile = promisify(fs.readFile);

function readTextFile(filename) {
  return readFile(filename)
    .then(buffer => buffer.toString());
}

async(function* () {
  console.log(yield readTextFile('file1.txt'));
  try {
    console.log(yield readTextFile('file2-!!!.txt'));
  } catch (e) {
    console.log(e);
  }
  console.log(yield readTextFile('file3.txt'));
});
