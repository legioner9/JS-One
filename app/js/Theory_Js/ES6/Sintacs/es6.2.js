/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let gr = {
    title: 'menu',
    message: 'text message'
}

let {widht: w = 300, height: h = 100, title: t, ...other_arg} = {
    title: ['menu', ' fuds'],
    message: {'text message': 5, 5: 'text message'}
};

function sayHi(who = getCurrentUser().toUpperCase()) {
    col('Привет, ' + who);
}

function getCurrentUser() {
    return 'Вася';
}

sayHi('Ury'); // Привет, ВАСЯ


function Dik(diks = hier()) {
    col(`Hi + ${diks}`);
}

function hier() {
    return ' ruu uur )))';
}

Dik();

let tyr = [1, 5];
let s = () => a + b;
col(s([a, b] = tyr));
col(s.name);

debugger;
let ar = [6, 12, 8];
ar = ar.sort((a, b) => a - b);

function f1() {
    let show_arg = () => col(arguments.callee.name);
    show_arg();
}
f1(44);