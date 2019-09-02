/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let a = 'anCrtc';
let res_m = 'anCrtc'._$_REss().Meth._$matchAll_RArrRes_(/c/gi);
let $a = a._$_REss();
let gen = a.matchAll(/c/gi);
debugger;
let valueStr = ['h', 'ĥ', 'æ', 'ae', 'g', 'ġ'],
    normArr = valueStr.map(function (text) {
        return text.normalize('NFKC'); // (по умолчанию 'NFC') normArr (после сортировки) -> [ae, g, h, æ, ġ, ĥ]
        //return text.normalize('NFD'); // normArr (после сортировки) -> [ae, g, ġ, h, ĥ, æ]
        //return text.normalize('NFKC'); // normArr (после сортировки) -> [ae, g, h, æ, ġ, ĥ]
        //return text.normalize('NFKD'); // normArr (после сортировки) -> [ae, g, ġ, h, ĥ, æ]
    });


