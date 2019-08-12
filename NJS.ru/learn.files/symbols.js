/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let yf = (a) => {
    return Symbol(a);
}

let id_ini = yf('id');
let id_end = Symbol('id');
let id_end_description = id_end.description;
let id_ini_description = id_ini.description;

let ob = {};

ob[id_ini] = 'vfavf';
ob[id_end] = 'vfavffwfweq';

col(ob[id_ini]);
col(ob[id_end]);
col(ob[Symbol('id')]);
debugger;
let sy_1 = Symbol.for('s_symb');
let sy_1_key = Symbol.keyFor(sy_1);
let sy_1_key_1 = sy_1.description;

