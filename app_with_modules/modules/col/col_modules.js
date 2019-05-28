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
    window.col = col;
}());
// Z();
