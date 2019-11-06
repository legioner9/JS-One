/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
const reg = /(\d+)/g;
let h = '12 fvfv 588'.matchAll(reg);
for (item of h) {
    console.log(item);
}
debugger;
let ob = {a: 'aa', b: 'bb'};
let res_str = ob._$_REss().Meth._$toString_myJson();
let ob_entr = Object.entries(ob);
let ar = [];

for (let i = 0; i < ob_entr.length; i++) {
    let item = `(${ob_entr[i][0]} : ${ob_entr[i][1]})`;
    ar.push(item);
}
let res_str_ = ar.join(',');
