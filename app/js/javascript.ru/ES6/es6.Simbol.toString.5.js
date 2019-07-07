/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Cat {
    get [Symbol.toStringTa]() {
        return 'Cat is';
    }
}

let dog = function Dog(){};
dog[Symbol.toStringTa] = 'Dog is';
debugger;
// class Cat {}
let cat = new Cat();
col(cat[Symbol.toStringTa]);//Cat

// function Dog() {}
col(dog[Symbol.toStringTa] );// Dog
