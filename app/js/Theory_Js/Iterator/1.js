/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true};
        }
    }
}

let it = makeIterator(['yo', 'ya']);
console.log(it.next()); // 'yo'
console.log(it.next()); // 'ya'
console.log(it.next());  // true
console.log(it.next());  // true

let arr_prop = [];
let obj_ini = {a: 'aa', b: 'bb'};

obj_ini[Symbol.iterator] = function () {
    let i = 0;
    let arr_key = Object.getOwnPropertyNames(this);
    return {
        next: () => {
            if (i < arr_key.length) {
                let k = arr_key[i++]
                return {value: {obj: obj_ini[k], k}, done: false}
            } else {
                return {done: true}
            }
        }
    }
}


debugger;
// col(obj_ini[Symbol.iterator]())
for (let volume of obj_ini) {
    col(volume);
}