/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let arr = [1, 4, 8, 80, 4, 4];
arr = arr.slice(arr.indexOf(8));
// arr = str.split(',')
col(__my_primeNtoM(5, 15));

//All entranse of element
window.__my_AllIndexEnterInArr = function (arr_init, item) {
    let arr = [];
    let pos = arr_init.indexOf(item)
    if (~pos) arr.push(pos);
    else return arr;
    do {
        if (~arr_init.indexOf(item, ++pos)) {
            pos = arr_init.indexOf(item, pos)
            arr.push(arr_init.indexOf(item, pos));
        } else return arr;
    } while (pos < arr_init.length)
    return arr;
}


arr = [1, 4, 8, 80, 4, 88, 4, 8];
let arr_1 = __my_AllIndexEnterInArr(arr, 8);

let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) break nextPrime; // не подходит, берём следующее
        }

        col(i); // простое число
    }


col(__my_primeNtoMContinue(5, 10));

Math.__my_RandInteger_A_B = function (a, b) {
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    return Math.floor(a + Math.random() * (b - a + 1));
}
let rand_arr = [];
for (let i = 0; i < 10; i++) {
    rand_arr[i] = 0;
}
for (let i = 0; i < 1000; i++) {
    let mr = Math.__my_RandInteger_A_B(0, 9);
    rand_arr[mr] += 1;
}
col(parseFloat('nrtr556'));
let u = Math.pow(4, .75);
let h = +('  78  ');
let yo = ['casc', h, 'dcw222f']
let ur = yo.splice(0, 1, 'ewyf');

let a = 145.4569;
a = Math.floor(a / 10);

window.__my_numDigitalProp = function (a_init) {
    let k = 0, max = 0, b = 0, arr_dig = [];
    let a = a_init;
    while (a > 0) {
        let d = a % 10;
        arr_dig.push(d);
        b += d
        if (d > max) max = d;
        a = Math.floor(a / 10);
        k++;
    }
    let everage = b / k;
    let res = {};
    return window.__my_numDigitalProp[a_init] = {
        number: a_init,
        number_digit: k,
        max_digit: max,
        everage_of_digit: everage,
        sum_of_digit: b,
        arr_dig,
    }
    col(`number digit "${a_init}" = "${k}" max digit = "${max}" everage of digit =  "${everage}"`);
}

col(__my_numDigitalProp(43643).arr_dig);

let pu = __my_isPrime(-8);

let digitEvenOdd = function (a) {

}
let t = {tt: 'uio'};

let yy = t.hasOwnProperty()
let rr = new Array()
rr['sdc'] = 88;
rr['sdc'] = 99;
rr[1] = 99;
let yt = ~true;
let yt4 = ~(2);

let f = parseInt("11000", 2);

let oo = (-3.2345).toString(36);
let ooo = parseInt('-11111111111110000000000011111111111111111111111111011000110', 2);
let ol = 0x7f

let pp = window['undefined'] === undefined
let io = 'qwfe';
io[0] = 6;


function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function _checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function __checkAge(age) {
    return (age > 18 || confirm('Родители разрешили?'));
}

function min(a, b) {
    return a < b ? a : b;
}

col(min(1, 1));

__my_isIntegerPositiveArgs(2, -3);

// let asks = (question, yes, no) => confirm(question) ? yes() : no();
//
//
// asks('are you ready?',
//     () => col('yes of course)))'),
//     () => col('OOh Noo(((')
// );

let res = __my_pow(5, 3);
let r0 = __my_pow(-2, -2);


debugger;
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let doublNumProp = (obj) => {
    for (let prop in obj) {
        if ((typeof obj[prop]) == "number" && obj.hasOwnProperty(prop)) obj[prop] = obj[prop] * 2;
    }
}
doublNumProp(salaries);

