const Bundle = require('../src/Bundle');
const Component = require('../src/Component');
const PumlConverter = require('../src/PumlConverter')
let assert = require('assert');

describe('Bundle', function () {
    describe('getComponentByInterface', function () {
        it('should return empty array if no matching interfaces exists', function () {
            let bundle =  new Bundle();
            let components = bundle.getComponentsByInterface("int1");
            assert.equal(components.length, 0);
        });
        it('should return matching components for interface', function () {
            let bundle =  new Bundle();
            bundle.addComponent(new Component("com1", ["int1"]));
            let components = bundle.getComponentsByInterface("int1");
            assert.equal(components.length, 1);
            assert.equal(components[0].getName(), "com1");
        });
    });
});