/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */


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
                if (i < Object.keys(menu).length) {
                    return {done: false, value: users[i++]};
                }
                return {done: true};
            },
        };
    }
}

const users =
    {
        a: {name: 'raja'},
        b: {name: 'john'},
        c: {name: 'matt'}
    }
;
users[Symbol.iterator] = function () {

    let i = 0;
    // let users = this.users;

    //этот возвращаемый объект называется итератором
    return {
        next() {
            // i++ or other code in each iteration
            if (i < Object.keys(users).length){
                return {done: false, value: users[i++]};
            }
            return {done: true};
        },
    };
}
debugger;
for (const u of users) {
   let us =users.u
    col(us.name);
}