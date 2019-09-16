/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
'use strict';
const ob = {};
// Object.preventExtensions(ob);
ob._$_REss().Meth._$preventExtensions_();
debugger;
try {
    Object.defineProperty(ob, 'a', {value: 5});
} catch (e) {
    col(e);//TypeError
}
try {
    ob.t = 0;
} catch (e) {
    col(e);//TypeError
}