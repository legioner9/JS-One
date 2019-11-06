/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let t_f = function (a) {
    setTimeout(function () {
        console.log(a);
    }, 100)
}

t_f({r: 'R'});