/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Task {
    constructor(title = Task.getDifTitle()) {
        this.title = title;
        this.done = false;
        Task.count++;
        col(' Create of task');
    }

    complete() {
        this.done = true;
        col(`task "${this.title}"  is dan`);
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
col(task.title);
task.complete();
col(task.done);
col(Task.count);
let task_2 = new Task();
col(Task.getDifTitle());
col(Task.count);



