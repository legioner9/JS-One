let Pr = __My_PropError


let date = '{"gender"/: "men"}';
debugger;
// let daters = {"age": 25, "gender": "men"};
// col(Object.keys(daters));
// daters.__my_OwnPropObject();
// let templ_use = ['age', 'gender'];
// col(JSON.parse(date));
col(JSON.parse__my_ArrProp(date));

function FormatError(message) {
    this.message = message;
    this.name = 'FormatError';
    if (SyntaxError.captureStackTrace) {
        SyntaxError.captureStackTrace(this, this.constructor);
    } else {
        this.stack = (new SyntaxError()).stack
    }
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;
