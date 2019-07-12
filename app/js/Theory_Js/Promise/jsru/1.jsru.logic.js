/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */


// сделать запрос
let hG = __my_XMLhttpGet('user.json')
// 1. Получить данные о пользователе в JSON и передать дальше
let hGt = hG.then(response => {
    cpu(response, ' (response) ');
    let user = JSON.parse(response);
    return user;
})
// 2. Получить информацию с github
let hGtt = hGt.then(user => {
    cpu(user, ' (user) ');
    return __my_XMLhttpGet(`https://api.github.com/users/${user.name}`);
})
// 3. Вывести аватар на 3 секунды (можно с анимацией)
let hGttt = hGtt.then(githubUser => {
    cpu(githubUser , ' (githubUser) ');
    githubUser = JSON.parse(githubUser);

    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    cpu(img , ' (img) ');
    document.body.appendChild(img);

    setTimeout(() => img.remove(), 3000); // (*)
});

