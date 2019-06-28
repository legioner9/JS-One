/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function col(volume){
    console.log(volume);
}

/**
 * exampl init func #clousure
 * @returns {Array}
 */
function makeArmy_init() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooter = function() { // функция-стрелок
            col( i ); // выводит свой номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy_init();

// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...

/**
 * #clousure #solution1
 * @returns {Array}
 * var army_1 = makeArmy_1();
 * var army_1[1]();
 */
function makeArmy_1() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooter = function CallProperty_i() {
            col( CallProperty_i.i); // выводит свой номер
        };
        shooter.i = i;
        shooters.push(shooter);
    }

    return shooters;
}

var army_1 = makeArmy_1();

// army_1[1]();

/**
 * #clousure #solution2
 * @returns {Array}
 * var army_2 = makeArmy_2();
 * var army_2[1]();
 */
function makeArmy_2() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooter =
          function (x) {
             return  function Us() { // функция-стрелок
                  col(x); // выводит свой номер
              };
          }

        shooters.push(shooter(i));
    }

    return shooters;
}

var army_2 = makeArmy_2();

// army_2[1]();

/**
 * #clousure #solution3
 * @returns {Array}
 * var army_3 = makeArmy_3();
 * var army_3[1]();
 */
function makeArmy_3() {

    var shooters = [];

    for (var i = 0; i < 4; i++)
        Puhser(i);
   function Puhser(a){
        var shooter = function() { // функция-стрелок
            col( a ); // выводит свой номер
        };
        shooters.push(shooter);
    }

    return shooters;
}
var army_3 = makeArmy_3();

// army_3[1]();

/**
 * #clousure #solution4
 * @returns {Array}
 * var army_4 = makeArmy_4();
 * var army_4[1]();
 */
function makeArmy_4() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooterA = function() { // функция-стрелок
            var j = i;
            return function Sut() {
                col( j ); }// выводит свой номер
        };
        shooters.push(shooterA());
    }

    return shooters;
}

// var army_4 = makeArmy_4();
// army_4[0](); // стрелок выводит 10, а должен 0
// army_4[1](); // стрелок выводит 10...
// army_4[2](); // стрелок выводит 10...
// army_4[3](); // стрелок выводит 10...
// .. все стр

/**
 * #clousure #solution5
 * @returns {Array}
 * var army_5 = makeArmy_5();
 * var army_5[1]();
 */
function makeArmy_5() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooterA = function() { // функция-стрелок
            var j=i;
          return  function Sut() {
                col( j );
          }// выводит свой номер
        };
        shooters.push(shooterA());
    }

    return shooters;
}

var army_5 = makeArmy_5();

army_5[0](); // стрелок выводит 10, а должен 0
army_5[1](); // стрелок выводит 10...
army_5[2](); // стрелок выводит 10...
army_5[3](); // стрелок выводит 10...