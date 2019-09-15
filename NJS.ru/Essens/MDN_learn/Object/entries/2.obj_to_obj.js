/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let _$map_for_obj = function (obj, callback, thisArg) {
    let entr = Object.entries(obj).map(callback, thisArg);
    return Object.fromEntries(entr);
}

let cont_map = {
    letter: 's',
    if_s(letter) {
        if (letter[0] == this.letter) {
            return letter;
        } else {
            return [false, false];
        }
    }
}
let e_obj = {
    9: [1],
    s: 'ss',
}
debugger;

let m_e_obj = e_obj._$_REss().Meth._$map_for_obj(cont_map.if_s, cont_map);
// let m_e_obj = _$map_for_obj(e_obj, cont_map.if_s, cont_map);