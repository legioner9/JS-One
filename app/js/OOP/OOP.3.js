/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function Mach(pow) {
    this._pow = pow;
    this._en = false;

    // var self = this;

    this.up = () => {
        this._en = true;
    };

    this.down = () => {
        this._en = false;
    };
}

function Fridge(pow) {
    Mach.apply(this, arguments);
    var food = [];

    this.addFood = (...arg) => {
        if (!this._en) {
            col('Frigl is down!');
            return;
        }
        var res = (arg.length + food.length) * 100 - pow;
        col(res);
        if (res <= 0) {
            food = food.concat(arg);
        } else {
            col('so many food(((');
            return;
        }
    }
        var filt = function (item, letter) {
            return (item.split(''))[0] == letter
        }

        var new_food = [];
        this.filterFood = function (food, letter) {
            if (!food.length) {
                col('frigle is empty - filter is impossible');
                return new_food;
            }
            for (let i = 0; i < food.length; i++) {
                if (filt(food[i], letter)) {
                    new_food.push(food[i]);
                }
            }
            return new_food;
        }

        var par_down = this.down;
        this.down = function () {
            par_down.call(this);
            if (food.length) {
                col('food in volume! down disable');
                return;
            }
        }


    this.getFood = () => food.slice();

    this.removeFood = function (_food, item) {
        if (!_food.length) {
            col('frigle is empty - remove is impossible')
        }
        if (_food.indexOf(item) != -1) {
            _food.splice(_food.indexOf(item), 1);
            col(`${item} is delited))) result : ${_food}`);
            food = _food;
            return true;
        } else {
            col(`${item} is absent((( result : ${_food}`);
            return false;
        }
    }
    col(` init time  : ${new Date()}`);
    var timer = 1000;
    this.timeUp = function() {
        setTimeout( () => {
            col(` check time  : ${new Date()}`)
            this.up()
        }, timer);
    }
}


var fr = new Fridge(500);
// fr.timeUp();
fr.up();
fr.addFood('er', 'bar');
fr.addFood('err', 'barr', 'ghgh');
col(fr.getFood())
fr.down();
col(fr.filterFood(fr.getFood(), 'e'));
fr.removeFood(fr.getFood(), 'er');
fr.removeFood(fr.getFood(), 'ert');

