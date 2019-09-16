/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let ob = {a: 'aa'};
Object.freeze(ob);
col(Object.isFrozen(ob));
col(ob._$_REss().Meth._$isFrozen_());
col(Object.isFrozen(1));
debugger;