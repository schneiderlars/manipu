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
    ${createReferences(bundle)}
    @enduml `
}

function createComponents(bundle) {
    let result = "";
    const components = bundle.getComponents();    
    for (let component of components) {
        let interfaces = component.getInterfaces();
        result += `[${component.getName()}] <<${interfaces.join(",")}>>
        `;
    }    
    return result;
}

function createReferences(bundle) {
    let result = "";
    const components = bundle.getComponents();    
    for (let component of components) {
        const references = component.getReferences();
        for (let interface of references) {
            const refComponents = bundle.getComponentsByInterface(interface);
            for (let refComponent of refComponents) {
                result += `[${component.getName()}] -> [${refComponent.getName()}]
                `;
            }            
        }                
    }    
    return result;
}
