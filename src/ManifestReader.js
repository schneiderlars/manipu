const fs = require('fs');
const Bundle = require('./Bundle');

const _path = Symbol("_path");
const _bundle = Symbol("_bundle");

function ManifestReader(path) {

  const getPath = () => {
    return this[_path];
  };

  const getBundle = () => {
    return this[_bundle];
  };

  this[_path] = path;
  let filedescriptor = fs.openSync(path, 'r');
  let filedata = fs.readFileSync(filedescriptor);
  const jsonData = JSON.parse(filedata.toString('utf8'));

  this[_bundle] = new Bundle("test");

  return {
    getPath,
    getBundle
  };
}

module.exports = ManifestReader;
