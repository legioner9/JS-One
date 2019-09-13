/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
debugger;

function MyClass() {
    SuperClass.call(this);
    OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); // наследование
mixin(MyClass.prototype, OtherSuperClass.prototype); // примешивание
let ini = {a: 'a'};
let cr_ = ini._$_REss().Meth._$create_NewWithprotoFromIntObj({
    pp: {
        value: 2
    }
})
let cr = Object.create(ini, {
    b: {
        value: 7
    }
});
let cr_1 = Object.create(cr, {
    x: {
        value: 99
    }
})