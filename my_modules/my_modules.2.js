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
        return function B() {
            return func_ini.apply(context, arguments);
        }
    }

    var res_my_dec_TimsDuring = {};

    /**
     *During run of function ( dev - param show )
     * @param func_ini
     * @param dev
     * @returns {Function}
     */
    function my_dec_TimsDuring(func_ini, dev) {
        dev = dev || false;
        return function TD() {
            var start_time = performance.now();
            var func_res = func_ini.apply(this, arguments);
            var during = performance.now() - start_time;
            var arg = [].slice.call(arguments);
            var result_dec = {
                'result': func_res,
                'arguments': arg,
                'during': during
            }
            res_my_dec_TimsDuring[func_ini] = result_dec;
            if (!dev) return func_res;
            else {
                col(res_my_dec_TimsDuring);
                return func_res;
            }
        }
    }


    var res_my_dec_CheckArg = {}

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
        return function CA() {
            for (var i = 0; i < arguments.length; i++) {
                if (!arr_FuncCheckArg[i](arguments[i])) {
                    var curr_mes = (i + ' ' + arguments[i] + ' argument is not correct ! \n');
                    col(curr_mes);
                    arr_log_check.push(curr_mes);
                    var j = false;
                } else j = true;
            }
            var fun_res = fun_ini.apply(this, arguments);
            var arg = [].slice.call(arguments);
            var add = [
                arg,
                fun_ini,
                arr_log_check,
                fun_res
            ];
            res_my_dec_CheckArg[fun_ini] = add;
            if (!dev) {
                if (j) return fun_res;
                else {
                    col('error of arguments');
                    return fun_res;
                }
            } else {
                col(arr_FuncCheckArg);
                col({
                    'aguments': arguments
                })
                return fun_res;
            }
        }
    }


    var res_my_dec_Cach_v1 = [];

    /**
     *Cach v1
     * @param param
     * @param dev
     * @returns {{result: string, dev: (*|boolean)}}
     * @constructor
     */

    function my_dec_Cach_v1(fun_ini, dev) {
        dev = dev || false;
        return function Cv1() {
            var arg = [].slice.call(arguments);
            for (let i = 0; i < res_my_dec_Cach_v1.length; i++) {
                if (res_my_dec_Cach_v1[i][0] == arg &&
                    res_my_dec_Cach_v1[i][1] == fun_ini) {
                }
                col('call from cach \n' + res_my_dec_Cach_v1)
                return res_my_dec_Cach_v1[i][2]
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

        // if (dev) {
        //     return result = {
        //         'dev': dev,
        //         'result': 'NAME_func(param, dev)'
        //
        //     };
        // } else {
        //     return;
        // }
    }

    var res_my_dec_getObjClass = [];

    /**
     * my_dec_getObjClass
     * @param obj
     * @returns {*}
     */
    function my_dec_getObjClass(obj_ini) {
        var obj_res = {}.toString.call(obj_ini).slice(8, -1);

        res_my_dec_getObjClass.push
        ({
            obj: obj_ini,
            objClass: obj_res
        });
        return obj_ini;
    }

    /**
     * ___getObjClass
     * @param obj_ini
     * @returns {string}
     * @private
     */
    function ___getObjClass(obj_ini) {
        return {}.toString.call(obj_ini).slice(8, -1).toLowerCase();
    }

    /**
     *checkNum
     * @param ini
     * @returns {boolean}
     */
    function my_ch_checkNum(ini) {
        return typeof ini == 'number';
    }

    /**
     *checkStr
     * @param ini
     * @returns {boolean}
     */
    function my_ch_checkStr(ini) {
        return typeof ini == 'string';
    }

    /**
     * FICH
     * date.toLocaleString("ru", options_toLocaleString)
     * @type {{month: string, hour: string, era: string, year: string, timezone: string, weekday: string, day: string, minute: string, second: string}}
     */
    var ___options_toLocaleString = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    /**
     *
     * @param n
     * @returns {number|*}
     * @constructor
     */
    _fib = function nunN(n) {
        if (n > 2) {
            return nunN(n - 1) + nunN(n - 2)
        } else return 1;
    }

    var res_my_dec_setTimeout = {};


    /**
     *
     * @param ini_fun
     * @param id
     * @param delay
     * @returns {Function}
     */
    function my_dec_setTimeout(ini_fun, id, delay) {
        return function () {
            var context = this;
            var arg = arguments;
            res_my_dec_setTimeout[id] = setTimeout(function () {
                ini_fun.apply(context, arg);
            }, delay);
        }
    }

    var res_my_dec_setInterval = {};

    /**
     *
     * @param ini_fun
     * @param id
     * @param delay
     * @returns {Function}
     */
    function my_dec_setInterval(ini_fun, id, delay) {
        return function () {
            let context = this;
            let arg = arguments;
            res_my_dec_setInterval[id] = setInterval(function () {
                ini_fun.apply(context, arg);
            }, delay);
        }
    }


    window.col = col;
    window.res_my_dec_CheckArg = res_my_dec_CheckArg;
    window.___options_toLocaleString = ___options_toLocaleString;
    window.res_my_dec_Cach_v1 = res_my_dec_Cach_v1;
    window.res_my_dec_TimsDuring = res_my_dec_TimsDuring;
    window.my_ch_checkStr = my_ch_checkStr;
    window.my_ch_checkNum = my_ch_checkNum;
    window.my_dec_CheckArg = my_dec_CheckArg;
    window.my_dec_Bind = my_dec_Bind;
    window.my_dec_TimsDuring = my_dec_TimsDuring;
    window.my_dec_Cach_v1 = my_dec_Cach_v1;
    window.my_dec_getObjClass = my_dec_getObjClass;
    window.my_dec_setTimeout = my_dec_setTimeout;
    window.my_dec_setInterval = my_dec_setInterval;
    window.___getObjClass = ___getObjClass;
    window.res_my_dec_getObjClass = res_my_dec_getObjClass;
    window.res_my_dec_setTimeout = res_my_dec_setTimeout;
    window.res_my_dec_setInterval = res_my_dec_setInterval;
    window.Math._fib = _fib;


}());
// Z();

