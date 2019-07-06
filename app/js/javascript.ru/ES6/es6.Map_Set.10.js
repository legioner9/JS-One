/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
'us strict';


let map = new Map([
    ['огурцов', '500 гр'],
    ['помидоров', '350 гр'],
    ['сметаны', '50 гр']
]);


// col(map.get('огурцов'));
//
// col(map.keys());
// col(map.entries());
// col(map.size)


class Using {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Binding {
    constructor(id) {
        this.id = id;
    }

    call_id() {
        col(this.id);
    }
}

let map_collectiv = new Map();
// map_collectiv.set(new Binding('1') , new Using('Ivanov' , 33));
for (let i = 33; i < 38; i++) {
    map_collectiv.set(new Binding((i - 32)), new Using(`Ivanov ${i}`, i));
}
let arr_map_collectiv = [];
for (let key of map_collectiv.keys()) {
    arr_map_collectiv.push({key: key, volume: map_collectiv.get(key)});
}
// for(let volum of map_collectiv.values())
//     col(volum)
// for(let evol of map_collectiv){
//
// }
debugger;
// Map.prototype.__my_MapToArr = function () {
//     this.res__my_MapToArr = []
//     let arr = this.res__my_MapToArr;
//     for (let key of this.keys()) {
//         arr.push({key : key , volume : this.get(key)})
//     }
// }
map_collectiv = new Object();
map_collectiv.__my_MapToArr();
let mapping = new Map();
mapping.set(new Map(), new Map());