/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let SuperClass_A = function (a) {
    this.aa = a;
    this.sc_a = function () {
        col(this.aa);
    }
}

SuperClass_A.prototype.Pr_A = function () {
    col('SuperClass_A.prototype.Pr_A')
};

let SuperClass_B = function (b) {
    this.bb = b;
    this.sc_b = function () {
        col(this.bb);
    }
}

SuperClass_B.prototype.Pr_B = function () {
    col('SuperClass_B.prototype.Pr_B')
};

let MyClass = function (a, b) {
    SuperClass_A.call(this, a);
    SuperClass_B.call(this, b);
}
debugger;

MyClass.prototype = Object.create(SuperClass_A.prototype);
MyClass.prototype = Object.create(SuperClass_B.prototype);
// mixin(MyClass.prototype, SuperClass_B.prototype);
