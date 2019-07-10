let a, a2;

cp('start');
let pr = new Promise((resolve, reject) => {
    cp('start Promise')
    setTimeout(() => {
            cp(' resolve start Time out');
            let pa = JSON.parse(' ');
            resolve(a = 88);
            col(pr);
            cp(' resolve dan!');
        }, 1000
    );
    setTimeout(() => {
        cp(' reject start Time out');
        reject(a = 99);
        col(pr);
        cp(' reject  dan!');
    }, 500)
    cp('end of Promise')
})
cp('then');
// debugger;
pr
    .then(
        result => {
            cp(result);
            col('then result')
        },
        err => {
            cp(err);
            col('then err')
        }
    );
cp('end  of code');

// let pr2 = new Promise((resolve, reject) => {
//     col(pr2);
//     // let pa2 = JSON.parse(' ');
//     setTimeout(() => {
//             resolve(a2 = 88);
//             col(pr2);
//             cp(' resolve 2 ');
//         }, 1000
//     );
//     setTimeout(() => {
//         reject(a2 = 99);
//         col(pr2);
//         cp(' reject2 ');
//     }, 1500)
// })
// cp('then 2');
// pr2
//     .then(
//         result => cp(result),
//         err => cp(err)
//     );
// cp('end  of code2');