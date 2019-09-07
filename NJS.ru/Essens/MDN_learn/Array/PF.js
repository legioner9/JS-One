/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

;(
    function () {

        let p = {
            writable: true,
            enumerable: false,
        };

        Object.defineProperties(Array.prototype,
            {
                'indexOf_': p,
                'map_$_RR': p,
                'reduce_': p,

            }
        );

        // Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.21
// Ссылка (en): http://es5.github.io/#x15.4.4.21
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.21
        if (!Array.prototype.reduce_) {
            Array.prototype.reduce_ = function (callback/*, initialValue*/) {
                'use strict';
                if (this == null) {
                    throw new TypeError('Array.prototype.reduce called on null or undefined');
                }
                if (typeof callback !== 'function') {
                    throw new TypeError(callback + ' is not a function');
                }
                var t = Object(this), len = t.length >>> 0, k = 0, value;
                if (arguments.length >= 2) {
                    value = arguments[1];
                } else {
                    while (k < len && !(k in t)) {
                        k++;
                    }
                    if (k >= len) {
                        throw new TypeError('Reduce of empty array with no initial value');
                    }
                    value = t[k++];
                }
                for (; k < len; k++) {
                    if (k in t) {
                        value = callback(value, t[k], k, t);
                    }
                }
                return value;
            };
        }
        if (!Array.prototype.indexOf_) Array.prototype.indexOf_ = (function (Object, max, min) {
            "use strict";
            return function indexOf_(member, fromIndex) {
                if (this === null || this === undefined) throw TypeError("Array.prototype.indexOf called on null or undefined");

                var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len);
                if (i < 0) i = max(0, Len + i); else if (i >= Len) return -1;

                if (member === void 0) {
                    for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i; // undefined
                } else if (member !== member) {
                    for (; i !== Len; ++i) if (that[i] !== that[i]) return i; // NaN
                } else for (; i !== Len; ++i) if (that[i] === member) return i; // all else

                return -1; // if the value was not found, then return -1
            };
        })(Object, Math.max, Math.min);

        if (!Array.prototype.copyWithin) {
            Array.prototype.copyWithin = function (target, start/*, end*/) {
                // Шаги 1-2.
                if (this == null) {
                    throw new TypeError('this is null or not defined');
                }

                var O = Object(this);

                // Шаги 3-5.
                var len = O.length >>> 0;

                // Шаги 6-8.
                var relativeTarget = target >> 0;

                var to = relativeTarget < 0 ?
                    Math.max(len + relativeTarget, 0) :
                    Math.min(relativeTarget, len);

                // Шаги 9-11.
                var relativeStart = start >> 0;

                var from = relativeStart < 0 ?
                    Math.max(len + relativeStart, 0) :
                    Math.min(relativeStart, len);

                // Шаги 12-14.
                var end = arguments[2];
                var relativeEnd = end === undefined ? len : end >> 0;

                var final = relativeEnd < 0 ?
                    Math.max(len + relativeEnd, 0) :
                    Math.min(relativeEnd, len);

                // Шаг 15.
                var count = Math.min(final - from, len - to);

                // Шаги 16-17.
                var direction = 1;

                if (from < to && to < (from + count)) {
                    direction = -1;
                    from += count - 1;
                    to += count - 1;
                }

                // Шаг 18
                while (count > 0) {
                    if (from in O) {
                        O[to] = O[from];
                    } else {
                        delete O[to];
                    }

                    from += direction;
                    to += direction;
                    count--;
                }

                // Шаг 19.
                return O;
            };
        }

        function defineProperties_(obj, properties) {
            function convertToDescriptor(desc) {
                function hasProperty(obj, prop) {
                    return Object.prototype.hasOwnProperty.call(obj, prop);
                }

                function isCallable(v) {
                    // NB: изменить при необходимости считать вызываемым что-то ещё, кроме функций.
                    return typeof v === 'function';
                }

                if (typeof desc !== 'object' || desc === null) {
                    throw new TypeError('bad desc');
                }

                var d = {};

                if (hasProperty(desc, 'enumerable')) {
                    d.enumerable = !!obj.enumerable;
                }
                if (hasProperty(desc, 'configurable')) {
                    d.configurable = !!obj.configurable;
                }
                if (hasProperty(desc, 'value')) {
                    d.value = obj.value;
                }
                if (hasProperty(desc, 'writable')) {
                    d.writable = !!desc.writable;
                }
                if (hasProperty(desc, 'get')) {
                    var g = desc.get;

                    if (!isCallable(g) && g !== 'undefined') {
                        throw new TypeError('bad get');
                    }
                    d.get = g;
                }
                if (hasProperty(desc, 'set')) {
                    var s = desc.set;
                    if (!isCallable(s) && s !== 'undefined') {
                        throw new TypeError('bad set');
                    }
                    d.set = s;
                }

                if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
                    throw new TypeError('identity-confused descriptor');
                }

                return d;
            }

            if (typeof obj !== 'object' || obj === null) {
                throw new TypeError('bad obj');
            }

            properties = Object(properties);

            var keys = Object.keys(properties);
            var descs = [];

            for (var i = 0; i < keys.length; i++) {
                descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
            }

            for (var i = 0; i < descs.length; i++) {
                Object.defineProperty(obj, descs[i][0], descs[i][1]);
            }

            return obj;
        }

    })();

