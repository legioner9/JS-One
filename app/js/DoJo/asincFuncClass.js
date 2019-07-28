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

class DataServise {
    constructor(url) {
        this.url = url;
    }

    async getUser(id) {
        try {
            let response = await fetch(`${this.url}/users/${id}`);
            let data_user = await response.json();
            return data_user;
        } catch (e) {
            throw new Error('RESPONSE from User Post Poor(((')
        }
    }

    async getUserPosts(userId) {
        try {
            let response = await fetch(`${this.url}/posts?userId=${id}`);
            let data_user = await response.json();
            return data_user;
        } catch (e) {
            throw new Error('POST from server is poor(((')
        }
    }

    async getPostsComments(postId) {
        try {
            let response = await fetch(`${this.url}/comments?postId=${id}`);
            let data_user = await response.json();
            return data_user;
        } catch (e) {
            throw new Error('COMMENTS from server is poor(((')
        }
    }
}


mane = async () => {
    try {
        let user = await getUser_4(1);
        console.log('USER IS ==', user);
    } catch (e) {
        console.log('no User (((', e);
    }
}

mane();