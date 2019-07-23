/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Task {
    constructor(tatle = Task.getDefoultTatle()) {
        this._done = false;
        this.tatle = tatle;
        Task.count++;
        col('create of class Task!!!')
    }

    set done(value) {
        if (value !== undefined && value instanceof Boolean) {
            this._done = value;
        } else {
            console.error('Value is not valid');
        }
    }

    get done() {
        return this._done ? `Task "${this.tatle}" is DONE)))` : `Task "${this.tatle}" is NOT DONE(((`;
    }

    complit() {
        this._done = true;
        col(`Task "${this.tatle}" is done)))`);
    }

    static getDefoultTatle() {
        return 'Default Task';
    }

}

Task.count = 0;
let task = new Task('Clear in rum');
let task_2 = new Task();
col(task instanceof Task);
col(typeof Task);
col(typeof task);
debugger;
task.complit();

