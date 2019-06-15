/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
var arr_e = [];

function ReadError(ident, cause) {
    this.message = cause.message;
    this.cause = cause;
    this.name = 'ReadError';
    this.stack = cause.stack;
}


var data = '{ "name": Вася", "age": 30 }';

function sery() {

    try {
        let obj_data = JSON.parse(data);
        // blabla(); // ошибка!
        if (!obj_data.adress) {
            throw {message: 'fff'};
        }
    } catch (e) {
        if (e.message == 'fff') {
            col('name ' + e.name);
            col('message ' + e.message);
            col('stack ' + e.stack);
            col('cause ' + e);
        }
       else throw e; // пробрасываем
    }
}
try {
    sery();
}
catch (e) {
    col('name ' + e.name);
    col('message ' + e.message);
    col('stack ' + e.stack);
    col('cause ' + e);
}


// function my_Err_1(e) {
//     name: this.name;
//     message : this.message;
//     stack : this.stack;
// }