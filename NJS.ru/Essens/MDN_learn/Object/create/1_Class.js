/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */


let SuperClass = function (a) {
    this.aa = a;
    this.sc = function () {
        col(this.aa);
    }
}

SuperClass.prototype.pr_sc_func = function (pr) {
    col(pr);
}

let n_cs = new SuperClass(99);

let MyClass = function (a) {
    SuperClass.call(this, a);
}
debugger;
MyClass._$_REss().Meth._$create_add_Parent_Class(SuperClass);
MyClass.prototype = Object.create(SuperClass.prototype); // наследование
let n_mc = new MyClass('r');
n_mc.pr_sc_func('w');

let proto = {a: 'a'};
let ob = {b: 'b'};
let prop = {d: 'd'};

let sg = {
    d: undefined,
    get col_d() {
        if (this.d === undefined) {
            return col(`prop d is undefined still`);
        } else {
            return col(this.d);
        }
    },
    set col_d(value) {
        col(`value = ${value}`);
        this.d = value;
        return true;
    }


}

let sob = Object.create({a: 'a'}, {
    c: {value: 'prop'},
    c_: {
        configurable: false,
        get: function () {
            return JSON.stringify(this.c);
        },
        set: function (value) {
            // console.log('Установка `o.bar` в', value);
            this.c = value;
        },
    }
});

col(ob.c_);
ob.c_ = 20;


let o = Object.create({}, {p: {value: 42}});
debugger;
st._$_REss().Meth._$create_protoFromIntObj({a: 'a'}, {
    c: {value: 'prop'},
    c_: {
        configurable: false,
        get: function () {
            return JSON.stringify(this.c);
        },
        set: function (value) {
            // console.log('Установка `o.bar` в', value);
            this.c = value;
        },
    }
})