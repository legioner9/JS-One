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
    return col(`${x} + ${y} + ${z} = ${parseInt(x) + parseInt(y) + parseInt(z)}`);
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

let name = 'Fill';
let toy = 'My toys'

col(literalVolue`Hello ${toy}   ${name}   ${toy} egewqer`);
col(`Hello ${toy}   ${name}   ${toy} egewqer`);

literalVolue` texst and ${variables = 'any'}`;

function literalVolue(literal, ...value) {
    // literal.__my_getObjClass();  is array
    // value.__my_getObjClass();  is array
}

debugger;
let st1 = 'tyuj ooo', st2 = 'ooo';
col(st1.includes(st2));
col(st1.endsWith(st2));
col(st1.startsWith(st2));
col(st1.repeat(2));
