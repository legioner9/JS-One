"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
var Task = function Task(title) {
  _classCallCheck(this, Task);

  this.title = title;
  col(' Create of task');
};

var task = new Task('Clear in room');
col(_typeof(Task));
col(_typeof(task));
col(task instanceof Task);
col(task.title);
col(task);