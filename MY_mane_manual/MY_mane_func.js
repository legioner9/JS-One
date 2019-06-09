/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof {} // "object"

// typeof null // "object"  (1)

// typeof function(){} // "function"  (2)


// Символ	Описание
// \b	Backspace
// \f	Form feed
// \n	New line
// \r	Carriage return
// \t	Tab
// \uNNNN	Символ в кодировке Юникод с шестнадцатеричным кодом `NNNN`. Например, `\u00A9` -- юникодное представление символа копирайт ©


// Оператор	Использование	Описание
// Побитовое И (AND)	a & b	Ставит 1 на бит результата, для которого соответствующие биты операндов равны 1.
// Побитовое ИЛИ (OR)	a | b	Ставит 1 на бит результата, для которого хотя бы один из соответствующих битов операндов равен 1.
// Побитовое исключающее ИЛИ (XOR)	a ^ b	Ставит 1 на бит результата, для которого только один из соответствующих битов операндов равен 1 (но не оба).
// Побитовое НЕ (NOT)	~a	Заменяет каждый бит операнда на противоположный.
// Левый сдвиг	a << b	Сдвигает двоичное представление a на b битов влево, добавляя справа нули.
// Правый сдвиг, переносящий знак	a >> b	Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты.
// Правый сдвиг с заполнением нулями	a >>> b	Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты и добавляя нули слева.

// Методы массивов:

// splice() !
// join из массива в строку
// split из строки в массив
// alert( new Array(4).join("ля") ); // ляляля

// push/pop, shift/unshift, splice – для добавления и удаления элементов.
// join/split – для преобразования строки в массив и обратно.
// slice – копирует участок массива.
// sort – для сортировки массива. Если не передать функцию сравнения – сортирует элементы как строки.
// reverse – меняет порядок элементов на обратный.
// concat – объединяет массивы.
// indexOf/lastIndexOf – возвращают позицию элемента в массиве (не поддерживается в IE8-).
// Дополнительно:

// Object.keys(obj) возвращает массив свойств объекта.

// str.toUpperCase();

// str.toLowerCase();

// arr.forEach(callback(item , i , arr_innii)); All item

// arr.filter(callback(item , i , arr_init)); If true

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//   return name.length;
// });

// получили массив с длинами
// alert( nameLengths ); // 4,3,10

// Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr.
// Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.

// getFullYear()
// Получить год (из 4 цифр)
// getMonth()
// Получить месяц, от 0 до 11.
// getDate()
// Получить число месяца, от 1 до 31.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Получить соответствующие компоненты.
// Дополнительно можно получить день недели:

// getDay()
// Получить номер дня в неделе. Неделя в JavaScript начинается с воскресенья, так что результат будет числом от 0(воскресенье) до 6(суббота).
// getTime()
// Возвращает число миллисекунд, прошедших с 1 января 1970 года GMT+0, то есть того же вида, который используется в конструкторе new Date(milliseconds).

// getTimezoneOffset()
// Возвращает разницу между местным и UTC-временем, в минутах.
// Следующие методы позволяют устанавливать компоненты даты и времени:

// setFullYear(year [, month, date])
// setMonth(month [, date])
// setDate(date)
// setHours(hour [, min, sec, ms])
// setMinutes(min [, sec, ms])
// setSeconds(sec [, ms])
// setMilliseconds(ms)
// setTime(milliseconds) (устанавливает всю дату по миллисекундам с 01.01.1970 UTC)


/**
 * Return integer as float without part after dot
 * @param  {} float
 */
function intFromFloat(float) {
    integer = (float ^ 0);
}

/**
 * Возвращает простые чила до n в консоль
 * @param  {} n
 */
function showPrime(n) {
    Next: for (var i = 2; i <= n; i++) {
        /*if [i] is prime => col(i) continue Next;*/
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue Next;
        }
        col(i);
    }
}

/**
 * Возвращает сумму чисел до n
 * @param  {} n
 */
function sumTo(n) {
    su = 0;
    for (var i = 1; i < n + 1; i++) {
        su += i;
    }
    return su;
}

/**
 * Возвращает последовательно числа
 * Фиббоначи от 0 до n-1
 * @param  {} n
 */
function fib(n) {
    f1 = 0;
    f2 = 1;
    if (n == 0) return 1;
    else {

        for (var i = 0; i < n; i++) {
            s2 = f1 + f2;
            s1 = f2;

            f1 = s1;
            f2 = s2;
        }
        return f2;
    }
}

/**
 * Возвращает x в степени целого положительного  n
 * @param  {} x
 * @param  {} n
 */
function pow(x, n) {
    var pownn = x;
    for (var i = 1; i < n; i++) {
        pownn *= x;
    }
    return pownn;
}

/**
 * Выдает подстроку от a и до b не включая
 * @param  {} a
 * @param  {} b
 */
str.substring(a, b);

/**
 * Выдает подстроку от и до конца
 * @param  {} a
 */
str.substring(a);

/**
 * Возвращает из str b символов начиная с a позиции
 * @param  {} a
 * @param  {} b
 */
str.substr(a, b);

/**
 * Возвращает позицию вхождения подстроки serch
 * при поиске с позиции pos
 * @param  {} serch
 * @param  {} pos
 */
str.indexOf(serch, pos);

/**
 * Возвращает позицию вхождения подстроки serch
 * при поиске с позиции pos к началу
 * @param  {} serch
 * @param  {} pos
 */
str.lastIndexOf(serch, pos);

/**
 * Return a singl-chara
 * @param  {} a
 */
str.charAt(a);

/**
 * Return length of string
 */
str.length;

/**
 * @param  {} str
 * @param  {} serch
 */

function allPos(str, serch) {
    var pos = -1;
    while ((pos = str.indexOf(serch, pos + 1)) !== -1) {
        col(pos);
    }
}

/**
 * @param  {}
 */
str.toUpperCase();

/**
 * @param  {} str
 */
function f_toLowerCase(str) {
    return str.toLowerCase();
}

/**
 * Substing from position a first to position b from end
 * @param  {} a
 * @param  {} b
 */
function f_slise(str, a, b) {
    str.slise(a, b);
}


/**
 * Displase the data type
 * @param  {} a
 */
function type_of(a) {
    typeof a;
}

/**
 * Converts from string to number
 * @param  {} str
 */
function num_on(str) {
    +str;
}

/**
 * Returns reminder of division a/b
 * @param  {} a
 * @param  {} b
 */
function ren_of_division(a, b) {
    a % b;
}

/**
 * Return records of number (str line) on the basis n
 * @param  {} str
 * @param  {} n
 */
parseInt(str, n);

/**
 * Return number n to records of number on the basis bas
 * @param  {} bas
 */
n.toString(bas);

/**
 * Substring serch presence check in string
 *  str from position
 * @param  {} str
 * @param  {} search
 * @param  {} pos
 */
function isBingoStr(str, search, pos) {
    ~str.indexOf(search, pos);
}


/**
 * Return char from charCode
 * @param  {} cod
 */
function f_fromCharCode(cod) {
    String.fromCharCode(cod);
}

/**
 * Return charCode from char index of
 * string str
 * @param  {} str
 * @param  {} index
 */
function f_charCodeAt(str, index) {
    str.charCodeAt(index);
}

/**
 * Mask of four position
 */
function maskFour() {
    var bol, a = 2, b = 4, c = 8, d = 16;
    bol = a | b | c | d;
    col(bol & a);
}

/**
 * Return all charCode from min to max index
 * @param  {} min
 * @param  {} max
 */
function allCharCode(min, max) {
    var str_ = '';
    for (var i = min; i < max; i++) {
        str_ += i + ' ' + String.fromCharCode(i) + '\n';
    }
}

/**
 * bitEncripting by the ^
 * @param  {} a
 * @param  {} any
 */
function bitEncripting(a, any) {
    var b = a ^ any;
    b ^ any === a;
}

/**
 * Return volume of property object
 * @param  {} obj
 */
function volOfProp(obj) {
    count = 0;
    for (var key in obj) {
        count++;
    }
    return count;
}

/**
 * Return true if n is string contane float or !infinit+_- and !NaN
 * @param  {} n
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


/**
 * Return last array item and removes it
 * @param  {} arr_any
 */
function arrayPop(arr_any) {
    arr_any.pop();
}

/**
 * arr_any.push(item_any) ==== arr_any(arr_any.length) = item_any
 * @param  {} arr_any
 * @param  {} item_any
 */
function arrayPush(arr_any, item_any) {
    arr_any.push(item_any);
}

/**
 * Return first array item and removes it
 * @param  {} arr_any
 */
function arrayShift(arr_any) {
    arr_any.shift();
}

/**
 * arr_any.unshift(item_any) ==== arr_any[0] = item_any
 * @param  {} arr_any
 * @param  {} item_any
 */
function arrayUnshift(arr_any, item_any) {
    arr_any.unshift(item_any);
}

/**
 * Returns random integer from min to max
 * @param  {} min
 * @param  {} max
 */
function randMinMax(min, max) {
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
    return rand;
}

/**
 * Returns elements starting with index in qantity
 * range and removes them
 * @param  {} arr_any
 * @param  {} index
 * @param  {} range
 */
function arraySplice(arr_any, index, range) {
    arr_any.splice(index, range);
}


/**
 * Copies arr_init in arr_res and return them
 * @param  {} arr_init
 */
function arrCopy(arr_init, dev) {
    dev = dev || false;
    var arr_res = [];
    for (var i = 0; i < arr_init.length; i++) {
        arr_res[i] = arr_init[i];
    }
    if (dev) {
        return result = {
            'arr_init': arr_init,
            'arr_res': arr_res
        };
    }
    return arr_res;
}


/**
 * Remove all (item)'s in arr_any an
 * @param  {} arr_any
 * @param  {} item
 */
function arrayDelItem(arr_any, item, dev) {
    dev = dev || false;
    var arr_init = [];
    arrCopy(arr_any, arr_init);
    index = -1;
    count = 0;
    while ((index = arr_any.indexOf(item, index + 1)) !== -1) {
        arr_any.splice(index, 1);
        index--;
        count++;
    }
    if (dev) {
        return result = {
            'dev': dev,
            'result': 'arrayDelItem(arr_any , item)',
            'arr_init': arr_init,
            'item': item,
            'arr_res': arr_any,
            'count': count
        };
    } else {
        return arr_any;
    }

}

/**
 * Transfom str_any to arrary arr_res with separator (', ')
 * @param  {} str_any
 * @param  {} dev
 */
function strSplit(str_any, dev) {
    dev = dev || false;

    // str_any = 'wevf, erwe, qwewrcf';
    arr_res = str_any.split(', ');

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'strSplit(str_any, dev)',
            'str_any': str_any,
            'arr_res': arr_res

        };
    } else {
        return arr_res;
    }
}

/**
 * Insert arr_ins into arr_init from index_ins
 * @param  {} arr_init
 * @param  {} index_ins
 * @param  {} arr_ins
 * @param  {} dev
 */
function arrInsArr(arr_init, index_ins, arr_ins, dev) {
    arr_res = arrCopy(arr_init, false);
    dev = dev || false;
    for (var i = 0; i < arr_ins.length; i++) {
        arr_res.splice(index_ins + i, 0, arr_ins[i]);
    }

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'arrInsArr(arr_init ,arr_ins, dev)',
            'arr_init': arr_init,
            'arr_ins': arr_ins,
            'index_ins': index_ins,
            'arr_res': arr_res
        };
    } else {
        return arr_res;
    }
}

/**
 * Isolates in arr_init (arr_result) from index_init
 * to index_last NOT INCLUDING it !
 * @param  {} arr_init
 * @param  {} index_init
 * @param  {} index_last
 * @param  {} dev
 */
function arrSlice(arr_init, index_init, index_last, dev) {
    dev = dev || false;
    var arr_res = arr_init.slice(index_init, index_last);

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'arrSlice(arr_init, index_init , index_last , dev)',
            'arr_init': arr_init,
            'arr_res': arr_res,
            'index_init': index_init,
            'index_last': index_last
        };
    } else {
        return arr_res;
    }
}

/**
 * Sorting function even num element on
 * the rigth
 * @param  {} a
 * @param  {} b
 */
function f_sortN2(a, b) {
    // col( a + " <> " + b );
    if ((a % 2 == 0) && (b % 2 == 0)) return 0;
    if ((a % 2 == 0) && !(b % 2 == 0)) return 1;
    if (!(a % 2 == 0) && (b % 2 == 0)) return -1;
    if (!(a % 2 == 0) && !(b % 2 == 0)) return 0;
    // col(a%2 && b%2) ;
    // col(a%2 && !b%2);
    // col(!a%2 && b%2) ;
    // col(!a%2 && !b%2);
}

/**
 * CLASS
 * Array arr_init sorting by function
 * func_sorting (a,b)
 * @param  {} arr_init
 * @param  {} func_sorting
 * @param  {} dev
 */
function arrSortByFunc(arr_init, func_sorting, dev) {
    dev = dev || false;
    arr_res = arrCopy(arr_init);
    var arr_res = arr_res.sort(func_sorting);
    if (dev) {
        return result = {
            'dev': dev,
            'result': 'arrSortByFunc(param, dev)',
            'arr_init': arr_init,
            'func_sorting': 'func_sorting',
            'arr_res': arr_res
        };
    } else {
        return arr_res;
    }
}

/**
 * CLASS
 * @param  {} a
 * @param  {} b
 */
function f_sort_(a, b) {
    // col(a + '<>' + b);

    return 0 , 1 , -1;
}

/**
 * FICH
 * Sort by rise
 * @param  {} a
 * @param  {} b
 */
function f_sortAB(a, b) {
    // col(a + '<>' + b);
    return a - b;
    // return 0 , 1 ,-1 ;
}

/**
 * FICH
 * Splice from end
 * @param  {} arr_any
 * @param  {} index_from_end
 */
function arrSpliceFromEnd(arr_any, index_from_end) {
    return arr_any.splice(-1 * index_from_end, any);
}

/**
 * FICH
 * Full copy by slice()
 * @param  {} arr_init
 * @param  {} arr_copy
 */
function arrSliseCopy(arr_init, arr_copy) {
    arr_copy = arr_init.slice();
}

/**
 *Serch promt by Eranjsfen
 * @param  {} n
 * @param  {} dev
 */
function serchPromtByEratosfen(n, dev) {

    dev = dev || false;
    arr_res = [];

    for (var i = 2; i <= n; i++) {
        arr_res[i] = true;
    }

    var p = 2;
    for (i = 2; i <= n; i++) {
        if ((i * 2) <= n) arr_res[2 * i] = false;
    }

    do {
        for (i = p + 1; i <= n; i++) {
            if (arr_res[i]) {
                p = i;
                break;
            }
        }

        for (i = p; i <= n; i++) {
            if ((i * p) <= n) arr_res[p * i] = false;
            else break;
        }

    } while (p * p <= n);
    var arr_res_num = [];
    var k = 0;
    for (i = 2; i <= arr_res.length; i++) {
        if (arr_res[i]) {
            arr_res_num[k] = i;
            k++;
        }
    }

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'serchPromtByEratosfen(n, dev)',
            'arr_res': arr_res,
            'arr_res_num': arr_res_num,
            'n': n
        };
    } else {
        return arr_res_num;
    }
}

/**
 * Concat array
 * @param  {} arr_init
 * @param  {} arr_to_add
 */
function arrConcat(arr_init, arr_to_add) {
    arr_res = arr_init.concat(arr_to_add);
}

/**
 * Create array of all keys from obj_any
 * @param  {} obj_any
 */
function objectMethKeys(obj_any) {
    Object.keys(obj_any);
}

/**
 * Copy obj_init by for key
 * @param  {} obj_init
 * @param  {} dev
 */
function copyObjToKey(obj_init, dev) {
    dev = dev || false;
    var obj_res = {};
    for (var key in obj_init) {
        obj_res[key] = obj_init[key];
    }
    if (dev) {
        return result = {
            'dev': dev,
            'result': 'copyObjToKey(obj_init, dev)',
            'obj_init': obj_init,
            'obj_res': obj_res
        };
    } else {
        return obj_res;
    }
}

/**
 * Copy obj_init by assign
 * @param  {} obj_init
 * @param  {} dev
 */
function copyObjToAssign(obj_init, dev) {
    dev = dev || false;
    var obj_res = Object.assign({}, obj_init);
    if (dev) {
        return result = {
            'dev': dev,
            'result': 'copyObjToAssign(obj_init, dev)',
            'obj_init': obj_init,
            'obj_res': obj_res
        };
    } else {
        return obj_res;
    }
}

/**
 * Trane split <=> join in the task
 * add word in property when this string
 * add_cls = 'menu_2'
 * var obj_any = {
 *  className : 'open menu'
 * };
 * @param  {} obj_any
 * @param  {} className
 * @param  {} add_cls
 * @param  {} dev
 */
function addClasses(obj_any, className, add_cls, dev) {
    dev = dev || false;

    var obj_res = copyObjToAssign(obj_any);

    var arr_init = obj_any.className ? obj_any.className.split(' ') : [];
    for (var key in arr_init) {
        if (arr_init[key] == add_cls) return;
    }
    col(arr_init);
    arr_init.push(add_cls);
    col(arr_res);
    obj_res.className = arr_init.join(' ');

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'addClasses(obj_any, className, add_cls, dev)',
            'obj_any': obj_any,
            'arr_init': arr_init,
            'add_cls': add_cls,
            'obj_res': obj_res
        };
    } else {
        return obj_res;
    }
}

/**
 * Transformation 'qwed-ceq-vgrw'
 * to qwedCeqVgrw
 * @param  {} str_init
 * @param  {} dev
 */
function strCamelize(str_init, dev) {
    dev = dev || false;

    var arr = str_init.split('');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '-') {
            var item = arr[i + 1];
            arr.splice(i, 2, item.toUpperCase());
        }
        str_res = arr.join('');
    }

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'strCamelize(arr_init, dev)',
            'str_init': str_init,
            'str_res': str_res
        };
    } else {
        return str_res;
    }
}

/**
 * Transformation 'qwed-ceq-vgrw'
 * to qwedCeqVgrw
 * @param  {} str_init
 * @param  {} dev
 */
function strCamelize2(str_init, dev) {
    dev = dev || false;

    var arr = str_init.split('-');

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    str_res = arr.join('');


    if (dev) {
        return result = {
            'dev': dev,
            'result': 'strCamelize2(arr_init, dev)',
            'str_init': str_init,
            'str_res': str_res
        };
    } else {
        return str_res;
    }
}

/**
 * Trane split <=> join in the task
 * remove_cls word in property when this string
 * remove_cls = 'menu'
 * var obj_any = {
 *  className : 'open menu'
 * };
 * @param  {} obj_any
 * @param  {} className
 * @param  {} remove_cls
 * @param  {} dev
 */
function removeClasses(obj_any, className, remove_cls, dev) {
    dev = dev || false;

    var obj_res = copyObjToAssign(obj_any);

    var arr_init = obj_any.className ? obj_any.className.split(' ') : [];
    for (var i = 0; i < arr_init.length; i++) {
        if (arr_init[i] == remove_cls) {
            arr_init.splice(i, 1);
            i--;
        }
    }

    obj_res.className = arr_init.join(' ');

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'removeClasses(obj_any, className, add_cls, dev)',
            'obj_any': obj_any,
            'arr_init': arr_init,
            'remove_cls': remove_cls,
            'obj_res': obj_res
        };
    } else {
        return obj_res;
    }
}

/**
 * FICH
 * Recursiv function for print
 * all property of linear list
 *
 *obj_list = {
 *  value : 1,
 *  next : {
 *      value : 2,
 *      next : {
 *          value : 3,
 *          next : null
 *          }
 *      }
 *  };
 * @param  {} list
 */
function printList2(list) {
    col(list.value);
    if (list.next) {
        printList2(list.next);
    }
}

/**
 * Altrnativ for recusiv linear list
 * obj_list = {
 *  value : 1,
 *  next : {
 *      value : 2,
 *      next : {
 *          value : 3,
 *          next : null
 *          }
 *      }
 *  };
 * @param  {} list
 */
function printList(list) {
    var tmp = list;
    while (tmp) {
        col(tmp.value);
        tmp = tmp.next;

    }
}

/**
 * @param  {} arr_init
 * @param  {} dev
 */
function arrCleanAnagramm(arr_init, dev) {
    dev = dev || false;

    var obj_res = {};

    for (var i = 0; i < arr.length; i++) {
        var key = arr[i].toLowerCase().split('').sort().join('');
        obj_res[key] = arr[i];
    }
    var j = 0;
    var arr_res = [];
    for (var key in obj_res) {
        arr_res[j] = obj_res[key];
        j++;
    }

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'aclean(arr_init, dev)',
            'arr_init': arr_init,
            'arr_res': arr_res
        };
    } else {
        return arr_res;
    }
}

/**
 * Remove duplicate items from arr_init
 * @param  {} arr_init
 * @param  {} dev
 */
function arrUniqueItem(arr_init, dev) {
    dev = dev || false;

    var obj_res = {};
    for (var i = 0; i < arr_init.length; i++) {
        obj_res[arr_init[i]] = arr_init[i];
    }
    arr_res = [];
    for (key in obj_res) arr_res.push(obj_res[key]);

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'unique(strings, dev)',
            'arr_init': strings,
            'arr_res': arr_res
        };
    } else {
        return arr_res;
    }
}

/**
 * Function to sort all
 * @param  {} function(item
 * @param  {} i
 * @param  {} arr_init
 */
arr.forEach(function (item, i, arr_init) {
    dev = dev || false;

    arr_res = arr_init;

    results = {
        'dev': dev,
        'result': 'function(item , i , arr_init)',
        'arr_init': arr_init,
        'arr_res': arr_res
    };

});

/**
 * Functiot to last result
 * @param  {} function(prev_return_fun
 * @param  {} item
 * @param  {} i
 * @param  {} arr_init
 */
last_return_fun = arr_s.reduce((function (prev_return_fun, item, i, arr_init) {

    // define (arr_res = [];) before (ar.filter)
    // alternate ad (arr_res = arr_init;)
    // redifine (arr_res = [];) before (ar.filter)

    results = {

        'result': 'function(item , i , arr_init)',
        'arr_init': arr_init,
        'arr_res': arr_res
    };

    return;

}), init_value);

/**
 * @param  {} obj_init
 * @param  {} dev
 */
function objCopyPropFromSrc(obj_init, dev) {
    dev = arguments[(arguments.length - 1)] || false;
    obj_init = arguments[0];
    obj_res = {};

    for (var i = 0; i < arguments.length - 1; i++) {
        // var obj_curr = arguments[i];
        var obj_curr = arguments.callee.arguments[i];
        col(obj_res);
        for (var key in obj_curr) {
            obj_res[key] = obj_curr[key];
        }
    }

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'funcName(arr_init, dev)',
            'obj_init': obj_init,
            'obj_res': obj_res
        };
    } else {
        return obj_res;
    }
}

/**
 * @param  {} obj_arg
 * @param  {} dev
 */
function objFuncObjArg(obj_arg, dev) {
    dev = dev || false;

    // col(obj_arg.prop_1);
    // col(obj_arg.prop_2);
    // col(obj_arg.prop_3);

    if (dev) {
        return result = {
            'dev': dev,
            'result': 'objFuncObjArg(obj_arg, dev)',
            'obj_arg': obj_arg,
            // 'arr_res' : arr_res
        };
    } else {
        return;
    }
}

/**
 * @param  {} arr_init
 */
function sumArg(arr_init) {
    // dev = dev || true;
    res = 0;
    let res;
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return result = {

        'result': 'sumArg(arr_init)',
        'arr_init': res,
        // 'arr_res' : arr_res
    };

}


/**
 * FICH
 * date.toLocaleString("ru", options_toLocaleString)
 * @type {{month: string, hour: string, era: string, year: string, timezone: string, weekday: string, day: string, minute: string, second: string}}
 */
var options_toLocaleString = {
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


/**
 * FICH
 * console.time
 */
console.time('q');
console.timeEnd('q');


/**
 * FICH
 * @returns {function(): function(): number}
 * col(fx()()());
 */
var x = 1;

function fx() {
    var y = 2;
    return function fy() {
        var z = 3;
        return function fz() {
            return x + y + z;
        }
    }
}


/**
 * FICH
 * @returns {function(): number}
 * Counter with methods
 * var mc_1 = makeCountter();
 mc_1.Reset();
 mc_1.Set(4);
 col(mc_1());
 col(mc_1.Real());
 */
function makeCountter() {
    var cur_count = 1;

    function count() {
        return cur_count++;
    }

    count.Set = function (value) {
        cur_count = value
    }
    count.Reset = function Resets() {
        cur_count = 1;
    }
    count.Real = function Reals() {
        return cur_count;
    }
    return count;
}

/**
 * FICH
 *#closures
 * filterFuncS
 * @param arr_init
 * @param func
 * @returns {Array}
 */
function filterFuncS(arr_init, func) {
    var arr_res = [];
    for (var i = 0; i < arr_init.length; i++) {
        var item = arr_init[i];
        if (func(item)) {
            arr_res.push(item);
        }
    }
    return arr_res;
}

/**
 * FICH
 * func for filterFuncS - #closures
 * @param a
 * @param b
 * @returns {function(*): boolean}
 */
function inBetweenS(a, b) {
    var s = 8;
    return function I(init) {
        return a < init && init < b;
    };
}

/**
 * #clousure #solution1
 * @returns {Array}
 * var army_1 = makeArmy_1();
 * var army_1[1]();
 */

function makeArmy_1() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooter = function CallProperty_i() {
            col(CallProperty_i.i); // выводит свой номер
        };
        shooter.i = i;
        shooters.push(shooter);
    }

    return shooters;
}

/**
 * #clousure #solution2
 * @returns {Array}
 * var army_2 = makeArmy_2();
 * var army_2[1]();
 */
function makeArmy_2() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooter =
            function (x) {
                return function Us() { // функция-стрелок
                    col(x); // выводит свой номер
                };
            }

        shooters.push(shooter(i));
    }

    return shooters;
}

/**
 * #clousure #solution3
 * @returns {Array}
 * var army_3 = makeArmy_3();
 * var army_3[1]();
 */
function makeArmy_3() {

    var shooters = [];

    for (var i = 0; i < 4; i++)
        Puhser(i);

    function Puhser(a) {
        var shooter = function () { // функция-стрелок
            col(a); // выводит свой номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

/**
 * #clousure #solution4
 * @returns {Array}
 * var army_4 = makeArmy_4();
 * var army_4[1]();
 */
function makeArmy_4() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooterA = function () { // функция-стрелок
            var j = i;
            return function Sut() {
                col(j);
            }// выводит свой номер
        };
        shooters.push(shooterA());
    }

    return shooters;
}

/**
 * #clousure #solution5
 * @returns {Array}
 * var army_5 = makeArmy_5();
 * var army_5[1]();
 */
function makeArmy_5() {

    var shooters = [];

    for (var i = 0; i < 4; i++) {
        var shooterA = function () { // функция-стрелок
            var j = i;
            return function Sut() {
                col(j);
            }// выводит свой номер
        };
        shooters.push(shooterA());
    }

    return shooters;
}

/**
 * FICH
 * #chaining #this
 * @type {{show: (function(): Ladd), step: number, up: (function(): Ladd), down: (function(): Ladd)}}
 * Ladd.up().up().up().down().show();
 */
var Ladd = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    show: function () {
        col(this.step);
        return this
    }
}


/**
 * FICH
 * #clousure #callchain
 * col(sumS(1)(2)(3));
 * @param a
 * @returns {function(*): function(*)}
 */
function sumS(a) {
    var agr = a;

    function A(b) {
        agr += b;
        return A;
    }

    A.toString = function () {
        return agr;
    }
    return A;
}


/**
 * FICH
 * #this
 * cal_1 = new CalcS();
 cal_1.read();
 cal_1.sum();
 cal_1.mul();
 * @constructor
 */
function CalcS() {
    // this.a;
    // this.b;
    this.read = function () {
        this.a = +prompt('a = ', 0)
        this.b = +prompt('b = ', 0)
    }
    this.sum = function () {
        var s = this.a + this.b;
        col('a+b = ' + s)
    } ,
        this.mul = function () {
            var m = this.a * this.b;
            col('a*b =' + m)
        }
}


/**
 * FICH
 * #this
 * @constructor
 * var cs  = new CalcSub();
 col(cs.calculate('1 + 5'));
 cs.addMethod('*' ,  function (a , b) {
    return a*b;
});
 col(cs.calculate('2 * 5'));
 */
function CalcSub() {
    methods = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        }
    }
    this.calculate = function (expr) {
        var arr_expr = expr.split(/ /);
        a = +arr_expr[0];
        nf = arr_expr[1];
        b = +arr_expr[2];
        if (!methods[nf] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[nf](a, b)
    }
    this.addMethod = function (meth, func) {
        methods[meth] = func;
    }
}

/**
 * FICH
 * Object.defineProperties
 * #this
 * @param fullName
 * @constructor
 */
function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        name: {
            get: function () {
                return this.fullName.split[0];
            },
            set: function (newName) {
                return this.fullName = newName + ' ' + this.surname;
            }
        },
        surname: {
            get: function () {
                return this.fullName.split[1];
            },
            set: function (newSurName) {
                return this.fullName = this.name + ' ' + newSurName;
            }
        }
    })
};

/**
 * defineProperty
 */
Object.defineProperty(obj, 'name', {
        value: 'vasya',
        writable: false,
        configurable: false,
        enumerable: false,
        // get : function () {
        //
        // },
        // set : function () {
        //
        // }
    }
)


/**
 * FICH
 * #this #FabricalMethod
 * @constructor
 * new Art();
 new Art();
 new Art();
 col(Art.showParam());
 */
function Art() {
    Art.count++;
    Art.date = new Date();
}

Art.count = 0;
Art.showParam = function () {
    return {
        count: this.count,
        date: this.date
    }
}

/**
 * FICH
 * #apply
 */
col(Art.showParam.apply({count: 'asv', date: (new Date())}));


/**
 * FICH
 * #call
 */
function geen() {
    // return  col([].slice.call(arguments));
    return col([].join.call(arguments, ':'))
}

geen('d', 'f', 'l');


/**
 * FICH
 * Math.max.apply
 */
col(Math.max.apply(null, [2, 3, 7, 0]));


/**
 * FICH
 * sumArg
 * #slice
 * @returns {*}
 */
function sumArg_1() {
    var arr_arg = [].slice.call(arguments);
    return arr_arg.reduce(function (a, b) {
        return a + b;
    });
}

/**
 * FICH
 * sumArg
 * #copy standart method
 * @returns {*}
 */
function sumArg_2() {
    arguments.reduce = [].reduce
    return arguments.reduce(function (a, b) {
        return a + b;
    });
}

/**
 * FICH
 * sumArg
 * #apply
 * @returns {*}
 */
function sumArg_3() {
    return [].reduce.apply(arguments, function (a, b) {
        return a + b;
    })
}

/**
 * #apply #call #arguments
 * @param func_ini
 * @returns {*}
 */
function applyAll_1(func_ini) {
    return func_ini.apply(null, [].slice.call(arguments, 1));
}

/**
 * FICH
 * #mybind
 * @param func_ini
 * @param context
 * @returns {function(): *}
 */
function mybind(func_ini, context) {
    return function U() {
        return func_ini.apply(context, arguments);
    }
}

/**
 * FICH
 * #bind
 * bindAllProp
 */
for (var prop in user_pr) {
    if (typeof user_pr[prop] == "function") {
        user_pr[prop] = user_pr[prop].bind(user_pr)
    }
}

/**
 * FICH
 * #ask
 * @param admin_qestion
 * @param true_ansver
 * @param yes
 * @param no
 */
function askQuestionYesNo(admin_qestion, true_ansver, yes, no) {
    var user_anver = prompt(admin_qestion, '');
    if (user_anver == true_ansver) yes();
    else no();
}


/**
 * # typeof
 */
( typeof 1 );         // 'number'
( typeof true );      // 'boolean'
( typeof "Текст" );   // 'string'
( typeof undefined ); // 'undefined'
( typeof null );      // 'object' (ошибка в языке)
( typeof alert );    // 'function'


var i = 1;
/**
 * setTimeout
 * #recurse #setTimeout
 * @type {number}
 */
var to = setTimeout(function run() {
    i++;
    col(i+ '\n');
    setTimeout(run , 100*i);
}, 100);
