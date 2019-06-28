"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["Hello ", "   ", "   ", " egewqer"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
var ty = 'avrf';
var bfgb = 46;
var yt;

if (true) {
  yt = 'uuu';
} // col(yt);


var Pi = {};
Pi.ret = 'ret'; // col(Pi);

Pi.ret = 'retyr'; // col(Pi);

var arr = ['dfv', 'adfv'];
var arr_insert = ['sdf', 'dfv']; // col(['dfv', arr_insert, 'adfv']);
// col([...arr_insert, 'dfv', 'adfv','bfgdg']);

sum = function sum(x, y, z) {
  return col("".concat(x, " + ").concat(y, " + ").concat(z, " = ").concat(parseInt(x) + parseInt(y) + parseInt(z)));
};

var ar = ['1', '4', '7'];
sum.apply(void 0, ar);
var arg_Tiper = ['you', 'my self', 'teme of mess', 'text of message'];

function tiper(to, frome, teme, mess) {
  var mail = {
    to: to,
    frome: frome,
    teme: teme,
    mess: mess
  };
  col("\n        to: ".concat(to, ",\n        frome: ").concat(frome, ",\n        teme: ").concat(teme, ",\n        mess: ").concat(mess, "\n    "));
}

tiper.apply(void 0, arg_Tiper);
var name = 'Fill';
var toy = 'My toys';
col(literVolue(_templateObject(), toy, name, toy));
col("Hello ".concat(toy, "   ").concat(name, "   ").concat(toy, " egewqer"));

function literVolue(literal) {
  for (var _len = arguments.length, value = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    value[_key - 1] = arguments[_key];
  }

  col(arguments);
  var l = literal[0];
  return literal[0] + value[0].toUpperCase() + value[1];
}