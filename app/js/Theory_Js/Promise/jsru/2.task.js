/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

window.__my_PromiseDelay = function (time_dely) {
    return new Promise(function (resolve, reject) {
            this.time_dely = time_dely;
            setTimeout(resolve('default result'), this.time_dely)
        }
    )
}

let urls = [
    'user.json',
    'user2.json',
    'user3.json'
]

Promise.consis = function (arr_url, nPromise) {
    window.arr_result = [];
    Pt = Promise.resolve();
    for (let i = 0; i < arr_url.length; i++) {
        Pt = Pt.then(() => nPromise(arr_url[i]));
        Pt = Pt.then(result => {
                cpu(result, `(res i = ${i})`);
                arr_result.push(result);
            }
        )
        Pt = Pt.then(() => cpu(arr_result , 'resalt array'));
    }
}
let op = Promise.consis(urls, __my_XMLhttpGet);

// let a = setTimeout(function () {
//     col(arr_result)
// }, 2000);

