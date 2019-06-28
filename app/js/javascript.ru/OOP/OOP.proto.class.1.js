/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function Anymal(Class, args) {
    this.plase = 'earth';
    this.nameClass = Class;
    this.speed = 0;
}


function Rabbit(Vid, Class, args) {
    let _this = this;
    _this.skin = 'fur';
    Anymal.apply(this, [Class, args]);
    this.nameVid = Vid;
    this.whatSkin = function () {
        col(this.skin);
        this.skin = 'iiiiiiiii'
    }
}


Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype = Object.create(Anymal.prototype);

let ra = new Rabbit('rabby', 'mleco');

Anymal.prototype.go_run = function (to_speed) {
    this.speed += to_speed;
};

Rabbit.prototype.go_run = function () {
    Anymal.prototype.go_run.apply(this, arguments);
    this.jump()
}
Rabbit.prototype.stop = function () {
    this.speed = 0;
}

Rabbit.prototype.jump = function () {
    this.heght = 10;
    col(`${this.nameVid}  jump to heght ${this.heght} and speed = ${this.speed}`)
}

ra.go_run(10);
ra.go_run(15);
ra.stop();

debugger;
Rabbit.prototype = Anymal.prototype;
Rabbit.prototype.prom = function () {

}