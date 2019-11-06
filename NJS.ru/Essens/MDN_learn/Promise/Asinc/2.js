/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
const getUser_a = async function (id) {
    // return new Error('It\'s Errors message');
    return {id: id};
}

const main_a = async function () {
    let user = await getUser_a(3)
    console.log(user);
};

main_a();

const getUser_b = async function (id) {
    // return new Error('It\'s Errors message');
    return Promise.resolve({id: id});
}

const main_b = async function () {
    let user = await getUser_b(4)
    console.log(user);
};

main_b();