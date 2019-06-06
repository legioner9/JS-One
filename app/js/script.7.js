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

var ssS;
ssS = my_dec_CheckArg(sS, [my_ch_checkNum, my_ch_checkNum]);
ssS('rtyrc', 4);
col(res_my_dec_CheckArg);
ssS(10, 4);
col(res_my_dec_CheckArg);
ssS(18, 7);
col(res_my_dec_CheckArg);


