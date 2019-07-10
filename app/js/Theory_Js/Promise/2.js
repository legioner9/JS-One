/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// let keepsHisWord ;
let fi;
cp(1);
let promise2 = new Promise(function (resolve, reject) {
    cp('enter promise');
    setTimeout(function () {
        cp('enter time out');
        if (fi <100000) {
            resolve(
                 function () {col('UUURRRAAA')}
            );
        } else {
            cp('enter reject')
            reject('Nu e mae(((')
        }
    }, 1 * 10);
    cp('exit promise')
});
col(promise2);

promise2.then(function (result) {
    col(result + ' is result');
    col(promise2);
    col('Промис сработал') + cp(4);
}, function (err) {
    col(err + ' is err');
    col(promise2);
    col('Что-то сломалось') + cp(5);
})
cp('start fib 25')
fi = _fib(25);
cp('end fib 25')
