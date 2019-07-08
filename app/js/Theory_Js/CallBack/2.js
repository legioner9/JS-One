/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
col(performance.now());
let mf = function (num, callback) {
    let md = _fib(num);
    col(performance.now());
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

let en = function (a) {
    col(a);
}
// debugger;
mf(25, en);