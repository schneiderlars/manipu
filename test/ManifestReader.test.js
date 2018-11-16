const {assert} = require("chai");
const ManifestReader = require("../src/ManifestReader");

describe('ManifestReader', () => {
  it('should create ManifestReader with path', () => {
    const manifestReader = ManifestReader("./test/data/simple-component/manifest.json");
    assert.equal(manifestReader.getPath(), "./test/data/simple-component/manifest.json");
  });

  it('should throw error if file does not exist', () => {
    try{
      const manifestReader = ManifestReader("./test/data/component/manifest.json");
    }catch(error){
      assert(true);
      return;
    }
    assert(false, "Error was not thrown");
  });

 /* it('should return Bundle object with components', () => {
    const manifestReader = ManifestReader("./test/data/simple-component/manifest.json");

    const bundle = manifestReader.getBundle();

    assert.equal(bundle.getName(), "coordinatetransformer");
    assert.equal(bundle.getComponents(), 3)

  });*/

});
