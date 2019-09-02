/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let a = {};
let f = {a: a};
let b = new Proxy(a, {
        get: function (target, name) {
            if (name in target) {
                return target[name]
            } else {
                col(`Prop : "${name}" in Target : "${target}" missing `);
                return undefined;
            }
        }
    }
);
debugger;


a = a._$_proxUndef();
a['cd'];
