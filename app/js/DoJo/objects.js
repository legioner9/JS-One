/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function createObj(property = 'bgf', value = 'ummrtm') {
    return {
        'laster': 'default',
        [property]: value,
        ['_' + property.toUpperCase()]: value,
        ['ts' + '_' + property]() {
            return this[property] + property;
        },
        get full() {
            return {
                [property + '__']: value
            }
        }
    };
}

let cr = createObj('cwd', 'cqwec')
debugger;
Object.defineProperty(cr, 'last', {
    set: function (value) {
        this.laster = value;
    }
})
let varr = ['feav', 'cefqwe'];
cr.last = 777;
col(cr.full);
col(cr.ts_cwd());
col(createObj());

