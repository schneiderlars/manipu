const PumlWriter = require('../src/PumlWriter')
var assert = require('assert');

describe('PumlWriter', function () {
    describe('bundleToPuml', function () {
        it('should return puml string', function () {
            const result = PumlWriter.bundleToPuml();
            assert.equal("", result);
        });
    });
});