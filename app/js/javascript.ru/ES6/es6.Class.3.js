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

let User = class {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    static CreateGuest(){
        return  new  User('Guest of' , ' ouer ')
    }

    set fullName(newValue) {
        [this.name, this.surname] = newValue.split(' ');
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    ['text'.toUpperCase()]  ()  {
        col(`Passed !!! name of meth : ${this.name}`);
    }
}

let us = new User();
us.fullName = 'Paul Famus';
col(us.name);
us.surname = 'Duas';
col(us.fullName);
let n = us.name;
us.TEXT();
debugger;
let op = User.CreateGuest();

