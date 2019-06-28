function col(volume){
    console.log(volume);
}
function isInt(volume){
    return (volume === (volume ^0));

}


// var fruits = ["Яблоко", "Апельсин", "Слива"];
// col(fruits);
// col(fruits.pop());
// col(fruits);
// fruits.push('Tyckva');
// col(fruits);
// fruits.unshift('aavcfvf','vqwevev');
// col(fruits);
// col(fruits[fruits.length-1]);
// col(Math.floor(Math.random()*10));
// col(fruits);
// col(fruits.splice(2,1));
// col(fruits);
// ar = [1, 2 , 3, 1 , 5 , 1];
// col(ar);
// res = arrayDelItem(ar , 2 , 1);
// col(res);
// col(ar);


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


function arrayDelItem(arr_any , item , dev){
    dev = dev || false;
    var arr_init = [];
    arrCopy(arr_any , arr_init);
    index = -1;
    count = 0;
    while((index = arr_any.indexOf(item , index+1)) !== -1){
        arr_any.splice(index,1);
        index--;
        count++;
    }
    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'arrayDelItem(arr_any , item)',
        'arr_init' : arr_init,
        'item' : item,
        'arr_res' : arr_any,
        'count' : count};
    }
    else
    {
        return arr_any;
    }

}

// ar_1 = [2,4,7,9,1,5,10,-3,0];
// col(ar_1);
// arr_result = filterRange(ar_1 , 2 , 9);
// col(arr_result);

function filterRange(arr, a, b){
    ar_res = [];
    j = 0;
    for (var i = 0 ; i < arr.length ; i++){
        if(arr[i]>a && arr[i]<b){
            ar_res[j] = arr[i];
            j++;
        }
    }
    return result = {
        'result' : 'filterRange(arr, a, b)',
        'arr_init' : arr,
        'min' : a,
        'max' : b,
        'ar_res' : ar_res
    };
}

// var str = 'vdfsv, fvfde, wvever, evwfwv, vwvedw';
// col(str.split(', '));

function strSplit(str_any, dev){
    dev = dev || false;

    // str_any = 'wevf, erwe, qwewrcf';
    arr_res = str_any.split(', ');

    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'NAME_func(param, dev)',
        'str_any' : str_any,
        'arr_res' : arr_res

        };
    }
    else
    {
        return  arr_res;
    }
}

// str_any = 'wevf, erwe, qwewrcf';
// col(arr = strSplit(str_any , false));
// col(str = arr.join('-'));

// var arr = [1, 2, 3];
// col(str = arr.join('-'));
// col(arrJoin(arr, false));

// col(arrJoin(arr_any , 1));

function arrJoin(arr_any, dev){
    dev = dev || false;

    str_res = arr_any.join(';');

    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'NAME_func(param, dev)',
        'arr_any' : arr_any ,
        'str_res' : str_res
        

        };
    }
    else
    {
        return str_res;
    }
}

ar_0 = [1,2,3,4];
ar_ins = [8,9];
// col(ar)
// col(str_ins = ar_ins.join(','));
// ar_res = ar_0.splice(2 , 0 ,str_ins);
// col(ar_0);
col(arrInsArr(ar_0, 2, ar_ins , true));

function arrInsArr(arr_init ,index_ins, arr_ins, dev){
    arr_res = arrCopy (arr_init, false);
    dev = dev || false;
    for (var i = 0 ; i < arr_ins.length ; i++){
        arr_res.splice(index_ins+i,0,arr_ins[i] );
    }

    if(dev)
    {return result = {
        'dev' : dev,
        'result' :  'arrInsArr(arr_init ,arr_ins, dev)',
        'arr_init' : arr_init,
        'arr_ins' : arr_ins,
        'index_ins' : index_ins,
        'arr_res' : arr_res
        };
    }
    else
    {
        return arr_res;
    }
}

// ar_1 = [1,2,3,4,5,6,9];
// col(ar_1.slice(2,4));
// col(arrSlise(ar_1, 2, 4, true));

function arrSlise(arr_init, index_init , index_last , dev){
    dev = dev || false;
    var arr_res = arr_init.slice(index_init , index_last);

    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'arrSlise(arr_init, index_init , index_last , dev)',
        'arr_init' : arr_init,
        'arr_res' : arr_res,
        'index_init' : index_init,
        'index_last' : index_last
        };
    }
    else
    {
        return arr_res;
    }
}

arr_init = [3, 2, 9, 4, 7 ,8];

f_sortingN2 = function f_sortN2(a, b){
    // col( a + " <> " + b );
    if((a%2==0) && (b%2==0)) return 0;
    if((a%2==0) && !(b%2==0)) return 1;
    if(!(a%2==0) && (b%2==0)) return -1;
    if(!(a%2==0) && !(b%2==0)) return 0;
    // col(a%2 && b%2) ;
    // col(a%2 && !b%2);
    // col(!a%2 && b%2) ;
    // col(!a%2 && !b%2);
};
// col(arr_res = arr_init.sort(f_sorting));

// function arrSortByFunc(arr_init, func_sorting, dev){
//     dev = dev || false;
//     arr_res = arrCopy(arr_init);
//     var arr_res = arr_res.sort(func_sorting);
    
//     if(dev)
//     {return result = {
//         'dev' : dev,
//         'result' : 'arrSortByFunc(param, dev)',
//         'arr_init' : arr_init,
//         'func_sorting' : func_sorting,
//         'arr_res' : arr_res
//         };
//     }
//     else
//     {
//         return arr_res;
//     }
// }

// col(arrSortByFunc(arr_init , f_sortingN2 , true));

/**
 * CLASS
 * @param  {} a
 * @param  {} b
 */
function f_sortAB(a , b){
    // col(a + '<>' + b);
    return a-b;
    // return 0 , 1 ,-1 ;
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

// ar = [1,4,2,6];
// col(arrSortByFunc(ar , f_sortAB, true));
// ar_2 = ar.slice();
// col(ar_2);
// col(arr_res);

function serchPromtByEratosfen(n, dev){

    dev = dev || false;
    arr_res = [];
    
    for (var i = 2 ; i <= n  ; i++){
        arr_res[i] = true;
    }

    var p = 2;
    for ( i = 2 ; i <= n  ; i++){
        if((i*2) <= n) arr_res[2*i] = false;
    }

    do{
        for ( i = p+1 ; i <= n  ; i++){
            if(arr_res[i]) {
                p = i;break;
            }
        }

        for ( i = p ; i <= n  ; i++){
            if((i*p) <= n) arr_res[p*i] = false;
            else break;
        }

    } while (p*p<=n );
        var arr_res_num = [];
        var k = 0;
        for ( i = 2 ; i <= arr_res.length  ; i++){
            if(arr_res[i]) {
                arr_res_num[k] = i;
                k++;
            }
        }

    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'serchPromtByEratosfen(n, dev)',
        'arr_res' : arr_res,
        'arr_res_num' : arr_res_num,
        'n' : n

        };
    }
    else
    {
        return arr_res_num;
    }
}

// col(serchPromtByEratosfen(20, true));
// ari = [8,6];
// ari_1 = [99,33];
// col([1,2,3,4].concat(ari,ari_1));
// col(Object.keys([1,2,3,4].concat(ari,ari_1)));

var obj = {
    className : 'open menu'
};
var add_cls = 'menu1';
var className ;



col(addClasses(obj, className, add_cls, true));

function addClasses(obj_any, className, add_cls, dev){
    dev = dev || false;

    var obj_res = copyObjToAssign(obj_any);

    var arr_init = obj_any.className ? obj_any.className.split(' ') : [] ;
    for(var key in arr_init){
        if(arr_init[key] == add_cls) return;
    }
        col(arr_init);
        arr_init.push(add_cls);
        col(arr_res);
            obj_res.className = arr_init.join(' ');

    if(dev)
    {return result = {
        'dev' : dev,
        'result' : 'addClasses(obj_any, className, add_cls, dev)',
        'obj_any' : obj_any ,
        'arr_init' : arr_init ,
        'add_cls' : add_cls,
        'obj_res' : obj_res
        };
    }
    else
    {
        return obj_res;
    }
}

// function copyInitObjToKey(obj_init, dev){
//     dev = dev || false;
//     var obj_res = {};
//     for (var key in obj_init){
//         obj_res[key] = obj_init[key];
//     }
//     if(dev)
//     {return result = {
//         'dev' : dev ,
//         'result' : 'copyInitObjToKey(obj_init, dev)',
//         'obj_init' : obj_init ,
//         'obj_res' : obj_res
//         };
//     }
//     else
//     {
//         return obj_res;
//     }
// }
ob = {
    ert : 5,
    ertg : 'werv' ,
    set : [1 , '677wer']
};
// var ob_2 = copyInitObjTo(ob, false);
// ob_2 = Object.assign({} ,ob);
// ob_2 = copyObjToAssign(ob, false);
// col(ob == ob_2);
// ob = {};
// col(ob);
// col(ob_2);

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