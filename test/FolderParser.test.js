const {assert} = require("chai");
const FolderParser = require("../src/FolderParser");

describe('FolderParser', () => {
  it('should find simple path', () => {
    const parser = FolderParser();
    let manifestPaths = parser.findManifestFiles("./test/data/simple-component");

    assert.equal(manifestPaths.length, 1);
    assert.equal(manifestPaths[0],"test\\data\\simple-component\\manifest.json");
  });

  it('should find recursive path', () => {
    const parser = FolderParser();
    let manifestPaths = parser.findManifestFiles("./test/data/dir");

    assert.equal(manifestPaths.length, 3);
    assert(manifestPaths.indexOf("test\\data\\dir\\subdir\\manifest.json") > -1);
    assert(manifestPaths.indexOf("test\\data\\dir\\subdir2\\manifest.json") > -1);
    assert(manifestPaths.indexOf("test\\data\\dir\\subdir2\\subdir3\\manifest.json") > -1);
  });
});
