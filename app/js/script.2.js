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
ar = [1, 2 , 3, 1 , 5 , 1];
col(ar);
res = arrayDelItem(ar , 2);
col(res);
col(ar);


function arrCopy(arr_init , arr_res){
    for (var i = 0 ; i < arr_init.length ; i++){
        arr_res[i] = arr_init[i];
    }
    return result = {
        'arr_init' : arr_init,
        'arr_res' : arr_res
    };
}


function arrayDelItem(arr_any , item){
    var arr_init = [];
    arrCopy(arr_any , arr_init);
    index = -1;
    count = 0;
    while((index = arr_any.indexOf(item , index+1)) !== -1){
        arr_any.splice(index,1);
        index--;
        count++;
    }
    return result = {
        'result' : 'arrayDelItem(arr_any , item)',
        'arr_init' : arr_init,
        'item' : item,
        'arr_res' : arr_any,
        'count' : count
    };
}

ar_1 = [2,4,7,9,1,5,10,-3,0];
col(ar_1);
arr_result = filterRange(ar_1 , 2 , 9);
col(arr_result);

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
        'arr_init' : arr,
        'min' : a,
        'max' : b,
        'ar_res' : ar_res
    };
}

