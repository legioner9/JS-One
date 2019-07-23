/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
let li = 777;
let lin = 778;
debugger;
let litera = literal`afc ${li}
afc ${lin}`;

function literal(literals, ...val) {
    col(literals);
    col(val);
}
