/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

/* TODO: convert to String(value)  */
let value = true;
alert(typeof value); // boolean
value = String(value); // теперь value это строка "true"
alert(typeof value); // string

/* TODO: convert to Number(str) */
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

/* TODO:  convert to Boolean("Привет!")  */
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("Привет!")); // true
alert(Boolean("")); // false
alert(Boolean("0")); // true
alert(Boolean(" ")); // пробел это тоже true (любая непустая строка это true)

/* TODO: #Task convert to #Answer*/
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


/* TODO:  Unar (+) */
let apples = "2";
let oranges = "3";
alert(apples + oranges); // "23", так как бинарный плюс складывает строки
alert(+apples + +oranges); // 5
alert(Number(apples) + Number(oranges)); // 5

/* TODO: (=) */
let c = 3 - (a = b + 1);

/* TODO: (%) */
alert(5 % 2); // 1, остаток от деления 5 на 2
alert(8 % 3); // 2, остаток от деления 8 на 3
alert(6 % 3); // 0, остаток от деления 6 на 3

/* TODO:  (**) */
alert(2 ** 2); // 4  (2 * 2)
alert(2 ** 3); // 8  (2 * 2 * 2)
alert(2 ** 4); // 16 (2 * 2 * 2 * 2)
alert(4 ** (1 / 2)); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
alert(8 ** (1 / 3)); // 2 (степень 1/3 эквивалентна взятию кубического корня)

/* TODO: (++)  */
let counter = 0;
alert(counter++); // 0
let counter = 1;
alert(2 * ++counter); // 4

/* TODO:  (*+-=) */
let n = 2;
n *= 3 + 5;
alert(n); // 16  (сначала выполнится правая часть, превратив выражение в n *= 8)

/* TODO: (,)  */
let a = (1 + 2, 3 + 4);
alert(a); // 7 (результат 3 + 4)
// три операции в одной строке
for (a = 1, b = 3, c = a * b; a < 10; a++) {
}

/* TODO: (>) diff type  */
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
/* TODO:   */
