/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

/* TODO: template - replase  */

option = {
    template: 'h : m : s'
}
let H = 'H';
option.template.replace('h', H);

/* TODO: mane class prototype definder  */

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk =
    function () {
        col("ходит " + this.name);
    }

function Rabbit(name) {
    Animal.apply(this, arguments);
}


Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.walk = function () {
    Animal.prototype.walk.apply(this, arguments);
    col("прыгает " + this.name);
};

/* TODO: maskFour ligic mask  */
function maskFour() {
    var bol, a = 2, b = 4, c = 8, d = 16;
    bol = a | b | c | d;
    col(bol & a);
}
