/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
let ttt = performance.now();
col('ini time ' + performance.now());


function trottle(f_t, ms) {
    col('Tr time = ' + (performance.now() - ttt))

    let l_time, d_time, tm, i  = 0;

    return function () {
        let context = this;
        let arg = arguments;
        i++;
        if (!l_time) {
            l_time = performance.now();
            return f_t.apply(context, arg);
        }
        d_time = performance.now() - l_time;
        tm = setTimeout(function () {
            // col('END = ' + i + ' ' + (performance.now() - ttt));
            f_t.apply(context, arg);
        }, ms);
        if (d_time < ms) {
            // col('return = ' + i + ' ' + (performance.now() - ttt));
            clearTimeout(tm);
            return;
        } else {
            col('else  = ' + i + ' ' + (performance.now() - ttt));
            l_time = performance.now();
            f_t.apply(context, arg);
        }
    }
}
let a = 777
ini_g = trottle(ini_g, 7000);

function ini_g(a) {
    col('run func ini_g , a = '+ ' ' + a + ' ' + (performance.now() - ttt));
}

// setTimeout(function () {
//     col('run');
//     ini_g();
// }, 7000);

ini_g(a);

let j = 0;
let st = setInterval(function () {
    j++;
    if (j >= 10) {
        clearInterval(st)
    }
    // col(' run interval ');
    ini_g(a);
}, 1000);