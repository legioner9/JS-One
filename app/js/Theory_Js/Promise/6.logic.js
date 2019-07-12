/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
cp('start code');

let p = nPrTrueFalse(true, '(pr Promise)', 500)


let pt = p
    .then(
        result => nPrTrueFalse(false, '(pr then true) ', 500)
        ,
        err => {
            if (err instanceof Error) {
                return err
            } else {
                return nPrTrueFalse(false, '(pr then false)', 500)
            }
        }
    )

let ptt = pt.then(
    result => result,
    err => err
)

// let ptc = pt.catch(
//     err => col(err + ' (err catch) ')
// )

setTimeout(function () {
    cpu(p, '( p )');
    cpu(pt, '( pt )');
    cpu(ptt, '( ptt )');
    // cpu(ptc, '( ptc )');
}, 2000);

