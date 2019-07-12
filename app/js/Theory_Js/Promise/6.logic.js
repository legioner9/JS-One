/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
cp('start code');

let p = nPrTrueFalse(false, 'pr Promise', 500)


let pt = p
    .then(
       result => nPrTrueFalse(true, 'pr then true ', 500)
        ,
        err => {
           if(err instanceof Error) {return err}
           else {return nPrTrueFalse(true, 'pr then false' , 500)}
        }
    )

let ptt = pt.then(
    null,
    err => err
)

let ptc = pt.catch(
    err => err
)

setTimeout(function () {
    cpu(p, 'p ');
    cpu(pt, 'pt ');
    cpu(ptt, 'ptt ');
    cpu(ptc, 'ptc ');
}, 2000);

