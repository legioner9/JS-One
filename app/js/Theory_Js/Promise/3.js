let a = 3;

cp('start');
let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve(a = 88);
            col(pr);
            cp(' resolve ');
        }, 1000
    );
    setTimeout(() => {
        reject(a = 99);
        col(pr);
        cp(' reject ');
    }, 500)
})
cp('then');
pr
    .then(
        (result) => cp(result),
        (err) => cp(err));
cp('end  of code');