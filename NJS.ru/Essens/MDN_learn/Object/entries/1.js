/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

let ob = {1: 1, a: 'aa', b: ['bb'], c: {d: 'd'}};
let en_ob = Object.entries(ob);
for (const obEl of en_ob) {
  col(`key = ${obEl[0]} , value = ${obEl[1]} `);
}

debugger;
