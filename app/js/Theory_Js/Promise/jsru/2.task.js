/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

window.__my_PromiseDelay = function (time_dely) {
    return new Promise(function (resolve, reject) {
            this.time_dely = time_dely;
            setTimeout(resolve('default result') , this.time_dely)
        }
    )
}