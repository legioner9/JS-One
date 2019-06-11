/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function f_name() {
    col(this.name);
}

// f = f.bind({name: 'Grisha'}).bind({name: 'Pasha'});

// var g = my_dec_Bind(f_name, {name: 'Grisha'});
// g();
// var z = my_dec_Bind(my_dec_Bind(f_name, {name: 'Grisha'}), {name: 'Pasha'});
// z();

function sS(a, b) {
    return a + b;
}

ru = new sS(1, 2)

// col(ru instanceof sS)

sS = my_dec_CheckArg(sS, [my_ch_checkNum, my_ch_checkNum]);
sS = my_dec_Cach_v1(sS);
sS = my_dec_TimsDuring(sS)
// col(sS('rtyrc', 4));
// col(res_my_dec_Cach_v1);
// col(res_my_dec_TimsDuring);
// col(sS('rtyrc', 4));
// col(res_my_dec_Cach_v1);
// col(res_my_dec_TimsDuring);
// col(res_my_dec_TimsDuring);
// col(res_my_dec_Cach_v1);

// col({}.toString.call(123)); // [object Number]

// my_dec_getObjClass("sdc");
// col(___getObjClass(1234));
// col(___getObjClass(new Date()));
// col(typeof 1);
// col(new Date().getFullYear());

function formDate(ini_format_date) {
    var ini = ini_format_date;
    if (ini.getDate) {
        var d = ini;
    }
    if (ini === ini * 1) {
        d = new Date(ini);
    }
    if (ini.join) {
        ini[1] += 1;
        var d1 = ini.reverse().join(',');
        d = new Date(d1);
    }
    if (ini.split) {
        var d2 = ini.split('-').reverse().join(',');
        d = new Date(d2);
    }
    return d.getDate() ? d.toLocaleString('ru', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    }) : 'invalid initial parametrs';
}

// var a = 3;
// col(a === a * 1);
// col(formDate('2011-10-02'));
// col(___getObjClass(new  Date()));
var p = {
    r: 'rrr',
    date: new Date(),
    toJSON: function () {


    }
}
var pp = {
    name: "Василий Иванович",
    age: 35
};
// var stringify = JSON.stringify(pp);
// col(stringify);
// col(JSON.parse(stringify));


// col(stringify);
// col(new Date(JSON.parse(stringify)));

// col(JSON.parse(stringify, function (key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
// }));
// col(find);
// col(___getObjClass(p.date));

// var id = setInterval(function() {
//     col('Таймер сработал');
// }, 5000);

// var answer = confirm('Остановить таймер?');
// if (answer) {
//     clearTimeout(id);
// }


var i = 1;

var to = setTimeout(function run() {
//     i++;
    col(i+ '\n');
    setTimeout(run , 100*i);
}, 100);



//Эта функция запускает таймер
function start() {
    window.timerId = window.setInterval(timer, 1000);
}

//Эта функция останавливает таймер
function stop() {
    window.clearInterval(window.timerId);
}

//Эта функция меняет value для инпута
function timer() {
    var elem = document.getElementById('test');
    elem.value = parseInt(elem.value) + 1;
}

// var tr = setInterval(function () {
//     i++;
//     col(i);
//     if (i > 20) clearInterval(tr);
// }, 100)

function printNum() {
    var i = 1;
    var tr = setInterval(function () {
        col(i);
        if (i == 20) clearInterval(tr);
        i++;
    }, 1000);
}

// printNum();

function printNumbersInterval() {
    var i = 1;
    var timerId = setInterval(function() {
        console.log(i);
        if (i == 20) clearInterval(timerId);
        i++;
    }, 100);
}

// вызов
// printNumbersInterval();

