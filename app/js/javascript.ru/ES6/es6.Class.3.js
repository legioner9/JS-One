/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let Garry = class {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        col(` Hi ${this.name} `);
    }
}