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
}