/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

const test = {
    name: 'test object',
    createAnonFunction: function() {
        return function () {
            console.log(this.name);
            console.log(arguments);
        };
    },

    createArrowFunction: function() {
        return () => {
            console.log(this.name);
            console.log(arguments);
        };
    }
};

const anon = test.createAnonFunction('hello', 'world');
const arrow = test.createArrowFunction('hello', 'world');
anon();
arrow();
