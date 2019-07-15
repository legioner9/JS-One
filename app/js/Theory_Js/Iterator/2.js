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

obj_ini[Symbol.iterator] = function* () {
    // let i = 0;
    let arr_key = Object.getOwnPropertyNames(this);
    for (let i = 0 ;  i < arr_key.length ; i ++) {
        let k = arr_key[i]
        yield ({obj: obj_ini[k], k})
    }
}


// col(obj_ini[Symbol.iterator]())
debugger;
for (let volume of obj_ini) {
    col(volume);
}
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    for(let i = 0 ; i < 5 ; i++)
    yield i;
};
col([...myIterable] )// [1, 2, 3]
for (let value of myIterable){
    col(value);
}