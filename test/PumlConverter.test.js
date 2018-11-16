const Bundle = require('../src/Bundle');
const Component = require('../src/Component');
const PumlConverter = require('../src/PumlConverter')
let assert = require('assert');

describe('PumlConverter', function () {
    describe('bundleToPuml', function () {
        it('should return puml string', function () {
            const result = PumlConverter.bundleToPuml();
            assert(result.includes(`title Bundle Diagram`));
        });
        it('should return puml for bundle without components', function () {
            const bundle = new Bundle("map-init");
            const result = PumlConverter.bundleToPuml(bundle);            
            assert(result.includes(`package "map-init"`));
        });
        it('should return puml for bundle with components', function () {
            const bundle = new Bundle("map-init");
            const c1 = new Component("Component1");
            const c2 = new Component("Component2");
            bundle.addComponent(c1);
            bundle.addComponent(c2);
            const result = PumlConverter.bundleToPuml(bundle);            
            assert(result.includes(`[Component1]`));
            assert(result.includes(`[Component2]`));
        });
        it('should return puml for bundle with referenced components', function () {
            const bundle = new Bundle("map-init");
            const c1 = new Component("Component1", ["i1"], ["i2"]);
            const c2 = new Component("Component2", ["i2"]);
            bundle.addComponent(c1);
            bundle.addComponent(c2);
            const result = PumlConverter.bundleToPuml(bundle);            
            assert(result.includes(`[Component1] -> [Component2]`));            
        });
    });
});