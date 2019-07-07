/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// expected output: (Chrome) Error: First argument to String.prototype.startsWith must not be a regular expression
// expected output: (Firefox) Error: Invalid type: first can't be a Regular Expression
debugger;
regexp1[Symbol.match] = true;

console.log('/foo/'.startsWith(regexp1));
// expected output: true

console.log('/baz/'.endsWith(regexp1));
// expected output: false