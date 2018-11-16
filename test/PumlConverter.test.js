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
            assert(result.includes(`[Component1] --> [Component2]`));
            assert(result.includes(`[Component2] <<i2>>`));
        });
    });
    describe('bundlesToPuml', function () {
        it('should return puml with title for empty bundle list', function () {
            const result = PumlConverter.bundlesToPuml();
            assert(result.includes(`title Bundle Diagram`));
        });
        it('should return puml with bundle for single bundle', function () {
          const bundle = new Bundle("map-init");
          const c1 = new Component("Component1", ["i1"], ["i2"]);
          const c2 = new Component("Component2", ["i2"]);
          bundle.addComponent(c1);
          bundle.addComponent(c2);
          const result = PumlConverter.bundlesToPuml([bundle]);
          assert(result.includes(`[Component1] --> [Component2]`));
          assert(result.includes(`[Component2] <<i2>>`));
        });
        it('should return puml with bundle for multiple bundles', function () {
          const bundle1 = new Bundle("map-init");
          const c1 = new Component("Component1", ["i1"], ["i2"]);
          const c2 = new Component("Component2", ["i2"]);
          bundle1.addComponent(c1);
          bundle1.addComponent(c2);

          const bundle2 = new Bundle("map-widget");
          const c3 = new Component("Component3", ["i3"], ["i4"]);
          const c4 = new Component("Component4", ["i4"], ["i1", "i2"]);
          bundle1.addComponent(c3);
          bundle1.addComponent(c4);

          const result = PumlConverter.bundlesToPuml([bundle1, bundle2]);
          assert(result.includes(`[Component3] --> [Component4]`));
          assert(result.includes(`[Component4] --> [Component1]`));
          assert(result.includes(`[Component4] --> [Component2]`));
        });
    });
});
