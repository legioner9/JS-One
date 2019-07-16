/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// генератор для получения и показа аватара
// он yield'ит промисы


function* showUserAvatar() {
    cp('start generite')
    let userFetch = yield fetch('user.json');
    cpu(userFetch , 'userFetch = ')
    let userInfo = yield userFetch.json();
    cpu(userInfo, 'userInfo = ')
}

// вспомогательная функция-чернорабочий
// для выполнения промисов из generator
function execute(generator, yieldValue) {
    cp('start execute');
    let next = generator.next(yieldValue);
    if (!next.done) {
        next.value.then(
            result => execute(generator, result),
            err => generator.throw(err)
        );
    } else {
        // обработаем результат return из генератора
        // обычно здесь вызов callback или что-то в этом духе
        col(next.value);
    }
}

execute(showUserAvatar());