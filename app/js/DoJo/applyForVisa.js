/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
function ApplyForVisa() {
    col('Treating your');
    let promis_1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve({v: 'visa'}) : reject('Documents is not comlit');
        }, 2000)
    })
    return promis_1;
}

let bookHotel = function (visa) {
    col('Visa is resivd go to Book');
    let promise_2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve(visa) : reject('Booking is not succsess');
        }, 2000)
    })
    return promise_2;
}

let buyTickets = function (visa) {
    console.log(`Tickets in proseed visa = `, visa)
}

let er = err => console.error(err);

ApplyForVisa()
    .then((visa) => {
        col('free THEN look for  return!!! ')
        return visa;
    })
    .then(bookHotel)
    .then(buyTickets)
    .catch(er)
    .then(() => col('I`m here ))))'));