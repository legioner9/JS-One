/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// function col(volume){
//     console.log(volume);
// }

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
//
// function checkAge(age) {
//     return  (age >18) ? true :  confirm('Rod?');
// }

// col(checkAge(5));
function min(a, b) {
    return a < b ? a : b;
}

// col(min(-74,-6));

function powS(num, n) {
    var res = 1;
    for (var i = 0; i < n; i++) {
        res *= num;
    }
    return res;
}

// col(powS(4,3));
// function askS(question , yes , no) {
//     if(confirm(question)) yes();
//     else no();
// }
function showYes() {
    col('Come in, please')
}

function showNo() {
    col('No entry!')
}

// askS('your age: ' , showYes,showNo);

// var age = +prompt('Your age' , 20);
// if (age>18) {
//     function myFun() {
//         col('Come in')
//     }
// }
// else {
//     function myFun() {
//         col('No entry!')
//     }
// }
// myFun();
// var newFunc = new Function('a,b' , 'col(a+b)');
// newFunc(2,3);

function powS(x, n) {
    if (n != 1) {
        return x * powS(x, n - 1);
    } else {
        return x;
    }
}

// col(powS(2,3));
var duo = 7;

function oneX(oneY) {
    var z = 5 + oneY(duo);

    function oneW(z) {
        function oneQ(t) {
            return (t + z);
        }
    }
}

function oneYor() {
    return 3;
}

var z = 4;
var t = 18;
// col(oneX(oneYor));

var u = 5;

function sumToS(a) {
    if (a !== 1) {
        return a + sumToS(a - 1);
    } else {
        return a;
    }
}

function sumToSS(a) {
    var sumS = 0;
    for (var i = 0; i < a + 1; i++) {
        sumS += i;
    }
    return sumS;
}

// col(sumToSS(6));

function factS(a) {
    if (a !== 1) {
        return a * factS(a - 1);
    } else {
        return a;
    }
}

// col(factS(5));
// var a = 1;
// var b = 2;
// var c = a +b;
// function fibS(n) {
//     for (let i = 0; i < n; i++) {
//         a = b;
//         b = c;
//         c = a +b;
//     }
//     return c;
// }
// col(fibS(4));

function fibR(a) {
    return a <= 1 ? a : fibR(a - 1) + fibR(a - 2);
}

// col(fibR(7));

// (function g() { return 1; });
// col(g);
var Atest = function AsayHi(name) {
    AsayHi = "тест"; // попытка перезаписи
    col(AsayHi); // function... (перезапись не удалась)
};
// Atest();

// var user_age = prompt ('entranse age' , 32);
// col(user_age);
// var triger_age = confirm('age > 18?');
// col (triger_age);
// var b = 4;
//  function co(a) {
//      col(a+b);
//  }
//  co(3);
//  b=-5;
//  co(5);
// function makeCounter() {
//       counter.currentCount = 1;
//     function counter() {
//         return counter.currentCount++;
//     };
//
// return counter;
//
// }
// var counter = makeCounter();
// counter.currentCount = 6;
// col( counter() ); // 1
// col( counter() ); // 2

// function AmakeCounter() {
//     var currentCount = 1;
//
//     return { // возвратим объект вместо функции
//         AgetNext: function() {
//             return currentCount++;
//         },
//
//         Aset: function(value) {
//             currentCount = value;
//         },
//
//         Areset: function() {
//             currentCount = 1;
//         }
//     }
// }

// function AmakeCounter() {
//     var currentCount = 1;
//
//         function counter() {
//             return currentCount++;
//         }
//
//         counter.set = function(value) {
//             currentCount = value;
//         };
//
//             counter.reset = function() {
//             currentCount = 1;
//         };
//     return counter;
// }
//
//
//
// var counter = AmakeCounter();
//
// col( counter.AgetNext() ); // 1
// col( counter.AgetNext() ); // 2
//
// counter.Aset(5);
// col( counter.AgetNext() ); // 5
//
// function sum(a) {
//     return function U(b) {
//         return col(a+b);
//     }
// }
// sum(3)(6);
// col(window.sum);
//
// function makeBuffer() {
//     var buf = '';
//     function R(pr) {
//         if(arguments.length == 0){
//             return buf;
//         }
//         else {
//             buf +=pr;
//         }
//         R.clear = function () {
//             buf = '';
//         }
//     }
//     return R;
// }
// var buffer = makeBuffer();
// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
//
// // получить текущее значение
// col( buffer() ); // Замыкания Использовать Нужно!
// buffer.clear();
// col( buffer() ); //""

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
//     return a.name > b.name ? 1 : -1;
// });
// users.forEach(function (user) {
//     col(user.name);
// })

users.sort(byField('name'));

function byField(name) {
    return function (a, b) {
        return a[name] > b[name] ? 1 : -1;
    }
}

users.forEach(function (user) {
    col(user.name);
})

function filtrS(arr_init, funcS) {
    var arr_res = [];
    for (var i = 0; i < arr_init.length; i++) {
        var init = arr_init[i];
        if (funcS(init)) {
            arr_res.push(init);
        }
    }
    return arr_res;
}

function inBetween(a, b) {
    return function (ini) {
        return a < ini && ini < b;
    };
}

function inArr(arr_sp) {
    return function (ini) {
        return arr_sp.indexOf(ini) !== -1;
    };

}

var arr = [1, 2, 3, 4, 5, 6, 7];
var arr_s = [7, 10, 5, 1, 11];
// col(filtrS(arr ,inBetween(3, 6)));
// col(filtrS(arr , inArr(arr_s)));

function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooterA = function () { // функция-стрелок
            var j = i;
            return function Sut() {
                col(j);
            }// выводит свой номер
        };
        shooters.push(shooterA());
    }

    return shooters;
}

var army = makeArmy();

// army[0](); // стрелок выводит 10, а должен 0
// army[1](); // стрелок выводит 10...
// army[2](); // стрелок выводит 10...
// army[3](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sumS(a) {
    var agr = a;

    function A(b) {
        agr += b;
        return A;
    }

    A.toString = function () {
        return agr;
    }
    return A;
}

// col(sumS(1)(2)(3));

function Animal(name) {
    this.name = name;
    this.canWalk = true;
}

// var animal = new Animal("ёжик");
// Animal("joss");
function UserS(name, surname) {
    this.str = 'Hi !'
    this.sayS = function () {
        col(this.str + name + surname);
    }
}

// us_1 = new UserS('names', 'surnames');
// // us_1.str = 'Deyr! '
// // us_1.sayS();

function CalcS() {
    // this.a;
    // this.b;
    this.read = function () {
        this.a = +prompt('a = ', 0)
        this.b = +prompt('b = ', 0)
    }
    this.sum = function () {
        var s = this.a + this.b;
        col('a+b = ' + s)
    } ,
        this.mul = function () {
            var m = this.a * this.b;
            col('a*b =' + m)
        }
}

// cal_1 = new CalcS();
// cal_1.read();
// cal_1.sum();
// cal_1.mul();

function Accumulator(ini) {
    this.value = ini;
    this.read = function () {
        var delt = +prompt('add', 0);
        this.value += delt;
    }
}

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// col( accumulator.value ); // выведет текущее значение

function CalcSub() {
    methods = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        }
    }
    this.calculate = function (expr) {
        var arr_expr = expr.split(/ /);
        a = +arr_expr[0];
        nf = arr_expr[1];
        b = +arr_expr[2];
        if (!methods[nf] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[nf](a, b)
    }
    this.addMethod = function (meth, func) {
        methods[meth] = func;
    }
}

var cs = new CalcSub();
col(cs.calculate('1 + 5'));
cs.addMethod('*', function (a, b) {
    return a * b;
});
col(cs.calculate('2 * 5'));
// Object.defineProperty()
// value – значение свойства, по умолчанию undefined
// writable – значение свойства можно менять, если true. По умолчанию false.
//     configurable – если true, то свойство можно удалять, а также менять его в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
//     enumerable – если true, то свойство просматривается в цикле for..in и методе Object.keys(). По умолчанию false.
//     get – функция, которая возвращает значение свойства. По умолчанию undefined.
//     set – функция, которая записывает значение свойства. По умолчанию undefined.
'us strict';
var us = {};
Object.defineProperty(us, 'name', {
        value: 'vasya',
        writable: false,
        configurable: false,
        enumerable: true,
        // get : function () {
        //
        // },
        // set : function () {
        //
        // }
    }
)
us.name = 5;
col(us.name);
for (var key in us) col(us[key]);
