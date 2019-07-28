/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// async function getUser(id) {
//     throw new Error('own error')
//     return {id: 1};
// }
//
// getUser(1)
//     .then(
//         user => console.log(user),
//         e => console.log(e)
//     );
const fetch = require('node-fetch');

async function getUser_2(id) {
    throw new Error('own error')
    return {id: 1};
}

let mane = async function () {

    try {
        let gus = await getUser_2(1);
        console.log(gus);
    } catch (e) {
        console.log(e);
    }

}

let getUser_3 = function (id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json());
}

let getUser_4 = async function (id) {
    let response = await fetch(`https://jsonplaceholder.typicode.comm/users/${id}`);
    let data_user = await response.json();
    return data_user;
}
mane = async function () {
    try {
        let user = await getUser_4(1);
        console.log(user);
    } catch (e) {
        console.log('no User (((', e);
    }
}

mane();