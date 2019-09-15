/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let apples = 3;
let oranges = 5;

// let y = `bg ${apples}`._$_REss().Meth._$analysis_OfTemplString_()

//          |  s[0] | v[0] |s[1]| v[1]  |s[2]  |      v[2]      |s[3]

debugger;
let analys_str = function (strins, ...variabls) {
    return {
        strins,
        variabls,
    }
}
let a_str = analys_str`Sum of ${apples} +sdadc  ${oranges} =\n ds \b ${apples + oranges}!`;