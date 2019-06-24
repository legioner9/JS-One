/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
function showArg() {
    var arg_arr = Array.prototype.slice.call(arguments);
    col(arg_arr);
}

showArg(1, 'edcv ', undefined, null);
col(String.prototype);
String.prototype.repeat = function (times) {
    return new Array(times + 1).join(this);
//    Arr(n).length = n;
}
// col(String.prototype);
// Object.prototype.__ms = function (ms) {
//     var f = this;
//     return function () {
//         setTimeout(() => f.apply(this, arguments)
//             , ms);
//     }
// }
// Object.prototype.toEveryPropFunc = function (f) {
//     for (var prop in this) {
//         if (!this.hasOwnProperty(prop)) continue;
//         var value = this[prop];
//         f.call(value, [prop, value]);
//     }
// }
// Object.defineProperty(Object, 'toEveryPropFunc', {
//         enumerable: false
//     }
// )
function Rabbit(name) {
    this.ra = 'uu'
}

let ra = new Rabbit('tyyra');

function fa(a) {
    col(a);
}

col(fa.__my_ms(1000));
fa.__my_ms(1000)(33);
ra.rubby = 77;
Object.defineProperty(ra, 'rubby', {
        enumerable: false
    }
)
ra.__my_toEveryPropFunc(col);
o = new Object();
o.propOne = null;


col(o.hasOwnProperty('propOne'));   // returns true
o.propTwo = undefined;
col(o.hasOwnProperty('propTwo'));   // returns true
// o.__my_toEveryPropFunc(col);
// Object.defineProperty(obj, prop, descriptor);


Object.prototype.__my_OwnPropObject = function () {
    let init = {};
    for (let prop in this) {
        if (!this.hasOwnProperty(prop)) continue;
        let value = this[prop];
        init[prop] = value;
    }
    let _this = this;
    _this.res__my_OwnPropObject = init;
}
o.__my_OwnPropObject();
o.__my_AllPropObject();
o.__my_ProtoPropObject();


Object.prototype.__my_AllPropObject = function () {
    let init = {};
    for (let prop in this) {
        let value = this[prop];
        init[prop] = value;
    }
    let _this = this;
    _this.res__my_AllPropObject = init;
}


Object.prototype.__my_ProtoPropObject = function () {
    let init = {};
    for (let prop in this) {
        if (!this.hasProtoProperty(prop)) continue;
        let value = this[prop];
        init[prop] = value;
    }
    let _this = this;
    _this.res__my_ProtoPropObject = init;
}