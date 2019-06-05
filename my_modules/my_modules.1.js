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
            var result = func_ini.apply(this, arguments);
            var during = performance.now() - start_time;
            col(func_ini);
            var arg = [].slice.call(arguments);
            if (!dev) return result;
            else return {
                'result': result,
                'arguments': arg,
                'during': during
            };
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
     *
     *ssS(6, 'yt');
     * @param fun_ini
     * @param arr_FuncCheckArg
     * @param dev
     * @returns {U}
     */
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
    window.my_ch_checkStr = my_ch_checkStr;
    window.my_ch_checkNum = my_ch_checkNum;
    window.my_dec_CheckArg = my_dec_CheckArg;
    window.my_dec_Bind = my_dec_Bind;
    window.my_dec_TimsDuring = my_dec_TimsDuring;

}());
// Z();

