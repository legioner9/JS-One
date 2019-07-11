let a, a2;

// cp('start');
let pr = new Promise((resolve, reject) => {
    // cp('start Promise')
    setTimeout(() => {
            // cp(' resolve start Time out');
            resolve(a = 88);
            // col(pr);
            cp(' resolve dan!');
        }, 100
    );
    setTimeout(() => {
            // cp(' reject start Time out');
            reject(a = 99);
            // col(pr);
            cp(' reject  dan!');
        }, 500
    )
    // cp('end of Promise')
})
// cp('then');

let pt = pr
    .then(
        result => {
            // let pa = JSON.parse(' ');
            // col('then result');
            cp(result);
            // return result;
        },
        // null
    )
let ptc = pt
    .then(
        // result => result,
        // err => {
        //     cp(' last error catch err = ' + err)
        // }
    )
setTimeout(() => {
    cp('start of protocol pomise\'s')
    col(pr);
    col(pt);
    col(ptc);
}, 1500)

// cp('end  of code');
