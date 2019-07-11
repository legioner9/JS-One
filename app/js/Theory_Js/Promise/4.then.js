let a, a2;

cp('start');
let pr = new Promise(function(resolve, reject)  {
    setTimeout(() => {
            resolve(a = 88);
            cpu(pr ,  ' call resolve '  )
        }, 1000
        );
        setTimeout(() => {
                reject(a = 99);
                cpu(pr,' call reject ')
            }, 500
        )
    })

cpu(pr , 'init Promise');

let pt = pr
    .then(
        result => {
            cp(result);
            cpu(pt , " it s than ");
        }
    )

let ptc = pt
    .then(
        result => result,
        err => {
            cp(' last error catch err = ' + err)
            cpu(ptc , ' ptc !')
        }
    )
// setTimeout(() => {
//     cp('start of protocol pomise\'s')
//     col(pr);
//     col(pt);
//     col(ptc);
// }, 1000)

// cp('end  of code');
