/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let arr = ['aa', 'bb', 'cc'];
// let a, b, c;
// [a, b, c] = arr;
let [a, ...rest] = arr;

let ff = function ([a, b]) {
    console.log(a, b);
}
ff([3, 7]);
debugger;
