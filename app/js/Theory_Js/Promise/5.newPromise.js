/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
cp('start code');

let pr = nPrTimeOut(1, 3000, 2, 2000);


let pt = pr
    .then(
        null
        // result => {
        //     cp(result);
        //     cpu(pt, " it s than resolv");
        //     return result;
        // }
        ,
        err => {
            // cp(err);
            // cpu(pt, " it s than reject");
            return err;
        }
    )
cpu(pt, ' start yes ');

setTimeout(function () {
    cpu(pr, 'pr ');
    cpu(pt, 'pt ');
}, 4000);

