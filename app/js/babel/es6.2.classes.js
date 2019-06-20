/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Task {
    constructor(title) {
        this.title = title;
    col(' Create of task');
    }
}

let task = new Task('Clear in room');
col(typeof Task);
col(typeof task);
col(task instanceof Task);
col(task.title);
col(task);
