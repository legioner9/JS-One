/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class MyArray {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

debugger;
col([] instanceof MyArray); // true