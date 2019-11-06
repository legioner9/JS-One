/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

var promise1 = new Promise(function (resolve, reject) {
    let m = 9;
    setTimeout(function () {
        resolve({m});
    }, 300);
    setTimeout(function () {
        reject(`foo ${m}`);
    }, 40);
});

promise1
.then(function (value) {
    console.log(value, 'then');
    // expected output: "foo"
}, function (err) {
    console.log(err, 'catch 1');
    return Promise.reject('new reason')
})
.catch(function (err) {
    console.log(err, 'catch 2');
    // expected output: "foo")
});
