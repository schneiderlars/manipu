module.exports.bundleToPuml = function (bundle) {
    if(!bundle){
        return `@startuml
        title Bundle Diagram
        @enduml`
    }
    return `@startuml
    title Bundle Diagram
    package "${bundle.getName()}" {
        ${createComponents(bundle)}
    }
    @enduml `
}

function createComponents(bundle) {
    const components = bundle.getComponents();    
    let result = "";
    for (let component of components) {
        result += `[${component.getName()}]
        `;
    }    
    return result;
}