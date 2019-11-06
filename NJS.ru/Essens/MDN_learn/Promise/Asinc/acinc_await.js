/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

async function getUser(id) {
    // return new Error('It\'s Errors message');
    return {id: id};
}

getUser(2)
.then(res => console.log(res), rej => console.log(rej.mes));
