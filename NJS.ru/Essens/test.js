/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

//++++++++++++++++++++++++++++++++++++++++++++++++++++

let map_new = new Map();
map_new.set(['k', 2], ['v', 4]);
map_new.set({k: 'a'}, {v: 'b'});
let $map_new = map_new._$();

let new_obj = {
    k1: 'v1',
    k2: ['v2'],
    k3: {'v3': 'vlume'},
}
let $new_obj = new_obj._$();
let bol = $new_obj.isObj
let name = $new_obj.Type
let new_arr = [
    'v1',
    ['v2'],
    {'v3': 'vlume'},
]

let $new_arr = new_arr._$();

let $new_str = 'vsdve'._$();
let str_1 = 'sadc';
let bl = ''._$().__my_getObjClass()

debugger;


//+++++++++++++++++++++++++++++++++++++++++++++++++++

let pca = new_arr.__proto__.constructor == Array
let tofa = typeof (new_arr);

for (let key in new_arr) {
    if (new_arr.hasOwnProperty(key)) col(key);
}
for (let item of new_arr) {
    col(item)
}

new_arr.forEach((a, ind, arr) => {
    col(a);
}, {})

let keys_arr = Object.keys(new_arr);
let values_arr = Object.values(new_arr);
let entries_arr = Object.entries(new_arr);

let iter_arr = new_arr[Symbol.iterator]();
col(iter_arr.next());
col(iter_arr.next());
col(iter_arr.next());
col(iter_arr.next());

//================================================================


let pco = new_obj.__proto__.constructor == Object
for (let key in new_obj) {
    if (new_obj.hasOwnProperty(key)) col(key);
}
// for (let item of new_obj) {
//     col(item)                                                  NOT DEFINED !!!
// }

let keys_obj = Object.keys(new_obj);
let values_obj = Object.values(new_obj);
let entries_obj = Object.entries(new_obj);

for (let key_item of entries_obj) {
    col(key_item);
}

// let iter_obj = new_obj[Symbol.iterator](); NOT DEFINED !!!
let iter_entries_obj = entries_obj[Symbol.iterator]();
col(iter_entries_obj.next());
col(iter_entries_obj.next());
col(iter_entries_obj.next());
col(iter_entries_obj.next());

//================================================================


let tofm = typeof (map_new);
let tofmc = map_new.__proto__[Symbol.toStringTag];
let pcm = map_new.__proto__.constructor == Map


let keys_map = map_new.keys();
let value_map = map_new.values();
let entries_map = map_new.entries();

let iter_map = map_new[Symbol.iterator]();
col(iter_map.next());
col(iter_map.next());
col(iter_map.next());

let iter_keys = keys_map[Symbol.iterator]();
col(iter_keys.next());
col(iter_keys.next());
col(iter_keys.next());

let iter_value = value_map[Symbol.iterator]();
col(iter_value.next());
col(iter_value.next());
col(iter_value.next());

let iter_entries = entries_map[Symbol.iterator]();
col(iter_entries.next());
col(iter_entries.next());
col(iter_entries.next());

//================================================================

let new_set = new Set();
let pcset = new_set.__proto__.constructor == Set
//================================================================

let new_str = '';
let pcstr = new_str.__proto__.constructor == String
//================================================================
//cast to essense

// Object.toEssens = function () {
//     if (typeof (this) == a)
//         let en = this.entries()
// }
