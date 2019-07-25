/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let {a: fa, b: fb, sr: {sa: usra, sb: usrb}} = {
    a: 'aaa', b: 'bbb', sr: {
        sa: 'sssa', sb: 'sssb'
    }
};

let user = {
    firstname: 'Jone',
    lastname: 'Doe',
    social: {
        facebook: 'jonedo',
        twitter: 'joddo'
    }
}

function post(url, {data: {firstname, lastname}, cache}) {
    console.log(firstname, lastname, cache);
}

let res = post('api/user', {data: user, cache: false});

let gga = function () {
    return user;
}
let {social: {twitter: FN}} = gga();
debugger;