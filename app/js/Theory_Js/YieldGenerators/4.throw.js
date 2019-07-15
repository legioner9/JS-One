/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let arr_start = [{a: 'a'}, {b: 'b'}, {c: 'c'}];

function* gen() {
    for (let i = 0; i < arr_start.length; i++) {
        debugger;
        let ask = yield (i + '+ i?');
        debugger;
        col(ask);
    }
}

let generator1 = gen();
debugger;
for (let i = 0; i <= arr_start.length; i++) {
    if (i == 0) col(generator1.next().value);
    if (i == arr_start.length) col(generator1.throw(new Error('error in' + i)));
    debugger;
    col(generator1.next(arr_start[i]).value);
}