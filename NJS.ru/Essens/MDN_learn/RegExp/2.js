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
    str: `333<span class="my_1">
<span class="my_2">`,
    regexp: /<(?<result>(?<teg>[a-z]+)\s*(?<volume>[^>]*))>/,
}
let u_reg = u.regexp;

/*u_reg[Symbol.match] = function (str) {
    let result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
        return 'VALID';
    }
    return 'INVALID';
}*/
// u_reg._$_REss().Symb._$Symbol_match();

/*u_reg[Symbol.replace] = function (str, replace) {
    let replace_ = `<< ${replace} >>`
    return RegExp.prototype[Symbol.replace].call(this, str, replace_);
};*/
// class RegExp2 extends RegExp {
//     constructor(str) {
//         super(str)
//         this.pattern = str;
//     }
//
//     [Symbol.search](str) {
//         return str.indexOf(this.pattern);
//     }
// }
let reg_z = /z/
reg_z[Symbol.search] = function (str) {
    return {
        index: str.indexOf(this.source),

    };
}

// let reg_U = new RegExp2('c')
let reg_d = /d/;
reg_d._$_REss().Symb._$Symbol_search_LeftRightCont();


let rr = `   cszd fds`.search(reg_d);
debugger;
let re_m = /-/;
re_m._$_REss().Symb._$Symbol_split_brackets_RetJoin(['<', '>'])
let res_split = 'v-s-d'.split(re_m);

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

class RegExp1 extends RegExp {
    [Symbol.replace](str) {
        return RegExp.prototype[Symbol.replace].call(this, str, '#!@?');
    }
}

console.log('football'.replace(new RegExp1('foo')));
// expected output: "#!@?tball"
