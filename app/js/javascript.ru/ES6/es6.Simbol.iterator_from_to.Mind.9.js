/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let range = {
    _from: 1,
    to: 5,

    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (!this.current) {
            this.current = this._from
        }
        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            }
        } else delete this.current
        return {
            done: true
        }
    }
}
debugger;
for (let u of range) {
    col(u);
}
col(Math.max(...range));