/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

;
(function () {
    /**
     *  console.log(volume)
     * @param volume
     */
    function col(volume) {
        console.log(volume);
    }


    /**
     *  Analog of bind - copy contrxt
     * @param func_ini
     * @param context
     * @returns {function(): *}
     */
    function my_dec_Bind(func_ini, context) {
        return function U() {
            return func_ini.apply(context, arguments);
        }
    }

    /**
     *During run of function ( dev - param show )
     * @param func_ini
     * @param dev
     * @returns {Function}
     */
    function my_dec_TimsDuring(func_ini, dev) {
        dev = dev || false;
        return function () {
            var start_time = performance.now();
            var func_ini = func_ini.apply(this, arguments);
            var during = performance.now() - start_time;
            col(func_ini);
            result_dec = {
                'result': result,
                'arguments': arg,
                'during': during
            }
            func_ini.my_dec_TimsDuring = result_dec;
            var arg = [].slice.call(arguments);
            if (!dev) return func_ini;
            else return result_dec;
        }
    }


    /**
     * Checking Arg
     * examp:
     * function checkNum(ini) {
    return typeof ini == 'number';
     *}
     *
     *function sS(a, b) {
    return a + b;
     *}
     *
     * var ssS = my_dec_CheckArg(sS, [checkNum, checkNum]);
     *col(res_my_dec_CheckArg[sS])
     *ssS(6, 'yt');
     * @param fun_ini
     * @param arr_FuncCheckArg
     * @param dev
     * @returns {U}
     *
     */

    function my_dec_CheckArg(fun_ini, arr_FuncCheckArg, dev) {
        var dev = dev || false;
        var arr_log_check = [];
        return function U() {
            for (var i = 0; i < arguments.length; i++) {
                if (!arr_FuncCheckArg[i](arguments[i])) {
                    var curr_mes = (i + ' ' + arguments[i] + ' argument is not correct ! \n');
                    col(curr_mes);
                    arr_log_check.push(curr_mes);
                    var j = false;
                } else j = true;
            }

            var arg = [].slice.call(arguments);

            var add = [
                arg,
                fun_ini,
                fun_ini.apply(this, arguments)
            ];
            var add = {
                'arg': arg,
                'fun_ini': fun_ini,
                'arr_log_check': arr_log_check,
                'result': fun_ini.apply(this, arguments)
            }


            res_my_dec_CheckArg[fun_ini] = add;
            // res_my_dec_CheckArg[fun_ini].arg = lr;
            // col(res_my_dec_CheckArg[fun_ini].arg);
            //
            // var find_arg = res_my_dec_CheckArg[fun_ini].arg
            //
            // var cach_result = res_my_dec_CheckArg[fun_ini].lr.result;
            // if (!res_my_dec_CheckArg[fun_ini].arg) {
            //     var cur_res = res_my_dec_CheckArg[fun_ini].lr.result;
            //     col('no cach');
            // } else {
            //     cur_res = cach_result;
            // }

            // else cur_res =
            if (!dev) {
                if (j) return fun_ini.apply(this, arguments);
                else {
                    col('error of arguments');
                    return fun_ini.apply(this, arguments);
                }
            } else {
                col(fun_ini);
                col(arr_FuncCheckArg);
                return col({
                    'aguments': arguments
                })
            }
        }
    }

    var res_my_dec_CheckArg = {}


    /**
     *
     * @param param
     * @param dev
     * @returns {{result: string, dev: (*|boolean)}}
     * @constructor
     */
    function my_dec_Cach_v1(fun_ini, dev) {
        dev = dev || false;
        return function U() {
            var arg = [].slice.call(arguments);
            for (let i = 0; i < res_my_dec_Cach_v1.length; i++) {
                if (res_my_dec_Cach_v1[i][1] == arg &&
                    res_my_dec_Cach_v1[i][2] == fun_ini) {
                    return res_my_dec_Cach_v1[i][3]
                }
            }
            var fun_res = fun_ini.apply(this, arguments);
            var add = [
                arg,
                fun_ini,
                fun_res
            ];
            res_my_dec_Cach_v1.push(add);
            return fun_res;
        }

        if (dev) {
            return result = {
                'dev': dev,
                'result': 'NAME_func(param, dev)'

            };
        } else {
            return;
        }
    }

    var res_my_dec_Cach_v1 = [];

    /**
     *
     * @param ini
     * @returns {boolean}
     */
    function my_ch_checkNum(ini) {
        return typeof ini == 'number';
    }

    /**
     *
     * @param ini
     * @returns {boolean}
     */
    function my_ch_checkStr(ini) {
        return typeof ini == 'string';
    }

    window.col = col;
    window.res_my_dec_CheckArg = res_my_dec_CheckArg;
    window.my_dec_Cach_v1 = my_dec_Cach_v1;
    window.my_ch_checkStr = my_ch_checkStr;
    window.my_ch_checkNum = my_ch_checkNum;
    window.my_dec_CheckArg = my_dec_CheckArg;
    window.my_dec_Bind = my_dec_Bind;
    window.my_dec_TimsDuring = my_dec_TimsDuring;

}());
// Z();

