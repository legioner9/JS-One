/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let arr = [3, {wi: 'wy'}, ['r', 'tt'], true], obj_arr = {};
let rex = {e: 'pp'};

arr.rex = {
    y: 'jj',
}

let a_o = arr[4];
let flat_from_arr = arr.flat() //  Array(5)  [3, {…}, "r", "tt", true]

let array_from_arr = Array.from(arr, item_key => {
    col(item_key);
    return item_key;
});//array_from_arr is Array and without rex = {y: 'jj',}!!!


for (let key in arr) {
    if (arr.hasOwnProperty(key)) obj_arr[key] = arr[key];
}

for (let item of arr) {
    col(typeof item);
}

let arr_f = ["a", "b"];

arr_f.push(function () {
    col(this);
})

let splise_arr_1 = arr.splice(6, 1, 'fff')
let add_obj = {
    0: '0000',
    tiw: 'vdfva',
    [Symbol.isConcatSpreadable]: true,
    length: 2,
}
let slise_arr_1 = arr.concat('w', 'ui', ['ty', 'gwerg'], add_obj);

let arr_f_ = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let arr_f_find = arr_f_.find((item) => item.id == 2).name;
let is_arr = Array.isArray(arr);

let user_ = {
    age: 14,
    younger(age) {
        return age > this.age;
    }
};

let users_ = [
    {age: 12},
    {age: 16},
    {age: 32}
];

let users_filt = users_.filter(item => user_.younger(item.age), user_);


window.__my_Camelize_ = (str) => {

    return str.split('-')
        .map((item, ind) => !ind ? item : item[0].toUpperCase() + item.slice(1))
        .join('');

}

let camel = __my_Camelize_('vw-f-het')
let sumInput = () => {
    let res = [];
    let i = 0
    while (true) {

        let p = prompt('enter "a" ', 1);

        if (!isFinite(p) || p === '' || p === null) {
            let sum = res.reduce((a, b) => a + b);
            // alert(` sum =' ${sum}'`)
            return sum;
        }
        res.push(+p);
    }
}
// sumInput();

let is_1 = 'rex' in arr;
let obj = {rv: 'r'};
let is_2 = 'rv' in obj;


let getMaxSubSum_ = (arr) => {
    let len = arr.length;
    if (len === 0) return 0;
    let sub_arr = [], all_sub_arr = [], sum_sub_arr = 0;

    for (let begin = 0; begin < len; begin++) {
        for (let end = len; end > begin; end--) {
            sub_arr = arr.slice(begin, end);
            sum_sub_arr = sub_arr.reduce((a, b) => a + b);
            all_sub_arr.push({
                    sum: sum_sub_arr,
                    arr: sub_arr,
                }
            )
        }
    }
    all_sub_arr.sort((a, b) => {
        return b.sum - a.sum
    })
    return all_sub_arr;
}

let getMaxSubSum = (arr) => {
    let max = 0, sum = 0;
    for (let item of arr) {
        sum += item;
        if (sum < 0) sum = 0;
        max = Math.max(sum, max);
    }
    return max;
}

let arr_res = getMaxSubSum([-1, -2, -3]);

window.filterRange = (arr, a, b) => {
    if (a == undefined || b == undefined) return _arr;
    let _a = Math.min(a, b);
    let _b = Math.max(a, b);
    return arr.filter(item => item >= _a && item <= _b);
}


let arr_ini = [1, 4];
debugger;
filterRangeInPlace(arr_ini, 1, 2);