/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
let li = 777;
debugger;
let litera = literal`afc ${li}
afc ${li}`;
function literal(literals , val) {
    col(literals);
    col(val);
}
