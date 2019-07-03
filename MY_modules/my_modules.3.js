/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

;
(function () {
    /**
     *  console.log(volume)
     * @param volume
     */
    window.col = function (volume) {
        console.log(volume);
    }


    /**
     *  Analog of bind - copy contrxt
     * @param func_ini
     * @param context
     * @returns {function(): *}
     */
    window.my_dec_Bind = function (func_ini, context) {
        return function B() {
            return func_ini.apply(context, arguments);
        }
    }

    window.res_my_dec_TimsDuring = {};

    /**
     *During run of function ( dev - param show )
     * @param func_ini
     * @param dev
     * @returns {Function}
     */
    /* TODO: my_dec_TimsDuring  */
    window.my_dec_TimsDuring = function (func_ini, dev) {
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

    window.res_my_dec_CheckArg = {}

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

    window.my_dec_CheckArg = function (fun_ini, arr_FuncCheckArg, dev) {
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


    window.res_my_dec_Cach_v1 = [];

    /**
     *Cach v1
     * @param param
     * @param dev
     * @returns {{result: string, dev: (*|boolean)}}
     * @constructor
     */
    /* TODO: my_dec_Cach_v1  */
    window.my_dec_Cach_v1 = function (fun_ini, dev) {
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

    window.res_my_dec_getObjClass = [];

    /**
     * my_dec_getObjClass
     * @param obj
     * @returns {*}
     */
    window.my_dec_getObjClass = function (obj_ini) {
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
    /* TODO: getObjClass  */
    window.___getObjClass = function (obj_ini) {
        return {}.toString.call(obj_ini).slice(8, -1).toLowerCase();
    }

    Object.prototype.__my_getObjClass =  function (){
        return {}.toString.call(this).slice(8, -1).toLowerCase();
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
    window.my_ch_checkStr = function (ini) {
        return typeof ini == 'string';
    }

    /**
     * FICH
     * date.toLocaleString("ru", options_toLocaleString)
     * @type {{month: string, hour: string, era: string, year: string, timezone: string, weekday: string, day: string, minute: string, second: string}}
     */
    /* TODO: TIME options_toLocaleString  */
    window.___options_toLocaleString = {
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
    /* TODO: FUNC _fib  */
    let _fib = function N(n) {
        if (n > 2) {
            return N(n - 1) + N(n - 2)
        } else return 1;
    }

    window.res_my_dec_setTimeout = {};


    /**
     *
     * @param ini_fun
     * @param id
     * @param delay
     * @returns {Function}
     */
    /* TODO: my_dec_setTimeout  */
    window.my_dec_setTimeout = function (ini_fun, id, delay) {
        return function () {
            res_my_dec_setTimeout[id] = setTimeout(() => {
                ini_fun.apply(this, arguments);
            }, delay);
        }
    }

    window.res_my_dec_setInterval = {};

    /**
     *
     * @param ini_fun
     * @param id
     * @param delay
     * @returns {Function}
     */
    /* TODO: my_dec_setInterval  */
    window.my_dec_setInterval = function (ini_fun, id, delay) {
        return function () {
            res_my_dec_setInterval[id] = setInterval(() => {
                ini_fun.apply(this, arguments);
            }, delay);
        }
    }

    window.res_my_Parse_Error = {}

    /**
     *
     * @param cause
     * @param id
     */
    /* TODO: my_Parse_Error  */
    window.my_Parse_Error = function (cause, id) {
        id = id || ' id = undefine value '
        this.message = cause.message;
        this.name = cause.name;
        this.cause = cause;
        this.id = id;
        this.time = new Date();
        this.stack = cause.stack;
        res_my_Parse_Error[this.id] = {
            message: this.message,
            name: this.name,
            stack: this.stack,
            cause: this.cause,
            time: this.time
        }
    }

    window.res_onerror = {};


    /**
     *window.onerror
     */
    /* TODO: onerror  */
    window.onerror = function (message, url, lineNo, columnNo, error) {
        var string = message.toLowerCase();
        var substring = "script error";
        if (string.indexOf(substring) > -1) {
            col('error not exist')
        } else {
            var res = {
                time: new Date(),
                message: message,
                url: url,
                lineNo: lineNo,
                columnNo: columnNo,
                error: error
            };
            onerror.res = res;
            res_onerror = res;
            col(res);
        }
    };


    /**
     * Object.prototype.__ms
     * setTimeout(ms)
     * @param ms
     * @returns {Function}
     * @private
     */
    /* TODO: PROTO OBJ __my_ms  */
    Object.prototype.__my_ms = function (ms) {
        var f = this;
        return function () {
            setTimeout(() => f.apply(this, arguments)
                , ms);
        }
    }

    /**
     * Object.prototype.__my_toEveryPropFunc
     *
     */
    /* TODO: PROTO OBJ __my_toEveryPropFunc  */

    Object.prototype.__my_toEveryPropFunc = function (f) {
        for (var prop in this) {
            if (!this.hasOwnProperty(prop)) continue;
            var value = this[prop];
            f.call(value, [prop, value]);
        }
    }

    /**
     * Object.prototype.__my_OwnPropObject
     *
     */
    /* TODO: PROTO OBJ __my_OwnPropObject  */

    Object.prototype.__my_OwnPropObject = function () {
        let init = {};
        for (let prop in this) {
            if (!this.hasOwnProperty(prop)) continue;
            let value = this[prop];
            init[prop] = value;
        }
        let _this = this;
        _this.res__my_OwnPropObject = init;
        return init;
    }

    /**
     * Object.prototype.__my_AllPropObject
     *
     */
    /* TODO: PROTO OBJ __my_AllPropObject  */
    Object.prototype.__my_AllPropObject = function () {
        let init = {};
        for (let prop in this) {
            let value = this[prop];
            init[prop] = value;
        }
        let _this = this;
        _this.res__my_AllPropObject = init;
        return init;
    }

    /**
     * Object.prototype.__my_ProtoPropObject
     *
     */
    /* TODO: PROTO OBJ __my_ProtoPropObject  */
    Object.prototype.__my_ProtoPropObject = function () {
        let init = {};
        for (let prop in this) {
            if (this.hasOwnProperty(prop)) continue;
            let value = this[prop];
            init[prop] = value;
        }
        let _this = this;
        _this.res__my_ProtoPropObject = init;
        return init;
    }

    /**
     * ParentError for childClassError
     *
     */
    /* TODO:PARENT CLASS ERROR  __my_Class_Init_Error for childClassError  */
    window.__My_Class_Init_Error = function (message) {
        this.name = 'ParentError';
        this.message = message;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error()).stack;
        }
    }
    __My_Class_Init_Error.prototype = Object.create(Error.prototype);
    __My_Class_Init_Error.prototype.constructor = __My_Class_Init_Error;

    /**
     * childClassError__my_PropError
     *
     */
    /* TODO:CHILD CLASS ERROR  __my_PropError */
    window.__My_PropError = function (prop) {
        __My_Class_Init_Error.call(this, `Sorry error in property ${prop}`);
        this.name = 'PropError';
        this.property = prop;
    }

    __My_PropError.prototype = Object.create(__My_Class_Init_Error.prototype);
    __My_PropError.prototype.constructor = __My_PropError;

    /**
     * JSON.parse__my_ArrProp
     *
     */
    /* TODO:JSON.parse__my_ArrProp  */
    JSON.parse__my_ArrProp = function (date, arr_prop) {
        let data_pars;
        try {
            data_pars = JSON.parse(date);
            if (arr_prop) {
                let obj_key = Object.keys(data_pars);
                for (let i = 0; i < arr_prop.length; i++) {
                    if (obj_key.indexOf(arr_prop[i]) == -1) {
                        throw new __My_PropError(arr_prop[i]);
                    }
                }
            }
        } catch (e) {
            if (e.name == 'PropError') {
                col(`Sorry you property ${e.property} is empty (((`);
            } else if (e instanceof SyntaxError) {
                col(`Sorry ${date} is not valid (((`)
            } else {
                throw e;
            }
        }
        return data_pars;
    }

    /**
     * window.__my_eventMixin
     *
     */
    /* TODO:WIN __my_eventMixin (on , off , trigger )  */
    window.__my_eventMixin = {

        /**
         * Подписка на событие
         * Использование:
         *  menu.on('select', function(item) { ... }
         */
        __my_on: function (eventName, handler) {
            if (!this._eventHandlers) this._eventHandlers = {};
            if (!this._eventHandlers[eventName]) {
                this._eventHandlers[eventName] = [];
            }
            this._eventHandlers[eventName].push(handler);
        },

        /**
         * Прекращение подписки
         *  menu.off('select',  handler)
         */
        __my_off: function (eventName, handler) {
            var handlers = this._eventHandlers && this._eventHandlers[eventName];
            if (!handlers) return;
            for (var i = 0; i < handlers.length; i++) {
                if (handlers[i] == handler) {
                    handlers.splice(i--, 1);
                }
            }
        },

        /**
         * Генерация события с передачей данных
         *  this.trigger('select', item);
         */
        __my_trigger: function (eventName /*, ... */) {

            if (!this._eventHandlers || !this._eventHandlers[eventName]) {
                return; // обработчиков для события нет
            }

            // вызвать обработчики
            var handlers = this._eventHandlers[eventName];
            for (var i = 0; i < handlers.length; i++) {
                handlers[i].apply(this, [].slice.call(arguments, 1));
            }
        }
    };

    /**
     * window.__my_eventMixin
     *
     */
    /* TODO:PROTO OBJ __my_eventMixin (on , off , trigger )  */
    for (var key in __my_eventMixin) {
        if (!__my_eventMixin.hasOwnProperty(key)) continue;
        Object.prototype[key] = __my_eventMixin[key];
    }

    /**
     * Math.random().toString(36).slice(2)
     */
    /* TODO: GENERATOR Math.random().toString(36).slice(2)  */
    Math.random().toString(36).slice(2);
window.__my_MRTS = Math.random().toString(36).slice(2);

    // window.col = col;
    // window.my_ch_checkStr = my_ch_checkStr;
    // window.my_ch_checkNum = my_ch_checkNum;
    // window.my_dec_CheckArg = my_dec_CheckArg;
    // window.my_dec_Bind = my_dec_Bind;
    // window.my_dec_TimsDuring = my_dec_TimsDuring;
    // window.my_dec_Cach_v1 = my_dec_Cach_v1;
    // window.my_dec_getObjClass = my_dec_getObjClass;
    // window.my_dec_setTimeout = my_dec_setTimeout;
    // window.my_dec_setInterval = my_dec_setInterval;
    // window.my_Parse_Error = my_Parse_Error;
    //
    // window.res_my_dec_CheckArg = res_my_dec_CheckArg;
    // window.res_my_dec_Cach_v1 = res_my_dec_Cach_v1;
    // window.res_my_dec_TimsDuring = res_my_dec_TimsDuring;
    // window.res_my_dec_getObjClass = res_my_dec_getObjClass;
    // window.res_my_dec_setTimeout = res_my_dec_setTimeout;
    // window.res_my_dec_setInterval = res_my_dec_setInterval;
    // window.res_my_Parse_Error = res_my_Parse_Error;
    // window.___options_toLocaleString = ___options_toLocaleString;
    // window.___getObjClass = ___getObjClass;
    window.Math._fib = _fib;

    Object.prototype.constructor = Object;

}());
// Z();

