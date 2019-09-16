/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let ob = {
    hasOwnProperty() {
        return false;
    },
    a() {
    },
    b: 4,
}
col(ob.hasOwnProperty('a'));// always false!!!
debugger;
col(({}).hasOwnProperty.call(ob, 'a'));