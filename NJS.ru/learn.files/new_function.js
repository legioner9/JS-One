/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */


let User = function (name) {
    if (!new.target) {
        col(`1 new.target = ${new.target}`);
        return new User(name);
    }
    this.name = name;
}

let us = User('bgbf');
let us_new = new User('yuio');
col(us.name);
col(us_new.name);

let Us = function (name) {
    this.name = name;
    return;
}

let us_1 = new Us('f');
let us_2 = new Us('f').name;
let us_3 = (new Us('f')).name;
let us_4 = new Us;

let Us_ret = function (name) {
    this.name = name;
    return {name: 'ttt'};
}

let us_1_ret = new Us_ret('f');
let us_2_ret = new Us_ret('f').name;
let us_3_ret = (new Us_ret('f')).name;
let us_4_ret = new Us_ret;


let Us_meth = function (name) {
    this.name = name;

    this.SayHi = function () {
        col(`_sayHi ${this.name}`)
    }
    return new.target ?
        this :
        {
            name,
            sayHi() {
                col(`_sayHi ${name}`)
            },
        };
}

let us_me_1 = new Us_meth('poly');
let us_me_2 = Us_meth('poly');

let Calculator = function () {

    this.read = function () {
        this.a = +prompt('Enter "a"', 0);
        this.b = +prompt('Enter "b"', 0);
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    }
}
debugger;
let calculator = new Calculator();
calculator.read();
let sum = calculator.sum();
let mul = calculator.mul();

let Accumulator = function (startingValue = 0) {
    this.value = startingValue;

    this.read = function () {
        let next_chang = +prompt('Enter next_chang', 1);
        this.value += next_chang;
    }
}