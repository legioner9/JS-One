/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
let ttt = performance.now();
col('ini time ' + performance.now());

function my_Deb(d_f, ms) {
    col('Deb time = ' + (performance.now() - ttt))
    let timer = null;
    let i = 0;
    function WR() {
        i++;
        const onComp = function () {
            col('Comp time = ' + (performance.now() - ttt))
            col(i)
            d_f.apply(this, arguments);
            timer = null;
        }
        col('timer1 = ' + timer);
        if (timer) {
            col('clear = ' + timer);
            clearTimeout(timer);
        }
        timer = setTimeout(onComp, ms);
        col('timer2 = ' + timer);
    };
    return WR;
}

function ini_g(a) {
    col('run func ini_g , a = '+ ' ' + a + ' ' + (performance.now() - ttt));
}

var ini_g = my_Deb(ini_g, 1000);

ini_g();
setTimeout(function () {
    ini_g();
}, 500);
setTimeout(function () {
    ini_g();
}, 1200);
