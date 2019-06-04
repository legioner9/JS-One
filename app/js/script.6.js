/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

'us strict'
user_s = {
    name: ' Piter ',
    surname: 'Dursly',
    get fullName() {
        return this.name + ' & ' + this.surname;
    },
    set fullName(value) {
        var arr_name = value.split(/ /);
        this.name = arr_name[0];
        this.surname = arr_name[1];
    }
}

// col(Object.getOwnPropertyNames(user_s));
// col(Object.getOwnPropertyDescriptor(user_s, 'fullName'));
// col(Object.getOwnPropertyDescriptor(user_s, 'surname'));

// col(user_s.fullName);
// user_s.fullName = 'Grig Yarov';
// for (var key in user_s)  col( key + ' : ' + user_s[key] + '\n');

us_2 = {
    name: 'gilbert',
    age_sun: 14,
    // get age(){
    //     return this.age_sun + 18;
    // }
}

Object.defineProperty(us_2, 'age', {
        // value: 'vasya',
        // writable: false,
        // configurable : false,
        // enumerable : false,
        get: function () {
            return this.age_sun + 18;
        },
        // set : function () {
        //
        // }
    }
)

// us_2.age_sun = 32;
// col(us_2.age);

/**
 * FICH
 * #this
 * @param fullName
 * @constructor
 */
function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        name: {
            get: function () {
                return this.fullName.split[0];
            },
            set: function (newName) {
                return this.fullName = newName + ' ' + this.surname;
            }
        },
        surname: {
            get: function () {
                return this.fullName.split[0];
            },
            set: function (newSurName) {
                return this.fullName = this.name + ' ' + newSurName;
            }
        }
    })
};


var vasya = new User("Василий Попкин");
// col(vasya.fullName);
// vasya.name = 'fudy';

// function Article() {
//     this.count++;
//     this.showCount = function(){
//         return col(this.count);
//     }
// }
// Article.count =0;
// new Article();
// new Article();
// Article.showCount;

function Article() {

    Article.count++;
    Article.showCount = function () {
        col(this.count); // (1)
    }

    //...
}

Article.count = 0;

// Article.showCount = function() {
//     col( this.count ); // (1)
// }

// использование
// new Article();
// new Article();
// Article.showCount(); // (2)
Journal.desc = function () {
    return this.formatDate(this.date) + this.color;
}

function Journal(date_ini, color_ini) {
    this.date = date_ini;
    this.color = color_ini || 'black';


    this.formatDate = function (date) {
        return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    }

    this.getTitle = function () {
        return 'Journal at ' + this.formatDate(this.date) + ' ' + this.desc();
    }

}


Ccompare = function (jor_1, jor_2) {
    return jor_1.date - jor_2.date;
}


var jornals = [
    j_1 = new Journal(new Date(2017, 3, 10), 'red'),
    j_2 = new Journal(new Date(2016, 2, 6), 'blue'),
    j_3 = new Journal(new Date(2015, 3, 4))
]

function findMinDateJournal(arr_jornal) {
    var min_date = 0;
    for (var i = 1; i < arr_jornal.length; i++) {
        if (Ccompare(arr_jornal[min_date], arr_jornal[i]) > 0) {
            min_date = i;
        }
    }
    return arr_jornal[min_date];
}

// Journal(new Date(2009 , 5 ,12 ), 'farer')
// col(findMinDateJournal(jornals).getTitle());
Object.defineProperty(j_1, 'name', {
        value: 'vasya',
        writable: false,
        configurable: false,
        enumerable: false,
        // get : function () {
        //
        // },
        // set : function () {
        //
        // }
    }
);
//  col(j_1['formatDate']);
// col(Object.getOwnPropertyDescriptor(j_1 , 'formatDate'));
// col(Object.getOwnPropertyDescriptors(j_1 ));
// col(Object.getOwnPropertyNames(j_1 ));
// col(Object.keys(j_1 ));

function User_1(name_ini, birthday_ini) {
    this.name = name_ini;
    this.birsday = birthday_ini;
    Object.defineProperty(this, 'age', {
            get: function () {
                var today = new Date();
                var delta = today.getFullYear() - this.birsday.getFullYear();
                if ((today.getMonth() == this.birsday.getMonth()) && (today.getDate() < this.birsday.getDate())) {
                    return delta - 1;
                }
                return delta;
            }

        }
    )
}

// col((new User_3('grisha' , new Date(1966 , 3 ,6))).age);

function User_a(user_ini) {
    if (user_ini) {
        this.name = user_ini.name;
        this.age = user_ini.age;
    } else {
        this.name = 'Anonim';
    }
    this.sayHi = function () {
        return 'I am ' + this.name;
    }
}

// col((new User_a()).name);

function User_3() {
    this.sayHi = function () {
        return 'I am ' + this.name;
    }
}

NnameTrue = function (user_ini) {
    var us = new User_3();
    us.name = user_ini.name;
    us.age = user_ini.age;
    return us;
}
NnameFalse = function () {
    var us = new User_3();
    us.name = 'Anoninm';
    return us;
}

// col((NnameFalse()).sayHi());

function Art() {
    Art.count++;
    Art.date = new Date();
}

Art.count = 0;
Art.showParam = function () {
    return {
        count: this.count,
        date: this.date
    }
}
new Art();
new Art();
new Art();
// col(Art.showParam());

// col(Art.showParam.apply({count :'asv',  date :(new Date())} ));

function geen() {
    // return  col([].slice.call(arguments));
    return col([].join.call(arguments, ':'))
}

// geen('d', 'f', 'l');

// col(Math.max.apply(null, [2, 3, 7, 0]));

function sumArg_1() {
    var arr_arg = [].slice.call(arguments);
    return arr_arg.reduce(function (a, b) {
        return a + b;
    });
}

function sumArg_2() {
    arguments.reduce = [].reduce
    return arguments.reduce(function (a, b) {
        return a + b;
    });
}

function sumArg_3() {
    return [].reduce.apply(arguments, function (a, b) {
        return a + b;
    })
}

// col(sumArg_2(1, 4, -9, -8));

function applyAll_0() {
    var arr_arg = [].slice.call(arguments);
    var iniFunc = arr_arg[0];
    arr_arg.shift();
    return iniFunc.apply(null, arr_arg);
}

// col(applyAll_1(Math.min, 1, 2, 10));

function applyAll_1(func_ini) {
    return func_ini.apply(null, [].slice.call(arguments, 1));
}

var us_11 = {
    name: 'Stesha',
    sayAny: function () {
        return col('Yio  ' + this.name)
    }
}

// var s = setTimeout(function() {us_11.sayAny} , 1000);

function Du() {
    return us_11.sayAny();
}

// Du();
// us_11.sayAny();

function T() {
    return function mybind_3(func_ini, context) {
        return function U() {
            return func_ini.apply(context, arguments);
        }
    }
}

function mybind_2(func_ini, context) {
    col(arguments);
    func_ini.apply(context, arguments);

}

function Coll(a, b) {
    col(this);
    col(a + b);
}

// var ret_1 = mybind_1(Coll, 'Susrsr');
// var ret_2 = mybind_2(Coll, 'Susrsr');
// ret_1(2, 5);
//
// ret_2(3, 7);


// function A1(a) {
//     var vol1 = 'wery';
//     col(arguments);
//     return function A2(b) {
//         col(arguments);
//
//         var vol2 = 43;
//         return function A3(c) {
//             col(arguments);
//             col(b + c);
//             return col(vol1 + vol2);
//         }
//     }
// }
//
// A1(3)(4)(5);

function gon() {
    col(this);
}

// gon.bind('rt')();

user_pr = {
    a: 12,
    fu_1: function () {
        col(this.a);
    }
}

for (var prop in user_pr) {
    if (typeof user_pr[prop] == "function") {
        user_pr[prop] = user_pr[prop].bind(user_pr)
    }
}

// user_pr.a = 77;
// user_pr.fu_1();

function miu(a, b) {
    return a - b;
}

var miu10 = miu.bind(null, 10);

// col(miu10(2));

function askQuestionYesNo(admin_qestion, true_ansver, yes, no) {
    var user_anver = prompt(admin_qestion, 'yes?');
    if (user_anver == true_ansver) yes();
    else no();
}

admin = 'Free bird?';
true_ansv = 'yes';

function yess() {
    col(':)');
}

function noo() {
    col(':(');
}

// askQuestionYesNo(admin , true_ansv , yess , noo );

function f() {
    col(this);
}

var p = 345;
var user = {
    u: 'hello',
    g: f.bind('cacadc', null)
}

// user.g();
// col('cacadc');

function f() {
    col(this.name);
}

// f = f.bind( {name: 'Grisha'} ).bind( {name: 'Pasha'} );

// var g = mybind(f, {name: 'Grisha'});
// var z = mybind(mybind(f, {name: 'Grisha'}), {name: 'Pasha'});
// z();

// function sayHi() {
//     col( this.name );
// }
// sayHi.test = 5;
// col( sayHi.test ); // 5
//
// var bound = sayHi.bind({
//     name: "Вася"
// });

// col( bound.test ); // что выведет? почему?

"use strict";

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

// var user = {
//     login: 'Василий',
//     password: '12345',
//
//     loginOk: function() {
//         col( this.login + ' вошёл в сайт' );
//     },
//
//     loginFail: function() {
//         col( this.login + ': ошибка входа' );
//     },
//
//     checkPassword: function() {
//         ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//     }
// };
//
// user.checkPassword();

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function (result) {
        alert(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
    },

    checkPassword: function () {

        ask("Ваш пароль?", this.password,
            this.loginDone.bind(this, true),

            this.loginDone.bind(this, false)
        );
    }
};

var vasya = user;
user = null;

// vasya.checkPassword();

function my_bind(func_ini, context) {
    return function () {
        return func_ini.apply(context, arguments)
    }
}


// var fu_a = function (d) {
//       return col((this.a + this.b)*d);
//   }


function Ury(a, b) {
    this.a = a;
    this.b = b;
    this.fu_a = function U(d) {
        return col((this.a + this.b) * d);
    }
}

var mu_4_8 = new Ury(4, 8);
// mu_4_8.fu_a(2);

var timers = {};// obj for timer



function sS(a, b) {
    return a + b;
}

var rec = my_dec_TimsDuring(fu , true);
col(rec(30));


function fu(n) {
    return (n > 2) ? (fu(n - 1) + fu(n - 2)) : 1;
}
// var fibonD = timsDercor(fibon, 'during_fibon');
// fibonD(4);
// col(timers);
// col(timers.during_fibon);