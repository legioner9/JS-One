/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function f_name() {
    col(this.name);
}

// f = f.bind({name: 'Grisha'}).bind({name: 'Pasha'});

// var g = my_dec_Bind(f_name, {name: 'Grisha'});
// g();
// var z = my_dec_Bind(my_dec_Bind(f_name, {name: 'Grisha'}), {name: 'Pasha'});
// z();

function sS(a, b) {
    return a + b;
}

ru = new sS(1, 2)

col(ru instanceof sS)

sS = my_dec_CheckArg(sS, [my_ch_checkNum, my_ch_checkNum]);
sS = my_dec_Cach_v1(sS);
sS = my_dec_TimsDuring(sS)
// col(sS('rtyrc', 4));
// col(res_my_dec_Cach_v1);
// col(res_my_dec_TimsDuring);
// col(sS('rtyrc', 4));
// col(res_my_dec_Cach_v1);
// col(res_my_dec_TimsDuring);
// col(res_my_dec_TimsDuring);
// col(res_my_dec_Cach_v1);

col({}.toString.call(123)); // [object Number]

my_dec_getObjClass("sdc");
col(___getObjClass(1234));
col(___getObjClass(new Date()));
col(typeof 1);
col(new Date().getFullYear());

function formDate(ini_format_date) {
    var ini = ini_format_date;
    if (ini.getDate) {
        var d = ini;
    }
    if (ini === ini * 1) {
        d = new Date(ini);
    }
    if (ini.join) {
        ini[1] += 1;
        var d1 = ini.reverse().join(',');
        d = new Date(d1);
    }
    if (ini.split) {
        var d2 = ini.split('-').reverse().join(',');
        d = new Date(d2);
    }
    return d.getDate() ? d.toLocaleString('ru', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    }) : 'invalid initial parametrs';
}

// var a = 3;
// col(a === a * 1);
// col(formDate('2011-10-02'));
col(___getObjClass(new  Date()));

