/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
debugger;
let ob_1 = {
  a_1: {
    value: 99,
    enumerable: false,
    writable: false,
    configurable: false,
  }
}

let ob_ini = Object.defineProperties({}, {
  a: {
    value: 99,
    enumerable: false,
    writable: false,
    configurable: false,
  }
});

let ob = defineProperties_({}, {
  a: {
    value: 99,
    enumerable: false,
    writable: false,
    configurable: false,
  }
});
