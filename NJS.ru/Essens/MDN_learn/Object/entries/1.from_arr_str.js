/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let ob = {1: 1, a: 'aa', b: ['bb'], c: {d: 'd'}};
let en_ob = Object.entries(ob);
for (const [obEl_key, obEl_value] of en_ob) {
    col(`key = ${obEl_key} , value = ${obEl_value} `);
}

let arr = [2, 4]
let ob_ar = new Object(...arr);
// let _$new_obj_from_str_with_map_ = function (str, callback, thisArg) {
//     let iter = str.split('').map(callback,thisArg).entries();
//     let o = {};
//     for (const iterElement of iter) {
//         o[iterElement[0]] = iterElement[1];
//     }
//     return o;
// }
//
debugger;


let context_callback = {
    letter: 'e',
    if_e(letter) {
        if (letter == this.letter) {
            return letter;
        } else {
            return false;
        }
    }
}

let n_a_ob = {}._$_REss().New._$new_obj_from_arr_with_map_(
    ['e', 1],
    context_callback.if_e,
    context_callback
);
let n_arr = {}._$_REss().New._$new_obj_from_str_with_map_(
    'rer',
    context_callback.if_e,
    context_callback
);
