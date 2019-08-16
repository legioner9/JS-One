/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let filterRange = function (arr, a, b) {
    let _arr = arr;
    if (a == undefined || b == undefined) return _arr;
    let _a = Math.min(a, b);
    let _b = Math.max(a, b);
    _arr = _arr.filter(item => item >= _a && item <= _b);
    arr = _arr.slice(0);
}
let filterRangeInPlase = function (arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= a || arr[i] >= b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let a = [5, 6, 7];
let b = [1, 2, 3];

let arr_1 = [1, 4];
filterRange(arr_1, 1, 3);
col(arr_1);

debugger;
let arr_2 = [1, 4];
filterRangeInPlase(arr_2, 1, 3);
