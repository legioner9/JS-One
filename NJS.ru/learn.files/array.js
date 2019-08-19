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

/**
 *
 * @param arr
 * @returns {Array}
 * @private
 */
let __my_reverseArrInPlace = (arr) => {
    let copy_arr = arr.slice(0), len = arr.length;
    if (!len) {
        return [];
    }
    for (let item of copy_arr) {
        arr.unshift(item);
        arr.pop();
    }
}


let arr_ini = [1, 4];
// __my_filterRangeFromAToBInPlace(arr_ini, 1, 2);
__my_reverseArrInPlace(arr_ini);

let reverse_utf_$_CFR = (arr) => {
    return arr.slice().sort();
}

let reverse_utf_$_CIP = (arr) => {
    arr.sort();
}
let arry = ["HTML", "JavaScript", "CSS"];
let arry_join = arry.join(',');
let arry_join_split = arry_join.split();
let arry_sort = reverse_utf_$_CFR(arry);
let aaa_1 = "3 + 7".split('');
reverse_utf_$_CIP(arry);

let Calculator_ = function () {

    this.pars_str = function () {
        let arr = this.str.split(' ');
        this.a = +arr[0];
        this.b = +arr[2];
        this.sign = arr[1];
        return col(`a = ${this.a} ; b = ${this.b} ; sign = ${this.sign}`);
    }

    this.get_res = function () {
        let keys = this.map_of_func.keys
        for (let key in this.map_of_func) {
            if (key == this.sign) return this.res = this.map_of_func[key](this.a, this.b);
        }
    }

    this.calculate = function (str) {
        this.str = str;
        this.pars_str();
        this.get_res();
        return this.res;
    }

    this.map_of_func = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.addMethod = function (name, callback) {
        this.map_of_func[name] = callback;
        col(Object.keys(this.map_of_func));
    }
}

let Calculator = function () {
    let a, b, sign, map_of_func, str, res, arr, pars_str, get_res;
    pars_str = function () {
        arr = str.split(' ');
        a = +arr[0];
        b = +arr[2];
        sign = arr[1];
        if (isNaN(a) || isNaN(b)) return NaN;
        return col(`a = ${a} ; b = ${b} ; sign = ${sign}`);
    }

    get_res = function () {
        if (!map_of_func[sign]) return NaN;
        res = map_of_func[sign](a, b);
    }


    this.calculate = function (str_) {
        str = str_
        pars_str();
        get_res();
        return res;
    }

    map_of_func = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.addMethod = function (name, callback) {
        map_of_func[name] = callback;
    }
}

// let calc = new Calculator();
// let r1p6 = calc.calculate('12 + 34');
// let r1m6 = calc.calculate('1 - 6');

let powerCalc = new Calculator;
// col(a);
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let r2m6 = powerCalc.calculate('2 * 6');
let r2c6 = powerCalc.calculate('2 / 6');
let r2p6 = powerCalc.calculate('2 ** 6');
powerCalc.calculate('2 *** 6');
powerCalc.calculate('2 ***');

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let users = [vasya, petya, masha];

let names_ = (() => {
    let arr = [];
    for (let key in  users) {
        if (users.hasOwnProperty(key)) arr[key] = users[key].name;
    }
    return arr;
})();

let names = users.map(item => item.name);

col(names); // Вася, Петя, Маша

vasya = {name: "Вася", surname: "Пупкин", id: 1};
petya = {name: "Петя", surname: "Иванов", id: 2};
masha = {name: "Маша", surname: "Петрова", id: 3};

users = [vasya, petya, masha];
let usersMapped = users.map(item => ({
    fullName: item.name + ' ' + item.surname,
    id: item.id,
}));

vasya = {name: "Вася", age: 25};
petya = {name: "Петя", age: 30};
masha = {name: "Маша", age: 29};

let arr_s = [vasya, petya, masha];
let sortByAde_$_CIP = (arr) => {
    arr.sort((a, b) => {
        return a.age - b.age;
    });
}
sortByAde_$_CIP(arr_s);

let getAverageAge = (arr) => arr.reduce((a, b, ind, arr) => a + b.age, 0) / arr.length


let ev = getAverageAge(arr_s);

let shuffle_2 = (arr) => {
    return arr.sort((a, b) => Math.random() - .5)
    // return Math.random() - .5;
}
let shuffle_1 = (arr) => {
    let _arr = arr;
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (arr.length - 1 + 1));
        let db = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = db;
        // [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return _arr;
}

function shuffle_3(array) {
    let _arr = array;
    for (let i = _arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

        // поменять элементы местами
        // мы используем для этого синтаксис "деструктурирующее присваивание"
        // подробнее о нём - в следующих главах
        // то же самое можно записать как:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [_arr[i], _arr[j]] = [_arr[j], _arr[i]];
        return _arr;
    }
}

let a_0 = shuffle_3([1, 2, 3]);

let iter_arr = function (arr_ini, value_range_of_test, standing_variats = false) {

    let sum_obj = {};
    let total_count = value_range_of_test * __my_factorial(arr_ini.length);

    let iter_arr_init = () => {
        for (let i = 0; i < total_count; i++) {
            let sf = shuffle_2(arr_ini);
            // let item = sum_obj[sf];
            if (sum_obj[sf] == undefined) sum_obj[sf] = 1;
            else sum_obj[sf]++;
        }

        let arr_value = sum_obj.__my_ArrOwnValueOfObject();


        let arr_prop = sum_obj.__my_ArrOwnPropsOfObject();
        let _arr_prop = arr_prop
        let arr_prop_arr = [];
        let obj_prop_arr = {};
        arr_prop.forEach(item => {
            arr_prop_arr.push(item.split(','));
            return item;
        })
        arr_prop.forEach(item => {
            obj_prop_arr[item.split(',')] = 0;
            return item;
        })


        let res = {
            'resalts': arr_value,
            'allVariants': obj_prop_arr,
        };
        return res;
    }

    let iter_arr_mane = () => {
        // let _standing_variats = standing_variats.__my_OwnPropObject().res__my_OwnPropObject;
        let _standing_variats = Object.assign({}, standing_variats)
        for (let i = 0; i < total_count; i++) {
            let sf = shuffle_2(arr_ini);
            _standing_variats[sf]++
        }
        return _standing_variats;
    }


    if (standing_variats) {
        return iter_arr_mane();
    } else {
        return iter_arr_init();
    }

}

let arr_init = [1, 2, 3];
let depth_scan = 10;
let stand_variats = iter_arr(arr_init, depth_scan).allVariants
// let opo = stand_variats.__my_OwnPropObject().res__my_OwnPropObject;
let step_variats = iter_arr(arr_init, depth_scan, stand_variats);

step_variats = iter_arr(arr_init, depth_scan, stand_variats);
// let standing_variats = iter_arr(arr_init, depth_scan).allVariants


for (let i = 0; i < 10; i++) {

    let obj_rand = iter_arr(arr_init, depth_scan, stand_variats);
    let everage = 0;

    for (let key in obj_rand) {
        let pr = obj_rand.hasOwnProperty(key);
        if (obj_rand.hasOwnProperty(key)) {
            let d = obj_rand[key] - depth_scan;
            d > 0 ? everage++ : everage--;
        }
    }
    col(everage);
}

let strings_ini = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

let unique = arr_str => arr_str.reduce((a, b, ind, arr) => {
    if (a.indexOf(b) === -1) {
        a.push(b);
        return a;
    } else return a;
}, [])


let unq = unique(strings_ini);

let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

let allBooks = arr_ini => arr_ini.reduce((a, b, ind, arr) => {
    // let as = a.join(',');
    // return as.concat(',', b.books.join(',')).split(',');
    return [...a, ...b.books];
}, ['Alphabet'])

let fr = allBooks(friends);

window.__my_pipeOfSetFunctions = (...function_set) => {
    return (input) => function_set.reduce((res, func, ind, arr) => func(res)
        , input)
}
const f1 = x => 2 * x;
const f2 = x => x ** 3;
const f3 = x => x - 100;
debugger;
let set_functions = [f1, f3, f2, f1];
let h_1 = __my_pipeOfSetFunctions(...set_functions)(2);