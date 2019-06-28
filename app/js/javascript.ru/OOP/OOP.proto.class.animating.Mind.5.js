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

Menu.prototype.resultState = function () {
    
}