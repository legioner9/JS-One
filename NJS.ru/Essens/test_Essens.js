//=========================Array

let arr = [1, 2, 4, 'a', ['b'], {c: 'c'}];
col(arr._$());
let $arr = arr._$();
debugger;

let arr_splise = arr._$().Copy();
arr_splise._$().Splice(0, 1, ['ins']);

let arr_copy = arr._$().Copy();
let arr_sl = arr_copy._$().Slice(1, 4);

let arr_clear = arr._$().Copy();
arr_clear._$().Clear();

//=========================String
let str = 'vfdsbg';
debugger;
str[0] = undefined;
col(str._$());

let str_splise = str._$().Copy();
str_splise._$().Splice(0, 1, 'ins');

let str_copy = str._$().Copy();
let str_copy_string = str_copy.toString();
let str_copy_new = new String(str_copy);
let str_sl = arr_copy._$().Slice(1, 4);

let str_clear = arr._$().Copy();
str_clear._$().Clear();

debugger;

//=========================Object
let obj = {1: 1, 2: 2, 4: 4}
obj.splice(0);
let $obj = arr._$();
$obj.Splice(0, 1, ['ins']);
let obj_sl = $obj.Slice(1, 4);
let obj_similar = $obj.Copy();
obj_similar._$().Clear();
debugger;

//=========================Map
let map = [1, 2, 4, 'a', ['b'], {c: 'c'}];
map.splice(0);
let $map = arr._$();
$map.Splice(0, 1, ['ins']);
let map_sl = $map.Slice(1, 4);
let map_similar = $map.Copy();
map_similar._$().Clear();
debugger;

//=========================Set
let set = [1, 2, 4, 'a', ['b'], {c: 'c'}];
set.splice(0);
let $set = set._$();
$set.Splice(0, 1, ['ins']);
let set_sl = $set.Slice(1, 4);
let set_similar = $set.Copy();
set_similar._$().Clear();
debugger;


