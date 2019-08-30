/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
let myRe = /d(b+)(d)/i;
let myArray = myRe.exec('cdbBdbsbz');
let t_reg = myArray.$type_();

debugger;
let str = 'varf';//p-sring
let str_similar = 'varf';
let bol_str = str == str_similar;
let ob_str = new String('vdvevfgw');//ob-string
let tfn = () => 1;
let t_tfn = tfn._$().Type

delete ob_str[0];
let if_str = ob_str.valueOf();// convert ob-string to p-sring
let if_str_ = ob_str.toString();// convert ob-string to p-sring
let ob_str_similar = new String('vdevfgw');
let bol_ob_str = ob_str == ob_str_similar;

let sum_str = '1+5';
let e_sum_str = eval(sum_str);

ob_str.replace('v', 'd');//"ddevfgw"
ob_str.localeCompare('vde');//1
ob_str.slice(0, 3);//"vde"
let ob_io = typeof ob_str;
let ob_io_ = ob_str.$type_();
let p_io = typeof str;
let p_io_ = str.$type_();
