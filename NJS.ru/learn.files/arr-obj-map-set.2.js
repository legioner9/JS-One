/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let map_new = new Map();

map_new.set(['k', 2], ['v', 4]);
map_new.set({k: 'a'}, {v: 'b'});
let $map_new = map_new._$();

let map_new_similar = $map_new.Copy();
let bol_map = map_new == map_new_similar

let en = $map_new.Entres;

let map_new_2 = new Map();

let obj_a = {
    k1: 'v1',
    k2: ['v2'],
    k3: {'v3': 'vlume'},
}

let obj_a_similar = obj_a._$().Copy();
let bol_ob = obj_a_similar == obj_a


let map_a = new Map(Object.entries(obj_a));
let obj_similar_a = Object.fromEntries(map_a._$().Entres);
let copy_map_a = new Map(map_a._$().Entres);
col(map_a == copy_map_a);

let new_set = new Set();
new_set.add({name: "John"});
let $new_set = new_set._$();

let new_set_similar = $new_set.Copy();
let bol_set = new_set == new_set_similar;

let new_set_enr = $new_set.Entres;

let arr_new = [1, 4, 5];
debugger;
let arr_new_similar = [].splice(0, 0, arr_new);
arr_new_similar = arr_new._$().Copy();
let bol_arr = arr_new == arr_new_similar;
let ke = map_new._$().Entres;
let h_1 = map_new.has(ke[0]);
map_new.delete(ke[0]);
let v_1 = map_new.get(ke[1]);
let v_0 = map_new.clear();


