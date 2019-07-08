window.ifCallbackTypeTrue = function (callback) {
    if (callback && typeof (callback) === "function") {
        callback();
    } else {
        throw new Error('Callback not valid type(((')
    }
}
debugger;
let mf = function (name , cb ) {
    col(`${name}  it is name`);
    ifCallbackTypeTrue(cb);
}
let cf = () => col('iuhbibbib');
mf('Vasya' , cf)
