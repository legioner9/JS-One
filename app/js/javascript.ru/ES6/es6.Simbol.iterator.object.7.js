/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */


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