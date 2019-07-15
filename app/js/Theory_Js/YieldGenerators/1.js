/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

let one = generator.next();
col(one);
col(JSON.stringify(one));
let two = generator.next();
generator = generateSequence();
for (let value of generator) {
    col(value);
}

function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {
        yield i;
    }

}

let seq = [...generateSequence(2, 6)];

function* generateAlphaNum() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    yield* generateSequence(97, 122);

}

let str = '';
for (let volume of generateAlphaNum()) {
    str +=String.fromCharCode(volume)
}

function* gen() {
    // Передать вопрос во внешний код и подождать ответа
    let result = yield "2 + 2?";

    col(result);
}

generator = gen();

let question = generator.next().value;
// "2 + 2?"

setTimeout(() => generator.next(4), 10000);

function* yieldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable";
}

let geny = yieldAndReturn();
debugger;
console.log(geny.next()); // { value: "Y", done: false }
console.log(geny.next()); // { value: "R", done: true }
console.log(geny.next()); // { value: undefined, done: true }

function* logGenerator() {
    console.log(yield);
    console.log(yield);
    console.log(yield);
}

let gent = logGenerator();

// первый вызов next выполняется от начала функции
// и до первого оператора yield
gent.next();
gent.next('pretzel'); // pretzel
gent.next('california'); // california
gent.next('mayonnaise'); // mayonnaise