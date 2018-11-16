const path = require('path')
const fs = require('fs')

function recFindByName(base, name, files, result) {
  files = files || fs.readdirSync(base);
  result = result || [];

  files.forEach((file) => {
      const newbase = path.join(base, file);
      if (fs.statSync(newbase).isDirectory()) {
        result = recFindByName(newbase, name, fs.readdirSync(newbase), result)
      }else {
        if (file === name) {
          result.push(newbase)
        }
      }
    }
  );
  return result
}

function FolderParser() {

  const findManifestFiles = (path) => {
    return recFindByName(path, "manifest.json")
  };

  return {
    findManifestFiles
  }
}

module.exports = FolderParser;
