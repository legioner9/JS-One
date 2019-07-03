/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Animal {
    constructor(vid) {
        this.vid = vid;
    }

    walk() {
        col(`${this.vid} is walk `);
    }
}

class Rabbit extends Animal {
    constructor(arg) {
        super(arg);
    }
    walk() {
        super.walk();
        col(' and jamp!')
    }
}

class ChaildRabb extends Rabbit {
    constructor(arg) {
        super(arg);
        this.rutt = 77;
    }
    walk() {
        super.walk();
        col(`bat not hier((( mini ${this.vid}`);
    }
}

debugger;
let ra = new ChaildRabb('Krol');
ra.walk();