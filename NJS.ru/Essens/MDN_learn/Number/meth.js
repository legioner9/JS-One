/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let a = new Number(123);
let b = Number('csa');
let c = Number(23);
let d = Number('3562');
let e = 124;
let f = NaN;
let g;
let arr = [a, c, d, e, f, g];
debugger;
let arr_f1 = arr.map((item, index, arr_init) => {
    return item._$().Type;
}, {})

let arr_f2 = arr.map((item, index, arr_init) => {
    return item.valueOf();
}, {})

let arr_f3 = arr.map((item, index, arr_init) => {
    return item.toString();
}, {})
