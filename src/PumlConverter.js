module.exports.bundleToPuml = function (bundle) {
  if (!bundle) {
    return `@startuml
        title Bundle Diagram
        @enduml`
  }
  return `@startuml
    title Bundle Diagram
    package "${bundle.getName()}" {
        ${createComponents(bundle)}
    }
    ${createReferences([bundle], bundle.getComponents())}
    @enduml `
};

module.exports.bundlesToPuml = function (bundles) {
  if (!bundles) {
    return `@startuml
        title Bundle Diagram
        @enduml`
  }
  let bundlesString = `@startuml
    title Bundle Diagram`;
  for (let bundle of bundles) {
    bundlesString += `package "${bundle.getName()}" {
      ${createComponents(bundle)}
    }`
  }
  for (let bundle of bundles) {
    bundlesString += `${createReferences(bundles, bundle.getComponents())}`
  }
  bundlesString += `@enduml`;
  return bundlesString;
};

function createComponents(bundle) {
  let result = "";
  const components = bundle.getComponents();
  for (let component of components) {
    let interfaces = component.getInterfaces();
    let interfacesString = interfaces.length ? ` <<${interfaces.join(",")}>>` : ""
    result += `[${component.getName()}]${interfacesString}
        `;
  }
  return result;
}

function createReferences(bundles, components) {
  let result = "";
  for (let component of components) {
    const references = component.getReferences();
    for (let interface of references) {
      const refComponents = getComponentsByInterface(bundles, interface);
      for (let refComponent of refComponents) {
        result += `[${component.getName()}] --> [${refComponent.getName()}]
                `;
      }
    }
  }
  return result;
}

function getComponentsByInterface(bundles, interface) {
  return bundles[0].getComponentsByInterface(interface);
}
