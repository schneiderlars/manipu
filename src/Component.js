module.exports = class Component {
    
    constructor(name, interfaces = [], references = []){
        this._name = name;
        this._interfaces = interfaces;
        this._references = references;
    }

    getName(){
        return this._name;
    }

    getInterfaces(){
        return this._interfaces;
    }

    getReferences(){
        return this._references;
    }

};
