/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

var animal = {
    eats: true,
    eat: function () {
        this.eats = true;
    }
}
var bio = {
    body: true
}

// function Rabbit(name) {
// Rabbit.prototype ={
//     constructor : Rabbit
// }
// this.name = name;
// this.__proto__= animal;
// }

// Rabbit.prototype = animal;
// Rabbit.prototype = bio;
// Rabbit.__proto__ = bio;
// var bio = {
//     body: true,
//     color: NaN
// }
// col(Rabbit.getOwnPropertyNames(Rabbit.prototype));

// let krol = new Rabbit('Krolik');
// col(krol.eats);


function Rabbit(name) {
    this.ra = 'uu'
}


var rabbit = new Rabbit("Кроль");
Rabbit.prototype.vawww = true;
Rabbit.prototype.vawww2 = true;
// Rabbit.prototype = {
//     constructor : Rabbit,
//     eats: false,
//     body: true
// }
var rabbit2 = new Rabbit('voolfy')
col(rabbit.vawww);
col(rabbit2.vawww);
// col(rabbit.eats);
// col(rabbit.constructor);
// let rabbit2 = new Rabbit('RRRRRRRRRR');
// col(rabbit2.constructor);
//
// var rabbit3 = new rabbit2.constructor("Крольчиха")

let arg_1 = {
    name: 'Rgsg',
    surname: 'Uevevf'
}
function Menu(arg) {
    this.arr_key = Object.keys(arg);
    this.arg = Object.create(arg);
}
let m = new Menu(arg_1);
m.name = 'rrrrrrr';
col(arg_1.name);

let empt = Object.create(null);
let _empt = {};