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
col(___getObjClass(1234))