/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Task {
    constructor(title = Task.getDifTitle()) {
        this.title = title;
        this._done = false;
        Task.count++;
        col(` Create of task "${title}"`);
    }

    complete() {
        this._done = true;
    }

    get done() {
        return this._done === true ? `Task "${this.title}" is done )) ` :  `Task "${this.title}" is NO done(( `
    }

    set done(value){
        if (typeof value === "boolean" && value !== undefined) {
            this._done = value;
        } else {
            col(` your value = ${value} is not boolean! value is false now`)
            this._done = false;
        }
    }

    static getDifTitle() {
        return 'dif Task';
    }
}

Task.count = 0;

let task = new Task('Clear in room');
col(typeof Task);
col(typeof task);
col(task instanceof Task);
task.complete();
col(task.done);
col(Task.count);
let task_2 = new Task();
col(Task.getDifTitle());
col(Task.count);
col(task_2.done);





