/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let ob = {};
Object.defineProperty(ob,
    'not_enumerrable',
    {
        value: 'not'
    }
);
ob.enumer = 'yes';
debugger;
let c_1 = ob.propertyIsEnumerable_('enumer');
let c_2 = ({}).propertyIsEnumerable.call(ob, 'not_enumerrable');
let js = JSON.stringify(ob);
