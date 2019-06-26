/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
option = {
    template: 'h : m : s'
}

function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function () {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function () {
    clearInterval(this._timer);
};

Clock.prototype.start = function () {
    this._render();
    var self = this;
    this._timer = setInterval(function () {
        self._render();
    }, 1000);
};
// debugger;
var clo = new Clock({
    template: 'h:m:s'
});
clo.start();
clo.stop();

function My_CLock(option) {
    this._template = option.template;
}

My_CLock.prototype.run = function () {
    this.render();
    this.tm = setTimeout(() => {
        this.render();
    }, 1000);
}

My_CLock.prototype.render = function () {
    var time = new Date();

    var cond = function (a) {
        return a < 10 ? a = `0${a}` : a;
    }

    var hour = cond(time.getHours());
    var min = cond(time.getMinutes());
    var sec = cond(time.getSeconds());

    col(this._template.replace('h', hour).replace('m' , min).replace('s' , sec))
}


debugger;
let mcl = new My_CLock()
