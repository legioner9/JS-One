/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
;(function () {
    function col(volume) {
        console.log(volume);
    }

    col.rus = function () {
        col('rus');
    }

    /**
     *
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
     *
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

    window.col = col;
    window.my_dec_Bind = my_dec_Bind;
    window.my_dec_TimsDuring = my_dec_TimsDuring;

}());
// Z();

