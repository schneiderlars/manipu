module.exports = class Component {
    
    constructor(name, interfaces = []){
        this._name = name;
        this._interfaces = intefaces;
    }

    getName(){
        return this._name;
    }

    getInterfaces(){
        return this._interfaces;
    }

}