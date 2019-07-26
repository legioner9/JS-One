/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// for (let xman of xmen) {
//     console.log(xman);
// }

let q_iter = (typeof xmen[Symbol.iterator])
let iterator_xmen = xmen[Symbol.iterator]();
// let next_iter_2 = iter_arr.next();
// let next_iter_3 = iter_arr.next();
// while ()
let next_iter = iterator_xmen.next();
while (!next_iter.done) {
    col(next_iter.value);
    next_iter = iterator_xmen.next();
}

let randomGenerator = {
    generate() {
        return this[Symbol.iterator]();
    },

    [Symbol.iterator]() {
        let count = 0;

        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 3;
                count += 1;
                return {value, done};
            }
        };
    }
};

let random = randomGenerator.generate();
console.log(random.next().value);
for (value of randomGenerator) {
    col(value);
}

let my_iterating_obj = {
    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let done = count > 1;
                let value = count;
                count++;
                return {value, done};
            }
        }
    }
}
// for (let value of my_iterating_obj) {
//     col(value);
// }

class MyObjectWithIterator {
    constructor(callBack, ...args) {
        this.callBack = callBack;
        this.args = args;// array of arguments
    }

    addArgs(...add_args) {
        this.args = this.args.concat(add_args);
    }

    [Symbol.iterator]() {
        return new MyIterator(this.args, this.callBack);
    }
}

class MyIterator {
    constructor(array, callBack) {
        this.array = array;
        this.callBack = callBack;
        this.index = 0;
    }

    next() {
        let result = {value: undefined, done: true};

        if (this.index < this.array.length) {
            result.value = this.callBack(this.array[this.index]);
            result.done = false;
            this.index++;
        }
        return result;
    }

}


let db_arr = new MyObjectWithIterator(a => 2 * a, 1, 2, 3);
debugger;
// let sn = db_arr[Symbol.iterator]().next();


for (let volume of db_arr) {
    col(volume);
}
