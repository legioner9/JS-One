/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let rf = function (a) {
    this.a = a;
    this.col_a = function () {
        col(this.a);
    }
};

let n_rf = new rf(6);
col(n_rf instanceof rf);//true

let on_rf = {
    a: 5,
    col_a() {
        col(this.a);
    }
};
let o_rf = {};

on_rf.__proto__ = rf.prototype
// on_rf.__proto__.__proto__ = Object

n_rf.col_a();
on_rf.col_a();
col(on_rf instanceof rf);//true
col(on_rf instanceof Object);//true
debugger;
let fn = new Function();
let obj = new Object({});
obj.__proto__ = fn.prototype;
let copare_proto = (obj instanceof fn);//true

let obj_fn = new fn();
let copare_new = (obj_fn instanceof fn);//true
