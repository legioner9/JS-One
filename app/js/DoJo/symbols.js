/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
let sss = new Function();
let simb = Symbol.for('a');//Global reestr
let simb_2 = Symbol.for('a');
col(Symbol.keyFor(simb))
col(simb);
// col(simb_2);
col(simb === simb_2);

let user = {
    name: 'whoIsIt?',
    // [Symbol.for('password')]: 'fdsfv234' // in Global Symbol.for('password') existing
    [Symbol.for('Password')]: Symbol.for('name')
}

let ku = Object.keys(user);
let oku = Object.getOwnPropertyNames(user);

let passwor = user[Symbol.for('password')];
let cont_pass = Symbol.for('name');

debugger;