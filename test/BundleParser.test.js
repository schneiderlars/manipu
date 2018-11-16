const {assert} = require("chai");
const BundleParser = require("../src/BundleParser");

const numberOf = (iter) => {
  let count = 0;
  for (let item of iter) {
    count++
  }
  return count;
};


describe('BundleParser', () => {
  it('should parse bundle name', () => {
    const input = {
      name: "bundlename",
      components : [
        {
          name: "componentname"
        }
      ]

    };

    const parser = BundleParser();
    let bundle = parser.fromJson(input);
    assert.equal(bundle.getName(), "bundlename");
  });

  it('should parse components', () => {
    const input = {
      name: "bundlename",
      components : [
        {
          name: "componentname"
        },
        {
          name: "componentname2"
        }
      ]

    };

    const parser = BundleParser();
    let bundle = parser.fromJson(input);
    assert.equal(numberOf(bundle.getComponents()), 2);
  });

  it('should parse references inside components', () => {
    const input = {
      name: "bundlename",
      components : [
        {
          name: "componentname",
          references: [{
              name: "ref1",
              providing: "interface1"
          }]
        }
      ]

    };

    const parser = BundleParser();
    const bundle = parser.fromJson(input);
    const component = bundle.getComponents().next().value;

    assert.equal(component.getName(), "componentname");
    assert.equal(component.getReferences().length, 1);
    assert.equal(component.getReferences()[0], "interface1")

  });

  it('should parse interfaces inside components', () => {
    const input = {
      name: "bundlename",
      components : [
        {
          name: "componentname",
          provides: ["interface1", "interface2"]
        }
      ]

    };

    const parser = BundleParser();
    const bundle = parser.fromJson(input);
    const component = bundle.getComponents().next().value;

    assert.equal(component.getName(), "componentname");
    assert.equal(component.getInterfaces().length, 2);
    assert.equal(component.getInterfaces()[1], "interface2")

  })
});
