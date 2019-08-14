/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

col('\u2F67\u2278\u24D2 \u8230'); //HEX  Unicode
col("\u{1F644}");//U+1F60E
col("\u{1F60D}");//U+1F60D
col("\ud83d\ude0d");//Java Escape


let ef_uc = "Ф".codePointAt(0);//1060
let ef_ru = String.fromCodePoint(ef_uc)//"Ф"
let ef_ru_1 = "Ф".codePointAt(0).toString(16);//424
col('\u{424}');//Ф
col('\{1060}');//Ф


// let __my_unicodArr = [];
// for (let i = 0; i < 10000; i++) {
//     __my_unicodArr.push(
//         {
//             DEC: i,
//             HEX: i.toString(16),
//             SIMV: String.fromCodePoint(i),
//         }
//     )
// }
let __my_serchUncodeSimv = simv => __my_unicodArr.filter(a => a.SIMV == simv)
let __my_serchUncodeFromTo = (a, b) => __my_unicodArr.slice(a, b)

let a_a = __my_serchUncodeSimv("…");
let ar_50_100 = __my_serchUncodeFromTo(50, 100);
debugger;

let str = String('zca csad fc');
let tof = typeof (str);
let s_1 = str.endsWith('c', 5);
let s_2 = str.startsWith('z', 3);
let s_3 = str.includes('csad', 5);
let s_4 = str.lastIndexOf('a');
let s_5 = str.slice(1, 5);
let s_6 = str.substring(1, 5);


window.__my_upFirstCharString = (str) => {
    str = str.length ? str[0].toUpperCase() + str.slice(1) : '';
    return str;
}
let up = __my_upFirstCharString('nten');

let checkSpam_ = str => {
    let st_a = str.toLowerCase();
    let s_1 = Boolean(~st_a.indexOf('viagra'));
    let s_2 = Boolean(~st_a.indexOf('xxx'));
    return s_1 || s_2;
}
let arr_ch = ['viagra', 'XXX']

col(__my_checkTextForStopWord('buy ViAgRA now', arr_ch));
col(__my_checkTextForStopWord('free xxxxx', arr_ch));
col(__my_checkTextForStopWord("innocent rabbit", arr_ch));

let truncate = (str, max_length) => {
    let s_1 = str.slice(0, max_length - 1);
    let s_2 = str.length <= max_length ? '' : `\u8230`
    let res = s_1.concat('', s_2);
    return res;
}
let st_11 = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) //"Вот, что мне хотело…"
let st_12 = truncate("Всем привет!", 20) // "Всем привет!"


let x_32 = 32..toString(16);
let arr_x = [];
for (let i = 0; i < 40; i++) {
    arr_x.push(i.toString(16));
}

// Длинные юникодные коды
// 佫, редкий китайский иероглиф
col("\u{20331}");
// 😍, лицо с улыбкой и глазами в форме сердец
col("\u{1F60D}");

// 0: "0"
// 1: "1"
// 2: "2"
// 3: "3"
// 4: "4"
// 5: "5"
// 6: "6"
// 7: "7"
// 8: "8"
// 9: "9"
// 10: "a"
// 11: "b"
// 12: "c"
// 13: "d"
// 14: "e"
// 15: "f"
// 16: "10"
// 17: "11"
// 18: "12"
// 19: "13"
// 20: "14"
// 21: "15"
// 22: "16"
// 23: "17"
// 24: "18"
// 25: "19"
// 26: "1a"
// 27: "1b"
// 28: "1c"
// 29: "1d"
// 30: "1e"
// 31: "1f"
// 32: "20"
// 33: "21"
// 34: "22"
// 35: "23"
// 36: "24"
// 37: "25"
// 38: "26"
// 39: "27"

