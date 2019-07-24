/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Task {
    constructor(title = Task.getDefoultTatle()) {
        Task.count++;
        this._done = false;
        this._title = title;
        col(`Creating task "${title}" `);
    }

    complete() {
        this._done = true;
        col(`Task "${this._title}" is done)))`)
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTask() {
        return 'Default task';
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
    }

    complete() {
        super.complete();
        col(`SubTask "${this.title}" is done)))`)
    }
}

// class UsSubTask extends SubTask {
//     constructor(title) {
//         super(title);
//         this.propUsSubTask = true;
//         col(`Creating task "${title}" `)
//     }
//
//     metUsSubTask() {
//
//     }
// }

let t0 = {};
let t = new Task('setTask');
let st = new SubTask('setSubTask', t);
t.complete();
st.complete();
debugger;

