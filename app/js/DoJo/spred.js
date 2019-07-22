/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let arr_1 = [2, 4, 6];
let arr_2 = [3, 9, 12];
col([...arr_1, ...arr_2]);
let fun_1 = function () {
    col(arguments);
    let arg = [].slice.call(arguments)
    return arg.reduce( function (a, b) {
        return a + b;
    })
}
debugger;
col(fun_1(...arr_1));