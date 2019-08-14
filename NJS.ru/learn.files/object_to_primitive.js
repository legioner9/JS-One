/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let Dog = function (name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
}

let theDog = new Dog('Болтушка', 'лабрадор');
let theDog_str_default = theDog.toString();
Dog.prototype.toString = function () {
    let _ret = `this.name ="${this.name}" this.breed ="${this.breed}"`;
    return _ret;
}
Dog.prototype.constructor = Dog;
let theDog_str_oure = theDog.toString();


let user_ = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        col(`hint = "${hint}"`);
        return hint == "string" ? `Name : ${this.name}` : this.money;
    }
}
let user_s = String(user_);
let user_n = Number(user_);
debugger;
