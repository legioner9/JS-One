/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
;(function () {
    function col(volume) {
        console.log(volume);
    }
    col.rus = function(){
        col('rus');
    }

    function mybind(func_ini, context) {
        return function U() {
            return func_ini.apply(context, arguments);
        }
    }
    window.col = col;
    window.mybind = mybind;

}());
// Z();

