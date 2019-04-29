function col(volume){
    console.log(volume);
}


function strSplit(str_any, dev){
    dev = dev || false;

    // str_any = 'wevf, erwe, qwewrcf';
    arr_res = str_any.split(', ');

    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'strSplit(str_any, dev)',
        'str_any' : str_any,
        'arr_res' : arr_res

        };
    }
    else
    {
        return  arr_res;
    }
}

/**
 * Return a singl-chara
 * @param  {} a
 */
// str.charAt(a);

/**
 * @param  {}
 */
// var str.toUpperCase();

// str = 'wrt-dtyuj-wcc';
// col(arr = str.split(''));
// for (var i = 0 ; i < arr.length  ; i++){
//     if (arr[i] == '-'){
//         var item = arr[i+1];
//         arr.splice(i , 2 , item.toUpperCase());
//     }
//     str_res = arr.join('');
// }
// col(str_res);

// function strCamelize(str_init, dev){
//     dev = dev || false;

//     var arr = str_init.split('');

//     for (var i = 0 ; i < arr.length  ; i++){
//         if (arr[i] == '-'){
//             var item = arr[i+1];
//             arr.splice(i , 2 , item.toUpperCase());
//         }
//         str_res = arr.join('');
//     }

//     if(dev)
//     {return result = {
//         'dev' : dev,
//         'result' : 'strCamelize(arr_init, dev)',
//         'str_init' : str_init,
//         'str_res' : str_res
//         };
//     }
//     else
//     {
//         return str_res;
//     }
// }

// col(strCamelize2('-qwed-ceq-vgrw', true));

// obj = {
//     className : 'menu Open rewqery'
// };

/**
 * Copy obj_init by fssign
 * @param  {} obj_init
 * @param  {} dev
 */
function copyObjToAssign(obj_init, dev){
    dev = dev || false;
    var obj_res = Object.assign({} , obj_init);
    if(dev)
    {return result = {
        'dev' : dev ,
        'result' : 'copyObjToAssign(obj_init, dev)',
        'obj_init' : obj_init ,
        'obj_res' : obj_res
        };
    }
    else
    {
        return obj_res;
    }
}

function removeClasses(obj_any, className, remove_cls, dev){
    dev = dev || false;

    var obj_res = copyObjToAssign(obj_any);

    var arr_init = obj_any.className ? obj_any.className.split(' ') : [] ;
    for(var i = 0 ; i < arr_init.length ; i++){
        if(arr_init[i] == remove_cls) {
        arr_init.splice(i , 1);
        i-- ;
        }
    }


            obj_res.className = arr_init.join(' ');

    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'removeClasses(obj_any, className, add_cls, dev)',
        'obj_any' : obj_any ,
        'arr_init' : arr_init ,
        'remove_cls' : remove_cls,
        'obj_res' : obj_res
        };
    }
    else
    {
        return obj_res;
    }
}

// var obj_any = {
//     className : 'open open menu'
//     };
// var remove_cls = 'open';
// var className = 'className';

// col(removeClasses(obj_any, className, remove_cls, true));

var ar = [1,3,5,6,4,88,4,6,9];
var a = 2;
var b = 6;
// col(ar_res = ar.sort(f_sort_1));
// col(ar_res = arrSortByFunc(ar, f_sort_1, true));


function strCamelize2(str_init, dev){
    dev = dev || false;

    var arr = str_init.split('-');

    for (var i = 0 ; i < arr.length  ; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        str_res = arr.join('');


    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'strCamelize2(arr_init, dev)',
        'str_init' : str_init,
        'str_res' : str_res
        };
    }
    else
    {
        return str_res;
    }
}

/**
 * CLASS
 * @param  {} a
 * @param  {} b
 */
function f_sort_1(a , b){
    // col(a + '<>' + b);
    return b - a;
    // return 0 , 1 ,-1 ;
}


func_sorting = f_sort_1(a , b);

/**
 * Copies arr_init in arr_res and return them
 * @param  {} arr_init
 */
function arrCopy(arr_init , dev){
    dev = dev || false;
    var arr_res = [];
    for (var i = 0 ; i < arr_init.length ; i++){
        arr_res[i] = arr_init[i];
    }
    if(dev){return result = {
        'arr_init' : arr_init,
        'arr_res' : arr_res
        };
    }return arr_res;
}

/**
 * CLASS
 * Array arr_init sorting by function
 * func_sorting (a,b)
 * @param  {} arr_init
 * @param  {} func_sorting
 * @param  {} dev
 */
function arrSortByFunc(arr_init, func_sorting, dev){
    dev = dev || false;
    arr_res = arrCopy(arr_init);
    var arr_res = arr_res.sort(func_sorting);
    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'arrSortByFunc(param, dev)',
        'arr_init' : arr_init,
        'func_sorting' : 'func_sorting',
        'arr_res' : arr_res
        };
    }
    else
    {
        return arr_res;
    }
}

arr_i = [1,2,3,4,5,6];

/**
 * CLASS
 * @param  {} a
 * @param  {} b
 */
function f_sort_2(a , b){
    // col(a + '<>' + b);
    return 0.5 - Math.random();
    // return 0 , 1 ,-1 ;
}

/**
 * CLASS
 * @param  {} a
 * @param  {} b
 */
function f_sort_3(a , b){
    // col(a + '<>' + b);
return a.age - b.age;
    // return 0 , 1 ,-1 ;|
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

// col(arrSortByFunc(people, f_sort_3, true));

obj_list = {
    value : 1,
    next : {
        value : 2,
        next : {
            value : 3,
            next : null
            }
        }
    };

// col(obj_lin);

function printList(list){
    var tmp = list;
    while(tmp){
        col(tmp.value);
        tmp = tmp.next;

    }
}

function printList2(list){
    col(list.value);
    if(list.next){
        printList2(list.next);
    }
}

printList2(obj_list);