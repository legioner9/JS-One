/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

/* TODO: convert to String(value) #typeof #String*/
let value = true;
alert(typeof value); // boolean
value = String(value); // теперь value это строка "true"
alert(typeof value); // string

/* TODO: convert to Number(str) #convert #Number #String */
let str = "123";
alert(typeof str); // string
let num = Number(str); // становится числом 123
alert(typeof num); // number
alert(Number("   123   ")); // 123
alert(Number("123z"));      // NaN (ошибка чтения числа в "z")
alert(Number(true));        // 1
alert(Number(false));       // 0
alert(1 + '2'); // '12' (строка справа)
alert('1' + 2); // '12' (строка слева)

/* TODO:  convert to Boolean("Привет!")  #convert #Number #String #Boolean*/
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("Привет!")); // true
alert(Boolean("")); // false
alert(Boolean("0")); // true
alert(Boolean(" ")); // пробел это тоже true (любая непустая строка это true)

/* TODO: convert to #convert #Number #String*/
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true - false = -1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
" -9  " + 5 = " -9  5" // (3)
" -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
alert(2 + 2 + '1'); // будет "41", а не "221"


/* TODO:  Unar (+) and analog Number() #Singl_Operator #(+) */
let apples = "2";
let oranges = "3";
alert(apples + oranges); // "23", так как бинарный плюс складывает строки
alert(+apples + +oranges); // 5
alert(Number(apples) + Number(oranges)); // 5

/* TODO: #Singl_Operator #(=) */
let c = 3 - (a = b + 1);

/* TODO: #Singl_Operator #(%) */
alert(5 % 2); // 1, остаток от деления 5 на 2
alert(8 % 3); // 2, остаток от деления 8 на 3
alert(6 % 3); // 0, остаток от деления 6 на 3

/* TODO:  #Singl_Operator #(**) */
alert(2 ** 2); // 4  (2 * 2)
alert(2 ** 3); // 8  (2 * 2 * 2)
alert(2 ** 4); // 16 (2 * 2 * 2 * 2)
alert(4 ** (1 / 2)); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
alert(8 ** (1 / 3)); // 2 (степень 1/3 эквивалентна взятию кубического корня)

/* TODO: #Singl_Operator #(++)  */
let counter = 0;
alert(counter++); // 0
let counter = 1;
alert(2 * ++counter); // 4

/* TODO:  #Singl_Operator #(*+-=) */
let n = 2;
n *= 3 + 5;
alert(n); // 16  (сначала выполнится правая часть, превратив выражение в n *= 8)

/* TODO: #Singl_Operator #(,)  */
let a = (1 + 2, 3 + 4);
alert(a); // 7 (результат 3 + 4)
// три операции в одной строке
for (a = 1, b = 3, c = a * b; a < 10; a++) {
}

/* TODO: #Singl_Operator #(>) diff type  */
alert('2' > 1); // true, строка '2' становится числом 2
alert('01' == 1); // true, строка '01' становится числом 1
alert(true == 1); // true
alert(false == 0); // true

let a = 0;
alert(Boolean(a)); // false
let b = "0";
alert(Boolean(b)); // true
alert(a == b); // true!Равенство преобразует значения,
// используя числовое преобразование,
// поэтому "0" становится 0

/* TODO: prompt  #Browser*/
let age = prompt('Сколько тебе лет?', 100);

/* TODO: confirm  #Browser*/
let isBoss = confirm("Ты здесь главный?");
alert(isBoss); // true если нажата OK

/* TODO:  #Singl_Operator #(?) */
let accessAllowed = age > 18 ? true : false;

/* TODO:  #Singl_Operator #(?) chane */
let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
    (age < 18) ? 'Привет!' :
        (age < 100) ? 'Здравствуйте!' :
            'Какой необычный возраст!';

alert(message);

/* TODO: #Singl_Operator #(||)  */
alert(null || 0 || 1); // 1 (первое истинное значение)
alert(undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)

/* TODO:  analog if Cокращённое вычисление #Singl_Operator #(||) */
let x;
true || (x = 1);
alert(x); // undefined, потому что (x = 1) не вычисляется
false || (x = 1);
alert(x); // 1

/* TODO:  #Singl_Operator #(&&) */
// Если первый операнд истинный,
// И возвращает второй:
alert(1 && 0); // 0
alert(1 && 5); // 5

/* TODO:  (&&)  analog if  #Singl_Operator #(&&) */
let x = 1;
(x > 0) && alert(`your x = ${x} is negative meaning or zero ((( `);

/* TODO:  #Singl_Operator #(!)  */
alert(!true); // false
alert(!0); // true
alert(!!"non-empty string"); // true
alert(!!null); // false
alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false

/* TODO: Object.assign  clone_of_object_OBJ */
let OBJ = {prop: 'prop'};
let clone_of_object_OBJ = Object.assign({}, OBJ);


/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
/* TODO:   */
