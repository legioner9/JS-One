/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let re_1 = 'Gogogo now!'.match(/(go)+/i);

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str = "2019-04-30";

let results = str.match(dateRegexp);


// let res_a = str.replace(dateRegexp, callback);
let UDate = [];

UDate.push({
    str: "I love JavaScript",
    regexp: /Java(Script)/
});
UDate.push({
    str: "I love JavaScript",
    regexp: /Java(Script)/g
});


let res_UDate = UDate.map(a => a.res = (a.str).match(a.regexp));
// col(UDate);

let MUDate = [];
MUDate.push({
    str: '<h1>Hello, world!</h1>',
    regexp: /<(.*?)>/g,
})


let res_MUDate = MUDate.map(a => a.res = Array.from((a.str).matchAll(a.regexp)));
col(MUDate);
debugger;