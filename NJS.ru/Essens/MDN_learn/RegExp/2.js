/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let reg_1 = /(\w+)/g;
let reg_2 = /(\w+)/g;
reg_1[Symbol.matchAll] = function (str) {
    let result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
        return null;
    }
    return Array.from(result);
}

let res_reg_1 = 'csadc dfvafdv'.matchAll(reg_1);
let res_reg_2 = 'csadc dfvafdv'.matchAll(reg_2);

let u = {
    str: `<span class="my_1">
<span class="my_2">`,
    regexp: /<(?<result>(?<teg>[a-z]+)\s*(?<volume>[^>]*))>/,
}
let u_reg = u.regexp;

let $u = u_reg._$_REss()
let res_match = u.str.matchAll($u);

debugger;

class MyRegExp extends RegExp {
    [Symbol.matchAll](str) {
        let result = RegExp.prototype[Symbol.matchAll].call(this, str);
        if (!result) {
            return null;
        }
        return Array.from(result);
    }
}

let re = new MyRegExp('-[0-9]+', 'g');
console.log('2016-01-02|2019-03-07'.matchAll(re));