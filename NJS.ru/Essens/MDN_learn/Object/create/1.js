/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */


function SuperClass(a) {
    this.aa = a;
    this.sc = function () {
        col(this.aa);
    }
}

SuperClass.prototype.pr_sc_func = function (pr) {
    col(pr);
}

let n_cs = new SuperClass(99);

function MyClass(a) {
    SuperClass.call(this, a);
}

debugger;
MyClass.prototype = Object.create(SuperClass.prototype); // наследование
let n_mc = new MyClass('r');
