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

function checkNum(ini) {
    return typeof ini == 'number';
}

function my_dec_CheckArg(fun_ini, arr_FuncCheckArg, dev) {
    dev = dev || false;
    return function U() {
        for (var i = 0; i < arguments.length; i++) {
            if (!arr_FuncCheckArg[i](arguments[i])) {
                col(i + ' ' + arguments[i] + ' argument is not correct ! \n');
                var j = false;
            } else j = true;
        }
        if (!dev) {
            if (j) return fun_ini.apply(this, arguments);
            else return;
        } else {
            col(fun_ini);
            col(arr_FuncCheckArg);
            return col({
                'aguments': arguments
            })
        }
    }
}

function sS(a, b) {
    return a + b;
}

var ssS = my_dec_CheckArg(sS, [checkNum, checkNum]);
ssS(6, 'yt');