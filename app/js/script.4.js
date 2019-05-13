/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function col(volume){
    console.log(volume);
}



function objCopyPropFromSrc(obj_init, dev) {
    dev = arguments[(arguments.length - 1)] || false;
    obj_init = arguments[0];
    obj_res = {};

    let objRes = obj_res;
    for (var i = 0; i < arguments.length - 1; i++) {
        // var obj_curr = arguments[i];
        const {arguments: arguments1} = arguments.callee;
        var obj_curr = arguments1[i];
        col(objRes);
        for (var key in obj_curr) {
            objRes[key] = obj_curr[key];
        }
    }

    let dev1 = dev;
    if(dev1)
    {return result = {
        'dev' : dev1,
        'result' : 'objCopyPropFromSrc(obj_init, dev)',
        'obj_init' : obj_init,
        'obj_res' : objRes
        };
    }
    else
    {
        return objRes;
    }
}

var vasya = {
    age: 21,
    name: 'Вася',
    surname: 'Петров'
  };
  
  var user = {
    isAdmin: false,
    isEmailConfirmed: true
  };
  
  var student = {
    university: 'My university'
  };

// objCopyPropFromSrc(vasya, user, student, false);
// col(objCopyPropFromSrc({}, user, student, true));

var obj_arg = {
    prop_1 : value_1 = 1,
    prop_2 : value_2 = 2,
    prop_3 : value_3 = 3
};

function objFuncObjArg(obj_arg, dev){
    dev = dev || false;

    col(obj_arg.prop_1);
    col(obj_arg.prop_2);
    col(obj_arg.prop_3);

    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'objFuncObjArg(obj_arg, dev)',
        'obj_arg' : obj_arg,
        // 'arr_res' : arr_res
        };
    }
    else
    {
        return obj_arg;
    }
}

// col(objFuncObjArg(obj_arg, true));

function objUndefArg(obj_arg){
    return (arguments.length ? 1 : 0);

}

// col(objUndefArg());

function sumArg(arr_ini) {
    // dev = dev || true;

    res = 0;

    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return result = {

        'result': 'sumArg(arr_ini)',
        'arr_ini': res,
        // 'arr_res' : arr_res
    };
}

// col(sumArg(100, 7, 34));

date_init = new Date(3600*24*1000);
date_real = new Date();
// col(toString(date_init));

var date_options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

var d = new Date, res_time;
//   col(+d);
// col(Date(+d));
// col(Date((d.setDate(d.getDate() + 1))));
// col(d.getDate());
// col(d.getMonth());
// col(new Date(d.setMonth(d.getMonth()-12)));
dd = date_real - date_init;

col(new Date(dd));

arr_10000 =[];
for (var i = 0 ; i < 10000 ; i++){
    arr_10000[i] = i;


}

/**
 *
 * @param arr_ini
 * @param dev
 * @returns {{result: string, dev: (*|boolean), res_time: (number|*)}}
 * @constructor
 */

function TimingArrIn(arr_ini, dev){
    dev = dev || false;
let curr_time = Date.now();
for (var key in arr_ini){
    arr_ini[key] = arr_ini[key] + 1;
}
res_time = Date.now() - curr_time;
    if (dev) {

        return result = {
            'dev': dev,
            'result': 'TimingArrIn(arr_ini, dev)',
            'res_time': res_time
        };
    } else {
        return;
    }}

/**
 *
 * @param arr_ini
 * @param dev_1
 * @returns {{result: string, dev_1: (* | boolean), res_time: (number | *)}}
 * @constructor
 */
function TimingArrLength(arr_ini, dev_1){
    dev_1 = dev_1 || false;

curr_time = Date.now();

for (var i = 0 ; i < arr_ini.length ; i++){
    arr_ini[i] = arr_ini[i] + 1;
}
res_time = Date.now() - curr_time;
    if(dev_1)
    {return result = {
        'dev_1' : dev_1,
        'result' : 'TimingArrIn(arr_ini, dev_1)',
        'res_time' : res_time
        };
    }
    else
    {
        return ;
    }
}

col(TimingArrIn(arr_10000 , true));
col(TimingArrLength(arr_10000 , true));

var options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
col((new Date( Date.now())).toLocaleString("ru", options));
// col(ddd.toDateString());