const fs = require('fs');

const _path = Symbol("_path");

function ManifestReader(path) {

  const getPath = () => {
    return this[_path];
  };

  this[_path] = path;
  let filedescriptor = fs.openSync(path, 'r');
  let filedata = fs.readFileSync(filedescriptor);
  const jsonData = JSON.parse(filedata.toString('utf8'));

  
  return {
    getPath
  };
}

module.exports = ManifestReader;
