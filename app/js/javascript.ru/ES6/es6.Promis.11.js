/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// let p = new Promise((resolve, reject) => {
//     // то же что reject(new Error("o_O"))
//     // throw new Error("o_O");
// })
// p.then(col, col); // Error: o_O
//
// let p1 = new Promise(function(resolve, reject) {
//     resolve("Успех!");
//     // или
//     // reject("Ошибка!");
// });
//
// debugger;
// p1.then(function(value) {
//     col(value); // Успех!
// }, function(reason) {
//     col(reason); // Ошибка!
// });
//
// let p2 = new Promise(function(resolve, reject) {
//     resolve(1);
// });
//
// p2.then(function(value) {
//     console.log(value); // 1
//     return value + 1;
// }).then(function(value) {
//     console.log(value); // 2
// });
//
// p2.then(function(value) {
//     console.log(value); // 1
// });

function resolveLater(resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 1000);
}
function rejectLater(resolve, reject) {
    setTimeout(function () {
        reject(20);
    }, 1000);
}
// debugger;
let p1 = Promise.resolve("foo");
let p2 = p1.then(function() {
    // Возвращает обещание, которое будет разрешено значением 10 через 1 секунду
    return new Promise(resolveLater);
});
p2.then(function(v) {
    console.log("resolved", v);  // "resolved", 10
}, function(e) {
    // не вызвано
    console.log("rejected", e);
});

let p3 = p1.then(function() {
// Возвращает обещание, которое будет отброшено значением 20 через 1 секунду
    return new Promise(rejectLater);
});
p3.then(function(v) {
    // не
    console.log("resolved", v);
}, function(e) {
    console.log("rejected", e); // "rejected", 20
});