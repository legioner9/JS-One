/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */


let new_arr = [
    'v1',
    ['v2'],
    {'v3': 'vlume'},
]

let keys_arr = Object.keys(new_arr);
let values_arr = Object.values(new_arr);
let entries_arr = Object.entries(new_arr);

let iter_arr = new_arr[Symbol.iterator]();
col(iter_arr.next());
col(iter_arr.next());
col(iter_arr.next());
col(iter_arr.next());
debugger;

let new_obj = {
    k1: 'v1',
    k2: ['v2'],
    k3: {'v3': 'vlume'},
}

let keys_obj = Object.keys(new_obj);
let values_obj = Object.values(new_obj);
let entries_obj = Object.entries(new_obj);
// let iter_obj = new_obj[Symbol.iterator](); NOT DEFINED !!!


let map_new = new Map();

map_new.set(['k', 2], ['v', 4]);
map_new.set({k: 'a'}, {v: 'b'});

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


// let iter_map = map_new[Symbol.iterator]();
// let item_map = iter_map.next();
//
// let kk_1 = map_new.keys();
// let kk_2 = map_new.keys();
// let iter_key = kk_1[Symbol.iterator]();
// let item_key = iter_key.next();
// let item = map_new.get(item_key);
