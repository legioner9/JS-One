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
    Math._fib(10);
    for (i = 0; i < 1000; i++) hardWork[i % 2] = i;
    t1 = performance.now()
    col(' time 1 ' + t1)
}

hardWork();

var fun_reserch = setTimeout(function () {
    t2 = performance.now()
    col(' time 2 ' + t2);
    col(i);
}, 10);

col('*');

// (my_dec_TimsDuring(Math._fib ))(25);




    for (var i = 0 ; i <10 ; i++) {
        Math._fib(35);
        col(i);
        col('t2 = ' + t2);
        col(!(!t2));
        if (!(!t2)) {
            col('success , i = ' + i);
             t2 - t1;
        }
    }

col('Not success , i = ' + i);





