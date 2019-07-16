/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// генератор для получения и показа аватара
// он yield'ит промисы

debugger;

function* showUserAvatar() {
    cp('start generite')
    debugger;
    let userFetch = yield fetch('user.json');
    debugger;
    let userInfo = yield userFetch.json();
    debugger;
    cpu(userInfo, 'userInfo = ')
}

debugger;
// вспомогательная функция-чернорабочий
// для выполнения промисов из generator
function execute(generator, yieldValue) {
    debugger;
    cp('start execute');
    debugger;
    let next = generator.next(yieldValue);
    debugger;
    if (!next.done) {
        debugger;
        next.value.then(
            result => execute(generator, result),
            err => generator.throw(err)
        );
        debugger;
    } else {
        debugger;
        // обработаем результат return из генератора
        // обычно здесь вызов callback или что-то в этом духе
        col(next.value);
        debugger;
    }
    debugger;
}

execute(showUserAvatar());