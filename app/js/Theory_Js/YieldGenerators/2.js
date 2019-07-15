/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function* gen() {
    debugger;
    let ask1 = yield "2 + 2?";
    debugger;
    col(ask1); // 4

    debugger;
    let ask2 = yield "3 * 3?"

    debugger;
    col(ask2); // 9
}

debugger;
let generator = gen();
debugger;
col(generator.next().value); // "2 + 2?"
debugger;
col(generator.next(4).value); // "3 * 3?"
debugger;
col(generator.next(9).done); // true
debugger;
let generator1 = gen();
debugger;
let arr_start = [{a: 'a'}, {b: 'b'}];
col(generator1.next().value);
debugger;
for (let i = 0; i < arr_start.length; i++) {
    debugger;
    col(arr_start[i]);
    col(generator1.next(arr_start[i]).value);
}