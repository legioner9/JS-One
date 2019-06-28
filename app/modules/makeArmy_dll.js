/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
;(function()
{
    function col(volume) {
        console.log(volume);
    }

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
                col(CallProperty_i.i); // выводит свой номер
            };
            shooter.i = i;
            shooters.push(shooter);
        }

        return shooters;
    }

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
                    return function Us() { // функция-стрелок
                        col(x); // выводит свой номер
                    };
                }

            shooters.push(shooter(i));
        }

        return shooters;
    }

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

        function Puhser(a) {
            var shooter = function () { // функция-стрелок
                col(a); // выводит свой номер
            };
            shooters.push(shooter);
        }

        return shooters;
    }

    /**
     * #clousure #solution4
     * @returns {Array}
     * var army_4 = makeArmy_4();
     * var army_4[1]();
     */
    function makeArmy_4() {

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

    /**
     * #clousure #solution5
     * @returns {Array}
     * var army_5 = makeArmy_5();
     * var army_5[1]();
     */
    function makeArmy_5() {

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

})();

/**
 * FICH
 * #chaining #this
 * @type {{show: (function(): Ladd), step: number, up: (function(): Ladd), down: (function(): Ladd)}}
 * Ladd.up().up().up().down().show();
 */
var Ladd = {
    step : 0,
    up : function (){
        this.step++;
        return this;
    },
    down : function (){
        this.step--;
        return this;
    },
    show : function () {
        col(this.step);
        return this
    }
}