/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let sim = Symbol();
col(Symbol);
col(Symbol());
col(sim);

let simb = Symbol.for('sim_name');
col(Symbol.keyFor(simb));
col(Symbol.for('sim_name') === simb);

let obj = {
    iterator: 1,
    [Symbol.iterator] :function () {

    }
}
col(obj[Symbol.iterator]);
col(Symbol.iterator);

debugger;
let si = Symbol.for('My func');
let a = {
    ss : 'ss',
    si (){
        col(`ss = ${this.ss}  si = ${this.si}`)
    }
};
a.si();