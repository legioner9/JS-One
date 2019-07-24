/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

class Task {

}


class SubTask extends Task {

}


let t0 = new Object();
let t = new Task('setTask');

let st = new SubTask('setSubTask', t);
col(t.__proto__.constructor === Task);
col(st.__proto__.constructor === SubTask);
col(st.__proto__.__proto__.constructor === Task);
col(SubTask.__proto__ === Task);
// col(SubTask.prototype);

let Task5 = function () {

}

let SubTask5 = function () {
    Task5.call(this, arguments);
}

SubTask5.prototype = Object.create(Task5.prototype);
SubTask5.prototype.constructor = Task5;
let t5 = new Task5();
let ts5 = new SubTask5();
debugger;
