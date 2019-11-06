/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

const fetch = require('node-fetch');

const getUser_a = async function (id) {
    // return new Error('It\'s Errors message');
    try {
        let response = await fetch(`http://localhost:3011/posts/${id}`);
        let data = await response.json();
        console.log(response);
        return data;
    } catch (e) {
        return new Error('You Send is not success ');
    }
}

const main_a = async function (id) {
    try {
        let user = await getUser_a(id);
        console.log(user);
    } catch (e) {
        // console.log('MES',e.message);
        console.error('MES', e.message);
    }

};

main_a(1);