/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let SayHiMixin = {
    sayWord: function (word) {
        col(`${word}  ${this.name} .`)
    }
}

function User(name) {
    this.name = name;
}

for (let key in SayHiMixin) User.prototype[key] = SayHiMixin[key];
let us = new User('Frut').sayWord('Hiuchky !');
debugger;

// Класс Menu с примесью eventMixin
function Menu() {
    // ...
}


// Генерирует событие select при выборе значения
Menu.prototype.choose = function (value) {
    this.__my_trigger("select", value);
}

// Создадим меню
var menu = new Menu();

// При наступлении события select вызвать эту функцию
menu.__my_on("select", function (value) {
    col("Выбрано значение " + value);
});

// Запускаем выбор (событие select вызовет обработчики)
menu.choose("123");