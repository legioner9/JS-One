/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

/* TODO: PTR template - replase  */

option = {
    template: 'h : m : s'
}
let H = 'H';
option.template.replace('h', H);

/* TODO: PTR mane class prototype definder  */

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk =
    function () {
        col("ходит " + this.name);
    }

function Rabbit(name) {
    Animal.apply(this, arguments);
}


Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.walk = function () {
    Animal.prototype.walk.apply(this, arguments);
    col("прыгает " + this.name);
};

/* TODO: PTR maskFour ligic mask  */
function maskFour() {
    var bol, a = 2, b = 4, c = 8, d = 16;
    bol = a | b | c | d;
    col(bol & a);
}

/* TODO: PTR OOP State ( in to ADD proto Class )  */
function MenuOpenClose(state) {
    this.State_ = state || this.State_Close;
}

MenuOpenClose.prototype.State_Close = 0;
MenuOpenClose.prototype.State_Open = 1;

MenuOpenClose.prototype.inClose = function () {
    //CODE inClose
    this.State_ = this.State_Close;
}

MenuOpenClose.prototype.inOpen = function () {
    //CODE inOpen
    this.State_ = this.State_Open;
}

MenuOpenClose.prototype.openTo = function () {
    //OPEN code
    return `state is ${this.State_} result OPEN`;
}

MenuOpenClose.prototype.closeTo = function () {
    //CLOSE code
    return `state is ${this.State_} result CLOSE`;
}

MenuOpenClose.prototype.decodingState = function () {
    try {
        switch (this.State_) {
            case this.State_Close :
                return this.closeTo();
            case this.State_Open :
                return this.openTo();
            default : {
                col(`state is uncorrect = ${this.State_}`)
                new Error(`state is uncorrect`)
            }
        }
    } catch (e) {
        if (e.message == `state is uncorrect`) {
            //    Code for treat err State_ ( open , close)
        } else {
            throw e;
        }
    }
}

MenuOpenClose.prototype.resumeState = function () {
    col(this.decodingState());
}

function MenuOpenCloseAnimate(State) {
    MenuOpenClose.apply(this, arguments);
}

MenuOpenCloseAnimate.prototype = Object.create(MenuOpenClose.prototype);
MenuOpenCloseAnimate.prototype.constructor = MenuOpenCloseAnimate;

MenuOpenCloseAnimate.prototype.State_Animate = 2;

MenuOpenCloseAnimate.prototype.animateTo = function () {
    //CODE animateTo
    return `state is ${this.State_} result ANYMATE`;
}

MenuOpenCloseAnimate.prototype.decodingState = function () {
    switch (this.State_) {
        case this.State_Animate :
            return this.animateTo();
        default : {
            return this.__proto__.__proto__.decodingState.apply(this, arguments);
        }
    }
}

MenuOpenCloseAnimate.prototype.inAnimate = function () {
    this.State_ = this.State_Animate;
    col(new Date());
    col(`state is ${this.State_}`);
    this.tm = setTimeout(() => {
            this.__proto__.__proto__.inOpen.apply(this, arguments);
            col(new Date());
            col(`state is ${this.State_}`);
        }
        , 1000);
}

let me = new MenuOpenCloseAnimate();
col(me instanceof MenuOpenCloseAnimate);
col(me instanceof MenuOpenClose);
// debugger;
// me.resumeState();
// me.inAnimate();
// me.resumeState();

/* TODO: PTR Generator of iterator  */
class Users {
    constructor(users) {
        this.users = users;
        this.len = users.length;
    }

    //это генератор, который возвращает итератор
    * getIterator() {
        for (let i in this.users) {
            if (!this.users.hasOwnProperty(i)) continue;
            yield this.users[i];
            //хотя эта команда вызывается внутри цикла,
            //yield выполняется лишь один раз за вызов
        }
    }
}

const allUsers = new Users([
    {name: 'raja'},
    {name: 'john'},
    {name: 'matt'},
]);

//allUsersIterator называют итератором
// const allUsersIterator = allUsers.getIterator();

for (const u of allUsers.getIterator()) {
    col(u.name);
}

/* TODO: PTR [Symbol.iterator] as method of Obj  */
const users = [
    {name: 'raja'},
    {name: 'john'},
    {name: 'matt'},
];

users[Symbol.iterator] = function () {

    let i = 0;
    // let users = this.users;

    //этот возвращаемый объект называется итератором
    return {
        next() {
            // i++ or other code in each iteration
            if (i < users.length) {
                return {done: false, value: users[i++]};
            }
            return {done: true};
        },
    };
}

for (const u of users) {
    col(u.name);
}

/* TODO: PTR [Symbol.iterator] for array as method of CLASS  */
class Us {
    constructor(users) {
        this.users = users;
    }

    [Symbol.iterator]() {
        let i = 0;
        let users = this.users;

        //этот возвращаемый объект называется итератором
        return {
            next() {
                // i++ or other code in each iteration
                if (i < users.length) {
                    return {done: false, value: users[i++]};
                }
                return {done: true};
            },
        };
    }
}

const users = new Us([
    {name: 'raja'},
    {name: 'john'},
    {name: 'matt'},
]);

for (const u of users) {
    col(u.name);
}

/* TODO: PTR [Symbol.iterator] for object as method of CLASS and as method of Obj  */
class Us {
    constructor(users) {
        this.users = users;
    }

    [Symbol.iterator]() {

        let i = 0;
        let user = this.users;

        col(user);//return initial object
        //этот возвращаемый объект называется итератором
        return {
            next() {

                if (i < Object.keys(user).length) {

                    let key = Object.keys(user)[i++];
                    return {
                        done: false, value:
                            {key: key, value: user[key]} //return key and value[key]
                    };
                }
                return {done: true};
            }

        };
    }
}

const users = {
    a: {
        name: 'raja'
    },
    b: {
        name: 'john'
    },
    c: {
        name: 'matt'
    }
};
users.__proto__[Symbol.iterator] = function () {

    let i = 0;
    let user = this;

    col(user);//return initial object
    //этот возвращаемый объект называется итератором
    return {
        next() {

            if (i < Object.keys(user).length) {

                let key = Object.keys(user)[i++];

                return {
                    done: false, value:
                        {key: key, value: user[key]}//return key and value[key]
                };
            }
            return {done: true};
        }

    };
}
for (const u of users) {
    col(u);
}

let us_class = new Us({
    a: {
        name: 'raja'
    },
    b: {
        name: 'john'
    },
    c: {
        name: 'matt'
    }
})
for (let u_c of  us_class) {
    col(u_c);
}

/* TODO:PTR [Symbol.iterator] inside in Object simple from to */
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

/* TODO: PTR *[Symbol.iterator]  Genrrator-Iterator  */
class Users{
    constructor(users) {
        this.users = users;
        this.len = users.length;
    }

    //это генератор, который возвращает итератор
    *[Symbol.iterator](){
        for (let i in this.users){
            if (!this.users.hasOwnProperty(i)) continue;
            yield (this.users[i].name +' ' + i);
            //хотя эта команда вызывается внутри цикла,
            //yield выполняется лишь один раз за вызов
        }
    }
}

const allUsers = new Users([
    { name: 'raja' },
    { name: 'john' },
    { name: 'matt' },
]);

for(const u of allUsers){
    col(u);
}