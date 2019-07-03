/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let Garry = class {
    constructor(name) {
        this.name = name;
    }

    sayHi(word) {
        col(` ${word} ! ${this.name} `);
    }
}

let gar = new Garry('Hobbit');
gar.sayHi('HHII');
new Garry('Mary').sayHi('Qucu');

col(__my_MRTS);
debugger;
