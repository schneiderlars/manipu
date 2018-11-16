const Bundle = require('../src/Bundle');
const PumlConverter = require('../src/PumlConverter')
let assert = require('assert');

describe('PumlWriter', function () {
    describe('bundleToPuml', function () {
        it('should return puml string', function () {
            const result = PumlConverter.bundleToPuml();
            assert(result.includes(`title Bundle Diagram`));
        });
        it('should return empty puml for bundle without components', function () {
            const bundle = new Bundle("map-init");
            const result = PumlConverter.bundleToPuml(bundle);
            console.log(result);
            assert(result.includes(`package "map-init"`));
        });
    });
});