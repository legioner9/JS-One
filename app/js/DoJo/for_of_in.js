/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let obj = {
    a: 'aa',
    b: ' bb',
    [Symbol.iterator]() {

        let i = 0;
        let user = this;

        col(Object.keys(user));//return initial object
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
let arr = ['dsa', 'cqa']
for (let key in obj) {
    col(key);
    col(obj[key]);
}
for (let val of arr) {
    col(val);
}
debugger;
for (let val of obj) {
    col(val);
}
