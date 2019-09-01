/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let a = {};
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


Object.prototype._$_proxUndef = function () {
    return new Proxy(this, {
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
}
a = a._$_proxUndef();
a['cd'];
