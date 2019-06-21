/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
var res_my_dec_Debounce = {};
var Tm, Cl, Count;
var i = 0;

var res = {
    time: Tm,
    clear: Cl,
    count: Count
}

var ttt = performance.now()
col('ini time' + performance.now());

function my_dec_Debounce(ini_fun, id, delay_min) {
    return function () {
        i++;
        col(i);
        col('start Deb time = ' + (performance.now() - ttt))
        var context = this;
        var arg = arguments;
        res_my_dec_Debounce[id] = res;
        res_my_dec_Debounce[id].count = i;
        var Id = res_my_dec_Debounce[id].time;

        if (!res_my_dec_Debounce[id].time) {
            res_my_dec_Debounce[id].time = performance.now();
        }
        if ((performance.now() - res_my_dec_Debounce[id].time) > delay_min) {
            res_my_dec_Debounce[id].clear = setTimeout(function () {
                col('res_my_dec_Debounce id clear = ' + res_my_dec_Debounce[id]['clear']);
                col('TOut time = ' + (performance.now() - ttt));
                res_my_dec_Debounce[id].time = performance.now();
                ini_fun.apply(context, arg);
            }, delay_min);
        } else {
            res_my_dec_Debounce[id].time = performance.now();
        }
    }
}


function ini_g() {
    col('func ini_g = ' + (performance.now() - ttt));
}

var ini_g = my_dec_Debounce(ini_g, 'e', 1000);
ini_g();
ini_g();
setTimeout(function () {
    ini_g()
}, 1100);
setTimeout(function () {
    ini_g()
}, 1200);

// (my_dec_setInterval(ini_fg, 'e', 1000))(78);
// clearInterval(res_my_dec_setInterval['e']);

// var fff = setTimeout(function ini_g(a) {
//     col(a*2);
// } ,100  ,[a])
// clearTimeout(fff);