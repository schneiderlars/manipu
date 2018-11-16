module.exports = class Component {
    
    constructor(name, interfaces = []){
        this._name = name;
        this._interfaces = interfaces;
    }

    getName(){
        return this._name;
    }

    getInterfaces(){
        return this._interfaces;
    }

}