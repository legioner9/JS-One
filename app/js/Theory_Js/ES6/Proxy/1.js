/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */


let target = {};
let handler = {
    get(target, prop) {
        if (target[prop]) {
            col(`reading prop = ${prop}`);
            return target[prop]
        } else {
            col(` target[${prop}] is not exist `)
        }

    },
    set(target, prop, value) {
        col(`setting  ${prop} is ${value}`)
        target[prop] = value;
        return true;
    },
    deleteProperty(target, prop) {
        col('delete is not resolve')
        return true;
    },
    has(target, prop) {
        return true;// ... in target alvays true
    }
}

let target = {};
let proxy = new Proxy(target, handler);
proxy['a'];
proxy['a'] = 'aa';
proxy['a'];
col(target['a']);
proxy['b'] = 'bb';

debugger;
col('t' in target); //always true
delete proxy['a'];
delete proxy['b'];
delete proxy['c'];

let target_func = function sum(a, b) {
    return a + b;
}

let proxy_func = new Proxy(target_func, {
    construct(target , argumentList)
    enumerate(target) {
    }
})









