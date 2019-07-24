/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let add = (a, b) => a + b;
col(add(3, 7));

let arr = [1, 2, 3, 4, 9, 5, 7, 9];
let sum = 0;

arr.forEach((item) => {
    sum += item;
})

let ssm = arr.reduce((sum, item) => sum + item, 0);
let twise = arr.filter((item) => item % 2 !== 0)
let maps = arr.map(item => item * 2)
console.log('ssm = ', ssm, maps, arr);
let f = function () {
};
let aadd = new f();
debugger;