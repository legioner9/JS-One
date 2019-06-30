/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function MenuOpenClose(State) {
    this.State_ = State || this.State_Close;
}

MenuOpenClose.prototype.State_Close = 0;
MenuOpenClose.prototype.State_Open = 1;

MenuOpenClose.prototype.inOpen = function () {
    //CODE inOpen
    this.State_ = this.State_Open;
}

MenuOpenClose.prototype.inClose = function () {
    //CODE inClose
    this.State_ = this.State_Close;
}

MenuOpenClose.prototype.openTo = function () {
    //OPEN code
    return `state is ${this.State_} result OPEN`;
}

MenuOpenClose.prototype.closeTo = function () {
    //CLOSE code
    return `state is ${this.State_} result CLOSE`;
}

MenuOpenClose.prototype.decodingState = function () {
    try {
        switch (this.State_) {
            case this.State_Close :
                return this.closeTo();
            case this.State_Open :
                return this.openTo();
            default : {
                col(`state is uncorrect = ${this.State_}`)
                new Error(`state is uncorrect`)
            }
        }
    } catch (e) {
        if (e.message == `state is uncorrect`) {
            //    Code for treat err State_ ( open , close)
        } else {
            throw e;
        }
    }
}
MenuOpenClose.prototype.resumeState = function () {
    col(this.decodingState());
}

//AnimateMenu
function MenuOpenCloseAnimate(State) {
    MenuOpenClose.apply(this, arguments);
}

MenuOpenCloseAnimate.prototype = Object.create(MenuOpenClose.prototype);
MenuOpenCloseAnimate.prototype.constructor = MenuOpenCloseAnimate;

MenuOpenCloseAnimate.prototype.State_Animate = 2;

MenuOpenCloseAnimate.prototype.animateTo = function () {
    //CODE animateTo
    return `state is ${this.State_} result ANYMATE`;
}
MenuOpenCloseAnimate.prototype.decodingState = function () {
    switch (this.State_) {
        case this.State_Animate :
            return this.animateTo();
        default : {
            return MenuOpenClose.prototype.decodingState.call(this);
        }
    }
}

MenuOpenCloseAnimate.prototype.inAnimate = function () {
    this.State_ = this.State_Animate;
    col(new Date());
    col(`state is ${this.State_}`);
    this.tm = setTimeout(() => {
            MenuOpenClose.prototype.inOpen.apply(this, arguments);
            col(new Date());
            col(`state is ${this.State_}`);
        }
    )
}

MenuOpenCloseAnimate.prototype.closeTo = function () {
    clearTimeout(this.tm);
    MenuOpenClose.prototype.closeTo.apply(this);
}

let me = new MenuOpenCloseAnimate();
debugger;
me.resumeState();
