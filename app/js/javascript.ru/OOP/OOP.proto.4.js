/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function Anymal(name) {
    this.name = name;
    this.speed = 0;
}

let tiger = new Anymal('TIG');

Anymal.tugo = {
    tugo: false
}

Anymal.prototype.weght = function (volume) {
    return this.weght = volume;
}

tiger.weght(33);
// col(tiger.weght);

let tiger2 = new Anymal('TIG2');

function _CoffeeMachine(power) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.run = function () {
        setTimeout(function () {
            col('Кофе готов!');
        }, getTimeToBoil());
    };

    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

}

function CoffeeMachine(power) {
    this.power = power;
}

CoffeeMachine.prototype.waterAmount = 0;
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
CoffeeMachine.prototype.getTimeToBoil = function () {
    col(this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power);
    col(performance.now());
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
};
CoffeeMachine.prototype.run = function () {
    setTimeout(() => {
        col(performance.now());
        col('Кофе готов!');
    }, this.getTimeToBoil());
}
CoffeeMachine.prototype.setWaterAmount = function (amou) {
    return this.waterAmount = amou;
}

let _cof = new _CoffeeMachine();
// let cof = new CoffeeMachine();

var cof = new CoffeeMachine(10000);
cof.setWaterAmount(50);
cof.run();
debugger;
function Hamster() {

}
function _Hamster() {
    this.food = [];
}

Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
    this.food.push(something);
};
_Hamster.prototype.found = function(something) {
    this.food.push(something);
};
col(Hamster.name);

// Создаём двух хомяков и кормим первого
let speedy = new Hamster();
let lazy = new Hamster();
let _speedy = new _Hamster();
let _lazy = new _Hamster();

speedy.found("яблоко");
speedy.found("орех");
col(speedy);


_speedy.found("яблоко");
_speedy.found("орех");
col(_speedy);

col( speedy.food.length ); // 2
col( lazy.food.length ); // 2 (!??)

col( _speedy.food.length ); // 2
col( _lazy.food.length ); // 0

col(_speedy.name);