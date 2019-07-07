/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let range = {
    _from: 1,
    to: 5
}

range[Symbol.iterator] = function () {

    let start = this._from;
    let stop = this.to;
    return {
        next() {
            // i++ or other code in each iteration
            if (start <= stop) {
                col(Math.random().toString(36).slice(2));
                return {done: false, value: start++};
            } else {
                return {done: true};
            }
        },
    };
}
debugger;
for (let u of range) {
    // col(u);
}
col(Math.max(...range));