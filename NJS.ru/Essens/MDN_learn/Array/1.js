/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let arr = [1, {y: 'yy'}, ['betrbs']];
let $arr = arr._$_REss();


let $arr_1 = $arr.Meth._$splice_$RIL(1, 1);
let $arr_2 = $arr.Enum._$keys_Array_Iterator_();
let arr_iter = arr.entries();
let a = [];
for (let i = 0; i < arr.length; i++) {
    a.push($arr_2.next().value);
}
let n_arr = [1, 5, 8];
let thisArg = {
    a: 5,
    cf: function (b) {
        return b > this.a + 1;
    }
};

[1, 5].reduce_((a, b) => a + b);


let io = [2, 5, 8].indexOf_(1);
(function () {
    col([].includes.call(arguments, 'a'))
})('a');
let res_find = [2, 4, 7, 11].find(thisArg.cf, thisArg)
let i_n_arr = [8, 4, -5].every(a => a > 0);
let ii = n_arr.forEach(a => a > -8);
// let ii = n_arr._$_REss().Meth._$forEach_(a => a > -8);

let $arr_3 = $arr.Meth._$splice_$RIL(1, 1);
$arr.Meth._$splice_$CIP(1, 1);

let hf_1 = (a) => a + 1;
let arr_ = [2];

let hf_2 = (function () {
    col(arguments);
    let h = hf_1;
    let af = arr_;
    return function (a, b) {
        let aaf = af;
        return h(a) + b;
    };
})(5);

let e = hf_2(1, 2);
let Modul_ = (function () {
    let privateMethod = function () {
        col('privat');
    }
    return {
        publicMethod() {
            privateMethod()
        }
    }
})();

let arr_it = [2, 5, 10]
arr_it[Symbol.iterator] = function () {
    let this_ = this;
    let i = 0;
    return {
        next() {
            if (i < this_.length) {
                return {
                    done: false,
                    value: this_[i++],
                }
            } else {
                return {
                    done: true,
                    value: undefined,
                }
            }
        }
    }
}
let iter = arr_it[Symbol.iterator]();
col(iter.next());
col(iter.next());
col(iter.next());
col(iter.next());
arr_it[Symbol.iterator]();
for (let item of arr_it) {
    col(item);
}


let prot = function (a) {
    let a_ = a;
    return {
        a: this.a_ + 1,
        proto_func() {
            col(this.a)
        }
    }
}
let init_arr = [];
// Object.setPrototypeOf(init_arr, prot.call(prot, 4));
let u = {};

arr_ = [4, 6]
let arr_entries = Array.from(arr.values());
let if_en = arr_ == arr_entries;
let obj = {w: 'ee ', o: [2]}
let obj_entries = Object.fromEntries(Object.entries(obj));

for (const eKey in obj) {
    let prop = eKey;
    let p = obj.propertyIsEnumerable(eKey);
    let h = obj.hasOwnProperty(eKey);
}


let ar_start_end = [];
ar_start_end.start = 0;
ar_start_end.end = 3;
ar_start_end._$_REss().Symb._$Symbol_iterator_StartEnd();
debugger;
for (const uElement of ar_start_end) {
    col(uElement);
}


