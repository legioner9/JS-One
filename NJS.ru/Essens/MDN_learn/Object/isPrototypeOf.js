/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let proto = {a: {value: 'aa'}};
let ob = Object.create(proto, proto);
col(proto.isPrototypeOf(ob));//true
col(proto._$_REss().Meth._$isPrototypeOf_(ob))

debugger;
let rf = function () {
};
let n_rf = new rf();
col(n_rf instanceof rf);//true



