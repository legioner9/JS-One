/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let ob = {a: 'aa', b: 'bb'};
let res_str = ob._$_REss().Meth._$toString_myJson();
debugger;
let ob_entr = Object.entries(ob);
let ar = [];

for (let i = 0; i < ob_entr.length; i++) {
    let item = `(${ob_entr[i][0]} : ${ob_entr[i][1]})`;
    ar.push(item);
}
let res_str_ = ar.join(',');
