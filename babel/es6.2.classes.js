"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
var Task =
/*#__PURE__*/
function () {
  function Task() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDifTitle();

    _classCallCheck(this, Task);

    this.title = title;
    this.done = false;
    Task.count++;
    col(' Create of task');
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this.done = true;
      col("task \"".concat(this.title, "\"  is dan"));
    }
  }], [{
    key: "getDifTitle",
    value: function getDifTitle() {
      return 'dif Task';
    }
  }]);

  return Task;
}();

Task.count = 0;
var task = new Task('Clear in room');
col(_typeof(Task));
col(_typeof(task));
col(task instanceof Task);
col(task.title);
task.complete();
col(task.done);
col(Task.count);
var task_2 = new Task();
col(Task.getDifTitle());
col(Task.count);