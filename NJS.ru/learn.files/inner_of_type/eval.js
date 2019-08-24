/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let fctStr1 = "function r() {col(1)}"
let fctStr2 = "(function r() {col(2)})";
col(eval(fctStr1));//underfined
col(eval(fctStr2));//function a() {col(2)}
eval(fctStr2)(); // 2
let ob_str = new String('cerf')
let p_str = '9*(4/9)';
let e_p_str = eval(p_str);
debugger;

let str = 'if(a){1+1} else {2+4}';
debugger;
try {
    // col(eval(str));
    let a = true;
    col(eval(str));
    a = false;
    col(eval(str));
} catch (e) {
    col(e);
}

