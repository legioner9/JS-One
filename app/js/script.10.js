/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
var arr_e = [];

function my_Parse_Error(cause) {
    this.message = cause.message;
    this.name = cause.name;
    this.cause = cause;
    this.time = new Date();
    this.stack = cause.stack;
    res_my_Parse_Error[this.time] = {
        message: this.message,
        name: this.name,
        stack: this.stack,
        cause: this.cause
    }
}


var data = '{ "name": "Вася", "age": 30 }';

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
            // } else throw e; // пробрасываем
        } else {
            throw e;
        }
    }
}

try {
    sery();
} catch (e) {
    new my_Parse_Error(e);

}


// function my_Err_1(e) {
//     name: this.name;
//     message : this.message;
//     stack : this.stack;
// }