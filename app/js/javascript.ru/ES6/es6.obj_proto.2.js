/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let user = {
    firstName: "Вася",
    surname: "Петров"
}

Object.defineProperty(user, "fullName", {

    get: function () {
        return this.firstName + ' ' + this.surname;
    },

    set: function (value) {
        var split = value.split(' ');
        this.firstName = split[0];
        this.surname = split[1];
    }
});

let name = 'yry';
let ob = {
    name: ' name ',
    sayHi() {
        col(this.name);
    },
    get nameIs() {
        return this.name + ' get '
    },
    set nameIs(name_ini) {
        this.name += name_ini;
    }
};
col(ob.nameIs);
ob.name = 'real'
ob.nameIs = ' plus ';
col(ob.nameIs);
ob.nameIs = 'plus';
col(JSON.stringify(ob));
ob.nameIs = 'rrrr';
col(JSON.stringify(ob));
let a = 'my ', b = 'name ', c = 'Yury';
let us = {
    [(a + b + c).toLowerCase()]: 'FIO'
};
let pr = Object.getPrototypeOf(us);
Object.setPrototypeOf(us, ob);
let trj = {};
Object.assign(trj, ob, us)
Object.is(a, a); // true a === a
Object.defineProperty(trj, 'dube', {
        get() {
            return this.dube + 'd';
        },
        // writable : true,
        enumerable: true,
        configurable: true
    }
);
debugger;
trj.dube = 6;
col(trj.dube);

Object.defineProperty(obj, 'property name', {
        value: '',
        writable: false,
        enumerable: false,
        configurable: false,
        get() {
        },
        set() {
        }
    }
)
