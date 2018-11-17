const fs = require('fs');
const Bundle = require('./Bundle');
const BundleParser = require('./BundleParser');

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
  let jsonData;
  try{
    jsonData = JSON.parse(filedata.toString('utf8'));
  } catch (e) {
    console.log("Error with JSON at: " + path);
  }

  this[_bundle] = BundleParser().fromJson(jsonData);

  return {
    getPath,
    getBundle
  };
}

module.exports = ManifestReader;
