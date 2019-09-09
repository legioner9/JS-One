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
    regexp: /Java (Script)/g,
});
UDate.push({
    str: 'my@mail.com @ his@site.com.uk',
    regexp: /[-.\w]+@([\w-]+\.)+[\w-]+/g,
});


let res_UDate = UDate.map(a => a.res = (a.str).match(a.regexp));
// col(UDate);

let MUDate = [];
MUDate.push({
    str: '<h1>Hello, world!</h1>',
    regexp: /<(.*?)>/g,
});

MUDate.push({
    str: 'Gooooogooo',
    regexp: /(go)+/ig,
})

MUDate.push({
    str: 'mare-gvd@inhh-cs.cvs-cve',
    regexp: /[-.\w]+@[-.\w]+\.[.\w]+/,
});

MUDate.push({
    str: 'mare-gvd@inhh-cs.cvs-cve',
    regexp: /[-.\w]+(@[-.\w]+\.)[.\w]+/,
});

MUDate.push({
    str: 'mare-gvd@inhh-cs.cvs-cve',
    regexp: /([-.\w]+@[-.\w])+\.[.\w]+/,
});

MUDate.push({
    str: 'my@mail.com @ his@site.com.uk',
    regexp: /[-.\w]+@([\w-]+\.)+[\w-]+/g,
});

MUDate.push({
    str: '<h1>Hello, world!</h1>',
    regexp: /<(.*?)>/,
});

MUDate.push({
    str: '<h1>Hello, world!</h1><>',
    regexp: /<(.+?)>/g,
});

MUDate.push({
    str: '<span class="my">',
    regexp: /<(([a-z]+)\s*([^>]*))>/,
});

MUDate.push({
    str: '<span class="my">',
    regexp: /<(([a-z]+)\s*(.+))>/,
});

MUDate.push({
    str: 'c',
    regexp: /c(a)?(b)?/,
});

MUDate.push({
    str: 'ca',
    regexp: /c(a)?(b)?/,
});

MUDate.push({
    str: '<span class="my">',
    regexp: /<(?<result>(?<teg>[a-z]+)\s*(?<volume>[^>]*))>/,
});

MUDate.push({
    str: `<span_1 class="my_1">
<span_2 class="my_2">`,
    regexp: /<(?<result>(?<teg>[a-z]+)\s*(?<volume>[^>]*))>/g,
});

let res__MUDate = MUDate.map(a => a.res = Array.from((a.str).matchAll(a.regexp)));

for (const uDateElement of MUDate) {
    let date = {
        a: uDateElement.regexp,
        b: uDateElement.res,
    }
    col(date);
}
let t = 'my@mail.com @ his@site.com.uk'.matchAll(/([-.\w]+@)([\w-]+\.+[\w-]+)/g);
let re_t = Array.from(t);

debugger;
