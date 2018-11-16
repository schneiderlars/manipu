module.exports = class Bundle {

    constructor(name) {
        this._name = name;
        this._components = new Map();
    }

    addComponent(component) {
        this._components.set(component.name, component);
    }

    getName() {
        return this._name;
    }
}