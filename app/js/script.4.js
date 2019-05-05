function col(volume){
    console.log(volume);
}



function objCopyPropFromSrc(obj_init, dev){
    dev = arguments[(arguments.length - 1)] || false;
    obj_init = arguments[0];
    obj_res = {};

    for (var i = 0 ; i < arguments.length-1 ; i++){
        // var obj_curr = arguments[i];
        var obj_curr = arguments.callee.arguments[i];
        col(obj_res);
        for (var key in obj_curr) {
            obj_res[key] = obj_curr[key];
        }
    }

    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'objCopyPropFromSrc(obj_init, dev',
        'obj_init' : obj_init,
        'obj_res' : obj_res
        };
    }
    else
    {
        return obj_res;
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

let obj_arg = {
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

function sumArg(arr_init){
    // dev = dev || true;
    res = 0;
    for (var i = 0 ; i < arguments.length ; i++){
        res += arguments[i];
    }

    return result = {

        'result' : 'sumArg(arr_init)',
        'arr_init' : res,
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

  var d = new Date;
  col(+d);
col(Date(+d));
// col(Date((d.setDate(d.getDate() + 1))));
col(d.getDate());
col(d.getMonth());
col(new Date(d.setMonth(d.getMonth()-12)));
