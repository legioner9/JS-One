/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function goTimer() {
    var i = 1;
    var tr = setTimeout(function run() {
        col(i);
        i++;
        if (i < 21) setTimeout(run, 100 * i)
    }, 100);
}

// goTimer();

function prnNum20_100() {
    var i = 1;
    var tr = setInterval(function () {
        col(i);
        i++;
        if (i == 21) clearInterval(tr);

    }, 100)
}

// prnNum20_100();
var i;

// window.Math_fib = function nunN(n) {
//     if (n > 2) {
//         return nunN(n - 1) + nunN(n - 2)
//     } else return 1;
// }

var t1, t2;

function hardWork() {
    col(Math._fib(20));
    for (i = 0; i < 1000; i++) hardWork[i % 2] = i;
    t1 = Date.now()
    col(' time 1 ' + t1)
}

col('***');
hardWork();
col('**');
setTimeout(function () {
    t2 = Date.now()
    col(' time 2 ' + t2);
    col(i);
}, 100);

col('*');
var y = function ___wateRes(res, delay, max_num_delay) {
    for (var i = 0; i < max_num_delay; i++) {
        col(res);
        col(Date.now());
        col(!res);
        if (!res) {
             var run = setTimeout(function () {

            }, delay);
        }
    }
}
setTimeout('', 10000);
// debugger;
y(t2, 10000, 3);
col('diff ==' + (t2 - t1));

// function trr(intrv){
//     setTimeout('' , intrv)
// }
// var ttt = my_dec_TimsDuring(trr, 1);
// ttt(150);
// // col(t2 - t1);

// var t1 = performance.now();
// // var t2;
// setTimeout(function () {
//     window.t2 = performance.now()
// }, 100);
