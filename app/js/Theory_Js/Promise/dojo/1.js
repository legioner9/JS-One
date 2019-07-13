/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let applyForVisa = function (documents) {
    col(' You docs in Offise');
    let pr = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve(documents) : reject('Your docs is not complit(((')
        }, 2000)
    })
    return pr;
}

let pr1 = applyForVisa({})
    .then(
        visa => {
            cpu( visa , ` Your visa is good = `);
            cpu(pr1 , ' (pr1 =  ')
            return visa;
        },
        reason => cpu(reason , ' Vo kak(((  ' )
    )


