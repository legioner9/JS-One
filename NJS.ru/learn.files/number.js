/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
"us strict"
/* TODO:  0x radix 16 */
let r16_;
r16_ = 0x4d; //77
let r16_1 = parseInt('0x4d', 16);  //77
let sr16 = r16_.toString(16); //'4d'


let i = (4.56e-3) * 1e3; // 4.56
/* TODO:  0b radix 2 */
let r2 = 0b110; //6
let r2_1 = parseInt('110', 2); //6
let sr2 = r2.toString(2);   // '110'
/* TODO:  0o radix 8 */
let r8 = 0o514; //332
let r8_1 = parseInt('514', 8); //332
let sr8 = r8.toString(8); //'514'

let y77 = 77..toString(10);  //77
/* TODO:  toFixed */
let ui = 4.7767773.toFixed(2); // '4.78' like Math.round
let ui_1 = 4.7749.toFixed(2); // '4.77' like Math.round
/* TODO:  Math.round */
let n11 = Math.round(4.49) == Math.round(3.51); //true (4)
/* TODO:  Math.floor */
let n12 = Math.floor(7.01) == Math.floor(7.99) // true (7)
/* TODO: Math.ceil  */
let n13 = Math.ceil(-7.01) == Math.ceil(-7.99); //true (-7)
/* TODO:  Math.trunc */
let n14 = Math.trunc(0.99) == Math.trunc(-0.99); // true (0);

let hint = 0.1 + 0.2;
let h = hint == 0.3;
let hint_1 = hint.toFixed(2);//"0.30"
let hint_2 = hint.toFixed(20);//"0.30000000000000004441"
let hint_3 = hint.toFixed(30);//""0.300000000000000044408920985006""
/* TODO:  isNaN */
let inan = isNaN('vfdsv') == isNaN(NaN) // true
let i_false = NaN === NaN; // false!!!!
/* TODO:  isFinite */
let i_finite = isFinite('657'); //true
let i_finite_1 = isFinite('fe'); // false because Nan - special meaning
let i_finite_2 = isFinite(Infinity); // false becouse Infinity

let pi = Math.PI;
let cos = Math.cos(pi / 3);

//task 1
() => {
    debugger;
    let pr_1 = prompt('Number 1 : ', '1');
    if (!isFinite(+pr_1)) return col(`Your number "${pr_1}" is not number`);
    pr_1 = +pr_1;

    let pr_2 = prompt('Number 2 : ', '2');
    if (!isFinite(+pr_2)) return col(`Your number "${pr_2}" is not number`);
    pr_2 = +pr_2;

    col(`Summa Our number "${pr_1}" and "${pr_2}" = ${pr_1 + pr_2}`);

}

//task 2
let n635 = 6.35.toFixed(1);

//task 3
let readNumber = () => {
    let pr_3 = prompt('Enter number', 7);
    while (5 != 7) {
        switch (pr_3) {
            case null:
                alert('Sorry cancel');
                return;
            case '':
                alert('Sorry empty');
                return;
            default:
                debugger;
                if (typeof (+pr_3) == 'number') {
                    alert(`Your number "${pr_3}" `)
                    return +pr_3;
                }
                alert(`Your number "${pr_3}" is not number ,try again please`);
                pr_3 = prompt('Enter number', 7);
        }
    }
}
let aa = 1;
let aaa = +!!aa;
debugger;
