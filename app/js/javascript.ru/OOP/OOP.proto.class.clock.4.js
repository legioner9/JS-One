/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
option = {
    template: 'h:m:s',
    int: 3000
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
// clo.start();
clo.stop();

function My_CLock(option) {
    this._template = option.template;
}

My_CLock.prototype.run = function () {
    this.render();
    this.tm = setInterval(() => {
        this.render();
    }, 1000);
}

My_CLock.prototype.stop = function () {
    clearInterval(this.tm);
}

My_CLock.prototype.render = function () {
    var time = new Date();

    var cond = function (a) {
        return a < 10 ? a = `0${a}` : a;
    }

    var hour = cond(time.getHours());
    var min = cond(time.getMinutes());
    var sec = cond(time.getSeconds());

    col(this._template.replace('h', hour).replace('m', min).replace('s', sec));
}


// debugger;
let mcl = new My_CLock(option);
mcl.run();
mcl.stop();

function My_CLock_ext(options) {
    My_CLock.apply(this, arguments);
    this._int = options.int
}

// debugger;
col(My_CLock);

My_CLock_ext.prototype = Object.create(My_CLock.prototype);
My_CLock_ext.prototype.constructor = My_CLock_ext;

My_CLock_ext.prototype.run = function () {
    this.render();
    this.tm = setInterval(() => {
        this.render();
    }, this._int);
}


My_CLock_ext.prototype.render = function () {
    My_CLock.prototype.render.apply(this, arguments);
    col(`interval = ${this._int}`);
}
let mcl_ext = new My_CLock_ext(option);
mcl_ext.run();
mcl_ext.stop();