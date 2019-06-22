/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
'use strict'
col('1' + new Date());
// function onReady ()  {
// };

function CoMach(power, max_vol) {
    // let _this = this;
    let WATER_H_CAP = 4200;
    let st;
    let waterMass = 100;
    let in_proseed = false;

    function onReady ()  {
     };

   this.isRunning = function (){
       return col(!!st);
   }

    function getTimeBoil() {
        // col(waterMass);
        return waterMass * WATER_H_CAP * 80 / power;
    }

    this.run = function () {
       in_proseed = true;
        st = setTimeout(function () {
                st = false;
                onReady();
            }
            , getTimeBoil());
        setTimeout(this.isRunning, getTimeBoil() +1000)
    }

    this.stop = () => {
        clearTimeout(st);
    }
    this.getWaterMass = function () {
        return waterMass;
    }
    this.setOnReady = function (nf) {

        onReady = nf;
    }
    this.addWater = function (add_mass_woter) {
        this.setWaterMass(waterMass + add_mass_woter);
    }

    this.setWaterMass = function (mass_woter) {
            try {
                if (mass_woter > max_vol) {
                    throw new Error('so many!');
                }
                if (mass_woter < 10) {
                    throw new Error('it\'s impossible!');
                }
            } catch (e) {
                col(e.message);
                return;
            }
        waterMass = mass_woter;
    }
}

let cm = new CoMach(10000, 1500);
cm.setWaterMass(200);
// cm.stop();
cm.setOnReady(function () {
    var amount = cm.getWaterMass();
    col(new Date());
    col('Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});
cm.addWater(50);
col(cm.getWaterMass());
cm.isRunning();
cm.run();
setTimeout(cm.isRunning(), 20000);
// cm.stop();
// onReady();
