const Bundle = require('../src/Bundle');
const PumlWriter = require('../src/PumlWriter')
let assert = require('assert');

describe('PumlWriter', function () {
    describe('bundleToPuml', function () {
        it('should return puml string', function () {
            const result = PumlWriter.bundleToPuml();
            assert(result.includes(`title Bundle Diagram`));
        });
        it('should return empty puml for bundle without components', function () {
            debugger;
            const bundle = new Bundle("map-init");
            const result = PumlWriter.bundleToPuml(bundle);
            console.log(result);
            assert(result.includes(`package "map-init"`));
        });
    });
});