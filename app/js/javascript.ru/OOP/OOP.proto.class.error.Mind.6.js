window.__my_PropError = function (prop) {
    __my_Class_Init_Error.call(this , `Sorry error in property ${prop}`);
    this.name = 'PropError';
    this.property = prop;
}

__my_PropError.prototype = Object.create(__my_Class_Init_Error.prototype);
__my_PropError.prototype.constructor = __my_PropError;

let er = new PropError('fuga');
debugger;