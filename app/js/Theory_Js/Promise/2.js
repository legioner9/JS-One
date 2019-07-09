/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// let keepsHisWord ;
let fi;
cp(1);
let promise2 = new Promise(function (resolve, reject) {
    cp(2)
    setTimeout(function () {
        cp(3);
        if (fi < 100000) {
            resolve({
                message: "The man likes to keep his word",
                code: "aManKeepsHisWord"
            });
        } else {
            reject('Nu e mae(((')
        }
    }, 10 * 1000);
});
console.log(promise2);

promise2.then(function (result) {
    console.log(promise2);
    console.log('Промис сработал') + cp(4);
}, function (err) {
    console.log('Что-то сломалось') + cp(5);
}).then(function (result) {
    console.log('Промис сработал') + cp(6);
}, function (err) {
    console.log('Что-то сломалось') + cp(7);
});

// debugger;
fi = _fib(25);
