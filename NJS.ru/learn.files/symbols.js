/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let yf = (a) => {
    return Symbol(a);
}

let yfr = (a) => {
    return Symbol.for(a);
}

let id_ini = yf('id');
let id_end = Symbol('id');
let id_end_description = id_end.description;
let id_ini_description = id_ini.description;

console.log('ini = end', id_ini == id_end);

let ob = {i: 'i'};

ob[id_ini] = 'vfavf';
ob[id_end] = 'vfavffwfweq';

col(ob[id_ini]);
col(ob[id_end]);
col(ob[Symbol('id')]);

let sy_1 = Symbol.for('s_symb');
let sy_1_key = Symbol.keyFor(sy_1);
let sy_1_key_1 = sy_1.description;

let ops = Object.getOwnPropertySymbols(ob);
let rok = Reflect.ownKeys(ob);

let ops_0_key = Object.getOwnPropertySymbols(ob)[0].description;

let s_1 = yfr('i_id');
let s_2 = yfr('i_id');
ob[s_1] = 'werc';
ob[s_2] = 'wercvwvrtv';
col(s_1.description);
col(s_2.description);
col(s_1 == s_2);//true

debugger;

