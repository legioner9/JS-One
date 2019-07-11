/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
cp('start code');
let nPrTimeOut = function (numYes, timeYes, numNo, timeNo) {

    return new Promise(function (resolve, reject) {
            this.numYes = numYes || false;
            this.timeYes = timeYes || false;
            this.numNo = numNo || false;
            this.timeNo = timeNo || false;
            if (this.numYes) {
                setTimeout(
                    () => {
                        resolve(this.numYes);
                        cpu(numYes, 'resolve!!!');
                    }
                    , this.timeYes)
            }
            if (this.numNo) {
                setTimeout(
                    () => {
                        reject(this.numNo)
                        cpu(numNo, 'reject!!!');
                    }
                    , this.timeNo)
            }
        }
    )
}

let pr = nPrTimeOut(1, 1000, 2, 2000);


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
                cp(err);
                cpu(pt, " it s than reject");
            }

    )
cpu(pt, ' start yes ');

setTimeout(function () {
    cpu(pr , 'pr ');
    cpu(pt , 'pt ');
}, 4000);