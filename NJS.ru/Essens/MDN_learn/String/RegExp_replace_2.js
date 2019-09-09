/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let reg = /h/;
let reg_ = new RegExp('\\w+', 'ig');

let r_1 = 'Fsd Hhfdb'.replace(/(?<one>\w+) (?<two>\w+)/, `$<one> - $<two>`)
debugger;