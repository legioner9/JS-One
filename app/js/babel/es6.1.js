/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let ty = 'avrf';
let bfgb = 46;
let yt;
if (true) {
    yt = 'uuu'
}
// col(yt);

const Pi = {};
Pi.ret = 'ret';
// col(Pi);
Pi.ret = 'retyr';
// col(Pi);
let arr = ['dfv', 'adfv'];
let arr_insert = ['sdf', 'dfv'];
// col(['dfv', arr_insert, 'adfv']);
// col([...arr_insert, 'dfv', 'adfv','bfgdg']);
sum = function (x, y, z) {
    return col(`${x} + ${y} + ${z} = ${parseInt(x)+parseInt(y)+parseInt (z)}`);
}
let ar = ['1', '4', '7'];

sum(...ar);
let arg_Tiper = ['you', 'my self', 'teme of mess', 'text of message'];

function tiper(to, frome, teme, mess) {
    let mail = {
        to: to,
        frome: frome,
        teme: teme,
        mess: mess
    }
    col(`
        to: ${to},
        frome: ${frome},
        teme: ${teme},
        mess: ${mess}
    `);
}

tiper(...arg_Tiper);

let  name ='Fill';
let toy = 'My toys'

col(literVolue`Hello ${toy}   ${name}   ${toy} egewqer`);

function literVolue(literal , ...value) {
    col(arguments);
    let l = literal[0];
    return literal[0] + value[0].toUpperCase() + value[1];
}
