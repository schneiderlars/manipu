module.exports.bundleToPuml = function (bundle) {
    if(!bundle){
        return `@startuml
        title Bundle Diagram
        @enduml`
    }
    return `@startuml
    title Bundle Diagram
    package "${bundle.getName()}" {
    }
    @enduml `
}