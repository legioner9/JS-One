/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function* generateSequence() {
    yield 'a1';
    yield 'e2';
    // return 'u3';
}

let generator = generateSequence();
debugger;
for(let value of generator) {
    col(value); // 1, затем 2
}
// const users = [
//     {name: 'raja'},
//     {name: 'john'},
//     {name: 'matt'},
// ];

// users[Symbol.iterator] = function () {
//
//     let i = 0;
//     // let users = this.users;
//
//     //этот возвращаемый объект называется итератором
//     return {
//         next() {
//             if (i < users.length) {
//                 return {done: false, value: users[i++]};
//             }
//             return {done: true};
//         },
//     };
// }
// users.getIterator = function* () {
//     this.users = users;
//     this.len = users.length;
//     for (let i in this.users){
//         i++;
//         yield this.users[i];
//         //хотя эта команда вызывается внутри цикла,
//         //yield выполняется лишь один раз за вызов
//     }
// }



//Вместо того чтобы делать объект итерируемым, можно
//просто создать метод-генератор (*getIterator())
//и возвратить итератор для извлечения данных
class Users{
    constructor(users) {
        this.users = users;
        this.len = users.length;
    }

    //это генератор, который возвращает итератор
    *[Symbol.iterator](){
        for (let i in this.users){
            if (!this.users.hasOwnProperty(i)) continue;
            yield (this.users[i].name +' ' + i);
            //хотя эта команда вызывается внутри цикла,
            //yield выполняется лишь один раз за вызов
        }
    }
}

const allUsers = new Users([
    { name: 'raja' },
    { name: 'john' },
    { name: 'matt' }
]);

debugger;
//allUsersIterator называют итератором
// const allUsersIterator = allUsers.getIterator();

for(const u of allUsers){
    col(u);
}
// for(const u of users){
//     col(u.name);
// }