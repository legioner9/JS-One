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

    Object.prototype.__my_getObjClass = function () {
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
    window._fib = function N(n) {
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
        if (!(this instanceof Object)) return col('Sorry ((( you object is not Object');
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
        if (!(this instanceof Object)) return col('Sorry ((( you object is not Object');
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
        if (!(this instanceof Object)) return col('Sorry ((( you object is not Object');
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
        if (!(this instanceof Object)) return col('Sorry ((( you object is not Object');
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
        if (!(this instanceof Object)) return col('Sorry ((( you object is not Object');
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

    /* TODO: PROTO MAP __my_MapToArr */
    Object.prototype.__my_MapToArr = function () {
        if (!(this instanceof Map)) return col('Sorry ((( you object is not Map');
        this.res__my_MapToArr = []
        let arr = this.res__my_MapToArr;
        for (let key of this.keys()) {
            arr.push({key: key, volume: this.get(key)})
        }
    }


    /* TODO: FUNC ifCallbackTypeTrue  */
    window.ifCallbackTypeTrue = function (callback) {
        if (callback && typeof (callback) === "function") {
            callback();
        } else {
            throw new Error('Callback not valid type(((')
        }
    }

    /* TODO: FUNC cp `Pt  (${a}) =` + performance.now() */
    window.cp = function (a) {
        col(`Pt  (${a}) =` + performance.now())
    };

    /* TODO: FUNC cpu (a, str) str + performance.now() */
    window.cpu = function (a, str) {
        col(str + performance.now());
        col(a)
    };

    /* TODO:retunn NEWPROMISE nPrTimeOut */
    window.nPrTimeOut = function (numYes, timeYes, numNo, timeNo) {

        return new Promise(function (resolve, reject) {
                this.numYes = numYes || false;
                this.timeYes = timeYes || false;
                this.numNo = numNo || false;
                this.timeNo = timeNo || false;
                if (this.numYes) {
                    setTimeout(
                        () => {
                            resolve(this.numYes);
                            cpu(numYes, 'resolve!!!');
                        }
                        , this.timeYes)
                }
                if (this.numNo) {
                    setTimeout(
                        () => {
                            reject(this.numNo)
                            cpu(numNo, 'reject!!!');
                        }
                        , this.timeNo)
                }
            }
        )
    }

    /* TODO:retunn NEWPROMISE nPrTrueFalse */
    window.nPrTrueFalse = function (bullianYesNo, str_ident, timer) {

        return new Promise(function (resolve, reject) {
                this.bullianYesNo = bullianYesNo || false;
                this.str_ident = str_ident || 'default str';
                this.timer = timer || 100;

                if (this.bullianYesNo) {
                    setTimeout(
                        () => {
                            resolve(this.str_ident);
                            cpu(this.str_ident, 'resolve!!!');
                        }
                        , this.timer)
                } else {
                    setTimeout(
                        () => {
                            reject(this.str_ident)
                        }
                        , this.timer)
                }
            }
        )
    }

    /* TODO:retunn NEWPROMISE httpGet (url)*/
    window.__my_XMLhttpGet = function (url) {

        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function () {
                if (this.status == 200) {
                    cpu(this.response, ' (res XMLHttpRequest ) ');
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };

            xhr.send();
        });

    }

    /* TODO:retunn NEWPROMISE __my_PromiseDelay (time_dely)   */
    window.__my_PromiseDelay = function (time_dely) {
        return new Promise(function (resolve, reject) {
                this.time_dely = time_dely;
                setTimeout(resolve('default result'), this.time_dely)
            }
        )
    }

    /* TODO: Promise.consis result from array */
    Promise.consis = function (arr_url, nPromise) {
        let arr_result = [];
        let Pt = Promise.resolve();
        for (let i = 0; i < arr_url.length; i++) {
            Pt = Pt.then(() => nPromise(arr_url[i]));
            Pt = Pt.then(result => {
                    // cpu(result, `(res i = ${i})`);
                    arr_result.push(result);
                }
            )
        }
        Pt = Pt.then(() => cpu(arr_result, 'resalt array'));
    }

    // let urls = [
    //     'user.json',
    //     'user2.json',
    //     'user3.json'
    // ]
    // let op = Promise.consis(urls, __my_XMLhttpGet);

    /* TODO: __toArr Transform Collection to Arr */
    window.__toArr = function (collection) {
        return [].slice.call(collection);
    }

    /* TODO: __my_forEachNode return set node  */
    window.__my_forEachNode = function (nodeElem) {
        let __my_forEach_resalt = [];
        for (let i = 0; i < 12; i++) {
            __my_forEach_resalt[i] = [];
        }
        nodeElem.forEach(item => {
            let j = item.nodeType;
            if (item.nodeType != 3 || item.nodeType == 3 && item.data.trim() != '') __my_forEach_resalt[j].push(item);

        })
        return __my_forEach_resalt;
    }

    /* TODO: __my_IsNullOrUndefine  */
    window.__my_IsNullOrUndefine = function (any) {
        return any === null || any === undefined;
    }

    window.__my_isIntegerPositiveArgs = function (...args) {

        for (let i = 0; i < args.length; i++) {

            if (!(+args[i] === (args[i] ^ 0)) || !(args[i] > 0)) {
                // col(`Argument __my_isIntegerPositiveArgs  "${args[i]}"  is not integer or positive`);
                return false;
            }
            // col(`Arguments __my_isIntegerPositiveArgs "${args[i]}" is good`);

        }
        return true;
    }


    /* TODO: __my_isInteger  */
    window.__my_isIntegerArgs = function (...args) {

        for (let i = 0; i < args.length; i++) {

            if (!(+args[i] === (args[i] ^ 0))) {
                // col(`Argument __my_isInteger "${args[i]}"  is not integer`);
                return false;
            }
            // col(`Arguments __my_isInteger "${args[i]}" is good`);

        }
        return true;
    }

    /* TODO: __my_primeNtoM  */
    window.__my_primeNtoM = function (n, m) {
        if (__my_isIntegerPositiveArgs(n, m)) {
            let max = Math.max(n, m);
            let min = Math.min(n, m);
            let arr_prime = [2];
            for (let i = 3; i <= max; i++) {
                let res_j = true;
                for (let j = 0; j < arr_prime.length; j++) {
                    let z = !(i % arr_prime[j]);
                    if (z) {
                        res_j = false;
                    }
                }
                if (res_j) arr_prime.push(i);
            }
            return arr_prime = arr_prime.slice(arr_prime.indexOf(min));
        }
        return false;
    }

    /* TODO: __my_primeNtoMContinue  */
    window.__my_primeNtoMContinue = function (n, m) {
        if (__my_isIntegerPositiveArgs(n, m)) {
            let max = Math.max(n, m);
            let min = Math.min(n, m);
            let arr_prime = [2];
            Nex:for (let i = 3; i <= max; i++) {
                let res_j = true;
                for (let j = 0; j < arr_prime.length; j++) {
                    let z = !(i % arr_prime[j]);
                    if (z) continue Nex;
                }
                if (res_j) arr_prime.push(i);
            }
            return arr_prime = arr_prime.slice(arr_prime.indexOf(min));
        }
        return false;
    }

    /* TODO: __my_AllIndexEnterInArr  */
    window.__my_AllIndexEnterInArr = function (arr_init, item) {
        let arr = [];
        let pos = arr_init.indexOf(item)
        if (~pos) arr.push(pos);
        else return arr;
        do {
            if (~arr_init.indexOf(item, ++pos)) {
                pos = arr_init.indexOf(item, pos)
                arr.push(arr_init.indexOf(item, pos));
            } else return arr;
        } while (pos < arr_init.length)
        return arr;
    }

    /* TODO: __my_isSimple  */
    window.__my_isPrime = function (a) {
        if (!__my_isIntegerArgs(a)) {
            return col(`Args ifSimple "${a}" is not valid!!!`);
        }
        let res = true;
        let dt;
        a <= -2 ? dt = -1 :
            a >= 2 ? dt = 1 : res = false;
        let j;
        let dt_bul = dt > 0;
        st:for (dt_bul ? j = 2 : j = -2;
                dt_bul ? j < a : j > a;
                j += dt) {
            if (a % j == 0) {
                res = false;
                break st;
            }
        }
        return res;
    }


    window.__my_numDigitalProp = function (a_init) {
        let k = 0, max = 0, b = 0, arr_dig = [];
        let a = a_init;
        while (a > 0) {
            let d = a % 10;
            arr_dig.push(d);
            b += d
            if (d > max) max = d;
            a = Math.floor(a / 10);
            k++;
        }
        let everage = b / k;
        let res = {};
        return window.__my_numDigitalProp[a_init] = {
            number: a_init,
            number_digit: k,
            max_digit: max,
            everage_of_digit: everage,
            sum_of_digit: b,
            arr_dig,
        }
        col(`number digit "${a_init}" = "${k}" max digit = "${max}" everage of digit =  "${everage}"`);
    }

    /* TODO: __my_pow  */
    window.__my_pow = (x, n = 1) => {
        let x_res = 1;
        // if (!__my_isIntegerPositiveArgs(n)) return col(`n =  ${n} is not positive Integer`);
        if (!__my_isIntegerPositiveArgs(n)) return NaN;
        if (!(+x === x)) return NaN;
        while (n >= 1) {
            x_res = x_res * x;
            n--;
        }
        return x_res;

    }
    /* TODO: __my_isEmptyObject  */
    Object.prototype.__my_isEmptyObject = (obj) => {
        if (Object.keys(obj).length === 0) return true;
        else return false;
    }

    /* TODO: __my_upFirstChar  */
    window.__my_upFirstCharString = (str) => {
        str = str.length ? str.charAt(0).toUpperCase() + str.slice(1) : '';// if str ='' charAt(0) = ''
        // but str[0] = undefined
        return str;
    }

    /* TODO: __my_checkTextForStopWord  */
    window.__my_checkTextForStopWord = (text, stop_word_arr) => {
        stop_word_arr = stop_word_arr.filter(a =>
            Boolean(
                ~text.toLowerCase().indexOf(a.toLowerCase())
            )
        );
        return {
            check: Boolean(stop_word_arr.length),
            arr_res: stop_word_arr
        };
    }

    window.__my_unicodArr = [];
    for (let i = 0; i < 10000; i++) {
        __my_unicodArr.push(
            {
                DEC: i,
                HEX: i.toString(16),
                SIMV: String.fromCodePoint(i),
            }
        )
    }
    window.__my_serchUncodeSimv = simv => __my_unicodArr.filter(a => a.SIMV == simv)
    window.__my_serchUncodeFromTo = (a, b) => __my_unicodArr.slice(a - 1, b - 1)

    Object.prototype.constructor = Object;
    Function.prototype.constructor = Function;
    Map.prototype.constructor = Map;
}());
// Z();

