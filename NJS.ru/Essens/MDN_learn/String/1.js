/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let a = 'anCrtc';
let res_m = 'anCrtc'._$_REss().Meth._$matchAll_RArrRes_(/c/gi);
let $a = a._$_REss();
let gen = a.matchAll(/c/gi);
let tt = String.raw`Привет\n${2 + 3}!`;
let d = new String('anCrtc');
let d_s = d.valueOf();
let valueStr = ['h', 'ĥ', 'æ', 'ae', 'g', 'ġ'],
    normArr = valueStr.map(function (text) {
        return text.normalize('NFKC'); // (по умолчанию 'NFC') normArr (после сортировки) -> [ae, g, h, æ, ġ, ĥ]
        //return text.normalize('NFD'); // normArr (после сортировки) -> [ae, g, ġ, h, ĥ, æ]
        //return text.normalize('NFKC'); // normArr (после сортировки) -> [ae, g, h, æ, ġ, ĥ]
        //return text.normalize('NFKD'); // normArr (после сортировки) -> [ae, g, ġ, h, ĥ, æ]
    });


function f(strings, ...values) {
    // col(strings);
    // col(values);
    // col(JSON.stringify(strings));     // ["Sum of "," + "," =\n ","!"]
    // col(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
    // col(JSON.stringify(values));      // [3,5,8]
    return {
        strings,
        values
    }
}

let apples = 3;
let oranges = 5;
debugger;
// let y = `bg ${apples}`._$_REss().Meth._$analysis_OfTemplString_()

//          |  s[0] | v[0] |s[1]| v[1]  |s[2]  |      v[2]      |s[3]
let str = _$analysis_OfTemplString_`Sum of ${apples} + ${oranges} =\n ${apples + oranges}!`;
let str_1 = f`Fdfc t 78 sv 
dfvv 990 
dfvv  dfsa 0`;
