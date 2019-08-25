/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let arr = [1, 2, 4, 'a', ['b'], {c: 'c'}];
arr.splice(0);
let $arr = arr._$();
$arr.Splice(0, 1, ['ins']);
let arr_sl = $arr.Slice(1, 4);
let arr_similar = $arr.Copy();
debugger;
arr_similar._$().Clear();
