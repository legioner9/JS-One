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
rabbit.eat();
col(rabbit.eats);

