/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let str = 'rejj';
let cont_call = {
    letter: 'j',
    if_j(letter) {
        if (letter == this.letter) {
            return letter.toUpperCase();
        } else {
            return letter;
        }
    }
}
let _$map_for_str = function (str, callback, thisArg) {
    let arr = str.split('').map(callback, thisArg);
    return arr.join('');
}
debugger;
let m_str = str._$_REss().Meth._$map_for_str(cont_call.if_j, cont_call);
// let m_str = _$map_for_str(str, cont_call.if_j, cont_call);