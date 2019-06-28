/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
debugger;
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    col("ходит " + this.name);
};

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = Animal.prototype;

Rabbit.prototype.walk = function() {
    col("прыгает! и ходит: " + this.name);
};

var animal = new Animal("Хрюшка");
animal.walk(); // прыгает! и ходит Хрюшка