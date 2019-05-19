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

function  makeCountter() {
    var cur_count = 1;
    return  {
       count :  function Pluss() {
        return cur_count++;
    },
        Set : function Sets(value) {
        cur_count = value
    },
        Reset : function Resets() {
            cur_count = 1;
       },
        Real : function Reals() {
            return  cur_count;
        }
    }
}

function  makeCountter() {
    var cur_count = 1;
 function count() {
            return cur_count++;
        }
    count.Set = function(value) {
            cur_count = value
        }
        count.Reset = function Resets() {
            cur_count = 1;
        }
        count.Real = function Reals() {
            return  cur_count;
        }
    return count;
}
var mc_1 = makeCountter();
var mc_2 = makeCountter();
col(mc_1());
col(mc_1());
mc_1.Reset();
col(mc_1());
mc_1.Set(4);
col(mc_1.Real());


