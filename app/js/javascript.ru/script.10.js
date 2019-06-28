/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
var arr_e = [];

// window.onerror = function (message, url, lineNumber, columnNo, obj_err) {
//     col("Поймана ошибка, выпавшая в глобальную область!\n" +
//         "Сообщение: " + message + "\n(" + url + ":" + lineNumber + 'columnNo' + columnNo + ")");
//
// };



var data = '{ "name": "Вася", "age": 30 }';

function sery() {


    try {
        let obj_data = JSON.parse(data);
        // blabla(); // ошибка!
        if (!obj_data.adress) {
            throw Error('fff');
        }

    } catch (e) {
        col('*')
        new my_Parse_Error(e, 'sery');
        if (e.message == '0fff') {
            col('adress is not valid')
        } else {
            col('**');
            throw e;
        }
    }

}

sery();
try {
} catch (e) {
    col('***')
    new my_Parse_Error(e, 'one');
}



// function my_Err_1(e) {
//     name: this.name;
//     message : this.message;
//     stack : this.stack;
// }