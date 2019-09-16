/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let ob = {};
col(Object.isSealed(ob));//false
Object.preventExtensions(ob);
col(Object.isSealed(ob));//true

ob = {a: 'aa'};
Object.defineProperty(ob, 'a', {configurable: false});
col(Object.isSealed(ob));//false

ob = {a: 'aa'};
Object.seal(ob);
debugger;
col(Object.isSealed(ob));//true
col(ob._$_REss().Meth._$isSealed_());
