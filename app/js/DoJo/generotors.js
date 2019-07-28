/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
let s;
let gen = {
    * [Symbol.iterator]() {
        s = yield 10;
        s = yield  20;
    }
}


for (let val of gen) {
    col(val);
    col(`s= ${s}`);
}

let range = function* (start, end) {
    let current = start;
    while (current <= end) {
        yield current;
        current++;
    }
}
for (value of range(1, 3)) {
    col(value);
}

let nyield = function* () {
    let res = yield 45;
    let res_2 = yield res * 2;
    let res_3 = yield res_2 * 2;
    col(`res_3= ${res_3}`);
}
let ny = nyield();
debugger;
let n = ny.next().value;
debugger;
let n2 = ny.next(n).value;
debugger;
let n3 = ny.next(n2).value;
col(n3);
debugger;

