/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let rande = {
    first: 1,
    last: 5,
};
rande[Symbol.iterator] = function () {
    return {
        current: this.first,
        end: this.last,
        next() {
            if (this.current <= this.end) {
                return {
                    value: this.current++,
                    done: false,
                }
            } else {
                return {
                    done: true,
                }
            }
        }
    }
}
let ar = [];
for (let key in rande) {
    if (rande.hasOwnProperty(key)) col(key);
}

let sr = 'rulet';
let iter = sr[Symbol.iterator]();
while (true) {
    let item = iter.next();
    if (item.done) break;
    col(item.value + item.value);
}
let object_like_array = { // есть индексы и свойство length => псевдомассив
    0: "Hello",
    1: "World",
    length: 2
};

for (let i = 0; i < object_like_array.length; i++) {
    col(object_like_array[i]);
}
let bu = Boolean(object_like_array[Symbol.iterator]); // false

let arr_in = { // есть индексы и свойство length => псевдомассив
    0: "Hello",
    1: "World",
    length: 2
};
let thisArg_for_callback = {
    pre: ')))',
    map_callback(a) {
        return a + this.pre;
    }
}
debugger;
let arr_from = Array.from(arr_in, thisArg_for_callback.map_callback, thisArg_for_callback);


