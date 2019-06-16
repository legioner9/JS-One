/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

CoMach = function (power) {
    _this = this;

    this.waterMass = 0;

    getTimeBoil = () => {return this.waterMass / power;}

}
let cm = new CoMach(1000);
cm.waterMass = 300;
col(cm.waterMass);