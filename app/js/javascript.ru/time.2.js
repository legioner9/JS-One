/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
col('*');

(function () {
    var i = 0;
    var arr_i =[0];
    var io = setTimeout(function run() {
        i++;
        col(Math._fib(35));
        arr_i[i] = performance.now()
        col('i' + i +' ' +( arr_i[i] - arr_i[i-1]));
        if (i <10) setTimeout(run ,10);
    }, 10);
})();

col('**');

(function () {
    var j = 0;
    var arr_j =[0];
    var io2 = setInterval(function () {
        // col(Math._fib(25));
        j++;
        arr_j[j] = performance.now()
        col('j' + j +' ' +( arr_j[j] - arr_j[j-1]));
        if (j == 10) clearInterval(io2);
    }, 100);
})();

col('***');
