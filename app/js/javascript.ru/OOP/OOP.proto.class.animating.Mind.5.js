/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function Menu(state) {
    this._state = state || this.STATE_CLOSED;
}

Menu.prototype.STATE_CLOSED = 0;
Menu.prototype.STATE_OPEN = 1;

Menu.prototype.open = function () {
    this._state = this.STATE_OPEN;
}

Menu.prototype.close = function () {
    this._state = this.STATE_CLOSED;
}

Menu.prototype.resultOpen = function () {
    //OPEN code
    return `state is ${this._state} result OPEN`;
}

Menu.prototype.resultClose = function () {
    //CLOSE code
    return `state is ${this._state} result CLOSE`;
}

Menu.prototype.resultState = function () {
    try {
        switch (this._state) {
            case this.STATE_OPEN :
                return this.resultOpen();
            case this.STATE_CLOSED :
                return this.resultClose();
            default : {
                col(`state is uncorrect = ${this._state}`)
                new Error(`state is uncorrect`)
            }
        }
    } catch (e) {
        if (e.message == `state is uncorrect`) {
            //    Code for treat err _state ( open , close)
        } else {
            throw e;
        }
    }
}
Menu.prototype.showResult = function () {
    col(this.resultState());
}

//AnimateMenu
function AnimateMenu(state) {
    Menu.apply(this, arguments);
}

AnimateMenu.prototype = Object.create(Menu.prototype);
AnimateMenu.prototype.constructor = AnimateMenu;

AnimateMenu.prototype.STATE_ANIMATE = 2;

AnimateMenu.prototype.resultAnimate = function () {
    //ANYMATE code
    return `state is ${this._state} result ANYMATE`;
}
AnimateMenu.prototype.resultState = function () {
    switch (this._state) {
        case this.STATE_ANIMATE :
            return this.resultAnimate();
        default : {
            return Menu.resultState.apply(this , arguments);
        }
    }
}