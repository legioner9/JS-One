/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// col.rus(88);
// "use strict"
var obj = {
    go: function() { col(this) }
};
var obj2 = {
    go2: function() { col(this) }
};



// var obj, method;

// obj = {
//     go: function() { col(this); }
// };
//
// obj.go();            // (1) object
//
// (obj.go)();          // (2) object
//
// (method = obj.go)();      // (3) undefined
//
// (obj.go || obj.stop)(); // (4) undefined

var exp = {
    fName  : 'piter',
     export : this
};

var name = "";

var user = {
    name: "Василий",

    export: function A() {
        return {
            value: this
        };
    }

};

// col( user.export().value.name );
// col( user.export );
// col( user.export() );
// col( user.export() .value);
// col( user.export().value.export().value.name );
function showNameS(Obj) {
    return  Obj.name;
}
user_i = {
    name : 'piters',
    sayHiS : function () {
        var n = showNameS(this);
        col('Hi '+ n + '!)))')
    }
}
// user_i.sayHiS();

us_1 = {name : 'grisha'};
us_2 = {name : 'pasha'};

function picName() {
    return this.name;
}
us_1.Fu = picName;
us_2.Fu = picName;
//
// col(us_1.Fu());
// col(us_2.Fu());
// col(us_2['Fu']());



var calculator = {
    sum: function() {
        return this.a + this.b;
    },

    mul: function() {
        return this.a * this.b;
    },

    read: function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
}
// calculator.read();
// col( calculator.sum() );
// col( calculator.mul() );

var Ladd = {
    step : 0,
    up : function (){
        this.step++;
        return this;
    },
    down : function (){
        this.step--;
        return this;
    },
    show : function () {
        col(this.step);
        return this
    }
}
// Ladd.up().up().up().down().show();

var room = {
    number: 777,
    tame : 77788,
    ret: 'erfwer',
    valueOf: function() { return this.number; },
    toString: function() { return this.number; }
};

// col( room.valueOf() );  // ?
// col( room.toString() );  // ?
// delete room.valueOf; // valueOf удалён
// delete room.toString;
// col( room.valueOf() );  // ?
// col( room.toString() );  // ?

function sum(b) {
    var a;

}