/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function Mach(pow) {
    this._pow = pow;
    this._en = false;
    this.up = function () {
        this._en = true;
    }
    this.down = function () {
        this._en = false;
    }
}

function CoMach(pow) {

    Mach.apply(this, arguments);

    var water_mass = 100,
        time_redy = 1000,
        tms;
    this.getWaterMass = function () {
        return water_mass;
    }

    var par_down = this.down;
    this.down = function () {
        par_down.call(this);
        clearTimeout(tms);
    }

    this.setWaterMass = function (mass_woter) {
        water_mass = mass_woter;
    }

    function timeRedy() {
        return 10000 / water_mass;
    }

    var par_up = this.up;  // copy parent original meth
    this.up = function () { // redifine par meth
        par_up.call(this);  // parent method
        this.getWaterMass;  // chaild`s add to that
    }

    this.run = function () {
        try {
            if (!this._en) {
                throw Error('engen is off!')
            }
        } catch (e) {
            if (e.message == 'engen is off!') {
                col('engen is off!');
                return;
            } else {
                throw e;
            }
        }


        tms = setTimeout(() => {
            col(this.getWaterMass());
        }, timeRedy());
    }
}

cm = new CoMach(900);
cm.up();
cm.run();
cm.down();