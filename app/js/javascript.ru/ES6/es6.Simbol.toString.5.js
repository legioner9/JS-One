/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Cat {
    get [Symbol.toStringTag]() {
        return 'Cat is';
    }
}

let dog = function Dog(){};
dog[Symbol.toStringTag] = 'Dog is';
debugger;
// class Cat {}
let cat = new Cat();
col(cat[Symbol.toStringTag]);//Cat

// function Dog() {}
col(dog[Symbol.toStringTag] );// Dog
