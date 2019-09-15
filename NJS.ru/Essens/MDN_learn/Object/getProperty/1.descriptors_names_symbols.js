/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let descriptor = {a: 'aa'}._$_REss().Meth._$getOwnPropertyDescriptor_('a');

let descriptors = Object.getOwnPropertyDescriptors({a: 'aa', b: 'bb'});
let descriptors_ = {a: 'aa', b: 'bb'}._$_REss().Meth._$getOwnPropertyDescriptors_();

let keys = Object.getOwnPropertyNames({a: 'aa', b: 'bb'});
let keys_ = Object.keys({a: 'aa', b: 'bb'});// only for enumerable proerty

let a = Symbol('a');
let b = Symbol.for('b');
let ob = {};
ob[a] = 'localSymbol';
ob[b] = 'globalSymbol';

let s_ob = Object.getOwnPropertySymbols(ob);
debugger;
let s_a = Symbol.keyFor(a);
let s_b = Symbol.keyFor(b);
let b_ = Symbol.for('b');
col(b == b_);// true