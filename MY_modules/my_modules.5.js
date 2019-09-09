/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

;
/**
 *
 * @type {void}
 */
(function () {
    let p = {
        writable: true,
    };

    Object.defineProperties(Object.prototype,
        {

            '_$': p,
            '_$_proxUndef': p,
            '_$type_': p,


        }
    );
    /* TODO: Prox Get to undef prop _$_proxUndef  */
    Object.prototype._$_proxUndef = function (f) {
        return new Proxy(this, {
                get: function (target, name, f) {
                    if (name in target) {
                        return target[name]
                    } else {
                        col(`Prop : "${name}" in Target : "${target}" missing `);
                        return undefined;
                    }
                }
            }
        );
    }

    /**
     *  console.log(volume)
     * @param volume
     */
    window.col = function (volume) {
        console.log(volume);
    }

    Object.prototype.constructor = Object;
    Function.prototype.constructor = Function;
    Map.prototype.constructor = Map;

}());
// Z();

