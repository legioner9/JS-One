/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
/* TODO: reference-specification-type  */
let us = {
    surname: 'doby )))',
    sayHi(a) {
        let tr = () => {
            col(`Hi ${a} ... ${this.surname}`);
        }
        tr();
    },
}

us.sayHi('YU');// this correct reference-specification-type
let yut = us.sayHi;
yut('vfvd gb'); // this underfind !!! reference-specification-type
//after =

function makeUser() {
    return {
        name: "Джон",
        ref() {
            return this;
        }
    };
};

let user = makeUser();
col(user.ref); // ƒ ref() {
// return this;
// }
col(user.ref.name); // ref
col(user.ref()); // {name: "Джон", ref: ƒ}
col(user.ref().name); // Джон

let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt('Enter "a"', 0);
        this.b = +prompt('Enter "b"', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
}
calculator.read();
let sum = calculator.sum();
let mul = calculator.mul();

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        col(this.step);
        return this;
    }
};

debugger;
ladder.up().up().down().showStep(); // 1