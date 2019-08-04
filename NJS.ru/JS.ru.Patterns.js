/* TODO:  (&&)  analog if == calculation chane*/
let x = 1;
(x > 0) && alert(`your x = ${x} is negative meaning or zero ((( `);

/* TODO:  (||) analog analog if == calculation chane */
let x;
true || (x = 1);
alert(x); // undefined, потому что (x = 1) не вычисляется
false || (x = 1);
alert(x); // 1
alert(alert(1) || 2 || alert(3));//

/* TODO:  Unar (+) and analog Number() */
let apples = "2";
let oranges = "3";
alert(apples + oranges); // "23", так как бинарный плюс складывает строки
alert(+apples + +oranges); // 5
alert(Number(apples) + Number(oranges)); // 5

/* TODO: (||) (&&) logical network  */
let pr = 20;

debugger;
let l1 = (pr >= 0 && pr < 10) && '0<ok < 10';
let l2 = pr >= 10 && 'ok >= 10';
let def_answer = 'out of range variable'
col(l1 || l2 || def_answer);


let obj_network = {
    1: pr > -Infinity && pr < 10,
    2: pr == 10,
    3: pr > 10 && pr <= 200,
    4: pr == 200,
    5: pr > 200 && pr < Infinity,
}

/* TODO:  (?) chane */
let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
    (age < 18) ? 'Привет!' :
        (age < 100) ? 'Здравствуйте!' :
            'Какой необычный возраст!';

alert(message);