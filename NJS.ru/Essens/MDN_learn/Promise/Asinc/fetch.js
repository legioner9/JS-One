/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

const fetch = require('node-fetch');

const getUser_a = async function (id) {
    // return new Error('It\'s Errors message');
    return fetch(`http://localhost:3011/posts/${id}`)
    .then(respons => respons.json());
}

const main_a = async function (id) {
    let user = await getUser_a(id)
    return console.log(user);
};

main_a(2);