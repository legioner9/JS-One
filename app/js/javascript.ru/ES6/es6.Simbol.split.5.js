/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Split1 {
    constructor(value) {
        this.value = value;
    }
    [Symbol.split](string) {
        var index = string.indexOf(this.value);
        return this.value + string.substr(0, index) + "/"
            + string.substr(index + this.value.length);
    }
}

console.log('foobar'.split(new Split1('foo')));
// expected output: "foo/bar"