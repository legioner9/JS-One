/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */


// function MyClass() {
//     SuperClass.call(this);
//     OtherSuperClass.call(this);
// }
//
// MyClass.prototype = Object.create(SuperClass.prototype); // наследование
// mixin(MyClass.prototype, OtherSuperClass.prototype); // примешивание
let ini = {a: 'a'};
let cr_ = ini._$_REss().Meth._$create_NewWithprotoFromIntObj({
    pp: {
      value: 2,
      enumerable: false,
      configurable: false,
      // writable:false,
      // get:function () {
      //
      // },
      // set:function () {
      //
      // },
    }
})
let cr = Object.create({a: 'a'}, {
    b: {
        value: 7
    }
});
let cr_1 = Object.create(cr, {
    x: {
        value: 99
    }
});
debugger;
let aa = {};
aa._$_REss().Meth._$defineProperties_Value(
  {
    props: 'ee',
    value: 9,
  });