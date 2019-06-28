/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

var animal = {
    eat: function () {
        this.eats = true;
    }
};
var rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;
// col(rabbit.__proto__.__proto__);
// col(rabbit.eats);
for (let key in rabbit) {
    if (!rabbit.hasOwnProperty(key)) continue;
    col(`${key}  in ${rabbit[key]}`);
}
// rabbit.eat();
col(rabbit.hasOwnProperty('toString') ? rabbit.toString() : undefined);

var animal = {
    jumps: null
};
var rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

col(rabbit.jumps); // ? (1)

delete rabbit.jumps;

col(rabbit.jumps); // ? (2)

delete animal.jumps;

col(rabbit.jumps); // ? (3)

var animal = {
    eat: function () {
        this.full = true;
    }
};

var rabbit = {
    __proto__: animal
};

rabbit.eat();

var head = {
    glasses: 1
};

var table = {
    pen: 3
};

var bed = {
    sheet: 1,
    pillow: 2
};

var pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

