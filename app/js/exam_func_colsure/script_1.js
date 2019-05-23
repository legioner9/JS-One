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

    for (var i = 0; i < 10; i++) {
        var shooter = function() { // функция-стрелок
            alert( i ); // выводит свой номер
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
 */
function makeArmy_1() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooter = function my() {
            my.i =i;
            col( my.i); // выводит свой номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

var army_1 = makeArmy_1();

army_1[1]();