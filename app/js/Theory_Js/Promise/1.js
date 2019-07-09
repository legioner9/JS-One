/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let keepsHisWord = true ;
let promise1 = new Promise(function(resolve, reject) {
    if (keepsHisWord) {
        resolve("The man likes to keep his word");
    } else {
        reject("The man doesnt want to keep his word");
    }
});
console.log(promise1);

// debugger;
cp(1);
let promise2 = new Promise(function(resolve, reject) {
    cp(2)
    setTimeout(function() {
        cp(3);
        resolve({
            message: "The man likes to keep his word",
            code: "aManKeepsHisWord"
        });
    }, 10 * 1000);
});
console.log(promise2);