/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function col(volume){
    console.log(volume);
}

var a = 99;
var a = '9r';
col(a);
function  counterN() {
    var count = 1;
    return function S() {
        // col(count);
        return count++;
    }
}
// con_1 = counterN();
// con_2 = counterN();
// col(con_1());
// col(con_1());
// col(con_2());
// col(con_2());
// col(con_2->[[Scope]]);
//
// function aanuk(aan) {
//     if (aan==1) {return 1};
//     return aan*aanuk(aan-1);
// }
// col(aanuk(4));

// function couneN() {
//     function S() {
//         return S.curCount++;
//     }
//     S.curCount = 1;
// }
//
// var cou_init = counterN();
// col(cou_init());
// col(cou_init());
// col(cou_init());
// cou_init.curCount = 7;
// col(cou_init.curCount);

// var aavalue = 0;
//
// function aaf() {
//   aavalue = 1;
//     if (1) {
//         aavalue = true;
//     } else {
//         aavalue = false;
//     }
//     col( aavalue );
// }
// aaf();
// col(aavalue);

// var a = 5;
//
// (function SR() {
//     col(a)
// })();

// (function makeCounter() {
//     var currentCounts = 1;
//
//     return function SS() {
//         currentCounts = 2;
//         col(currentCounts);// можно ли здесь вывести currentCount из внешней функции (равный 1)?
//     };
// })();

// function  makeCountter() {
//     var cur_count = 1;
//     return  {
//        count :  function Pluss() {
//         return cur_count++;
//     },
//         Set : function Sets(value) {
//         cur_count = value
//     },
//         Reset : function Resets() {
//             cur_count = 1;
//        },
//         Real : function Reals() {
//             return  cur_count;
//         }
//     }
// }
//
// function  makeCountter() {
//     var cur_count = 1;
//  function count() {
//             return cur_count++;
//         }
//     count.Set = function(value) {
//             cur_count = value
//         }
//         count.Reset = function Resets() {
//             cur_count = 1;
//         }
//         count.Real = function Reals() {
//             return  cur_count;
//         }
//     return count;
// }
// var mc_2 = makeCountter();
// col(mc_1());
// col(mc_1());
// var mc_1 = makeCountter();
// mc_1.Reset();
// mc_1.Set(4);
// col(mc_1());
// col(mc_1.Real());

// function sum(a) {
//     return function (b) {
//         return a+b;
//     }
// }
// col(sum(4)(-9));

function makeBuffer() {
    var text = '';

    function buffeR(piece) {
        if (arguments.length == 0) { // вызов без аргументов
           return text;
        }
        text += piece;
    }
    buffeR.clear = function () {
        text = "";
    }
    return buffeR;
};
var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
col( buffer() ); // Тест тебя не съест

buffer.clear();

col( buffer() ); // ""

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

// users.sort(function (a,b) {
//     return a.name > b.name  ? 1 : -1;
// });
// col(users[0]['name']);
// users.sort(byField('name'));
// users.forEach(function (user) {
//     col(user.name)
// })
//
// function byField(init) {
//     function s(a,b) {
//        return  a[init] > b[init] ? 1 : -1;
//     }
//     return s;
// }
arr_i = [1,2,3,4,5,6,7,8,9];
arr_c = [1,2,7,10];
// filterFuncS(arr_i, inBetweenS(3,6));
// col(filterFuncS(arr_i, inArrayS( arr_c )));
// filterFuncS(arr_i, inArrayS( arr_c ))


function filterFuncS(arr_init , func) {
    var arr_res = [];
    for (var i = 0; i <arr_init.length ; i++) {
        var item = arr_init[i];
        if (func(item)) {
            arr_res.push(item);
        }
    }
    return arr_res;
}

function inBetweenS(a ,b) {
    var s = 8;
    return  function I(init) {
        return a < init && init < b;
    };
}

function inArrayS(arr_comp) {
        return function (item){
            for (var i = 0; i <arr_comp.length ; i++) {
                if(item == arr_comp[i]){
                    return true;
                }
            }
            return false;
        }
    }

function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 3; i++) {
        var shooter = function R(i) { // функция-стрелок
            function S() {
                col(i); // выводит свой номер
            }

        };
        shooters.push(shooter());
    }

    return shooters;
}

var army = makeArmy();
col(army);
// army[2]();



