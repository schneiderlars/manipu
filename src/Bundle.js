module.exports = class Bundle {

    constructor(name) {
        this._name = name;
        this._components = new Map();
    }

    addComponent(component) {
        this._components.set(component.getName(), component);
    }

    getName() {
        return this._name;
    }

    getComponents() {
        return this._components.values();
    }

    getComponentsByInterface(interfaceName) {
        return Array.from(this._components.values())
            .filter(component => {
                return component.getInterfaces().includes(interfaceName);
            });
    }
}