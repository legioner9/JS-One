/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

// {DEC: 8230, HEX: "2026", SIMV: "…"}

let __my_unicodArr_ = [];
for (let i = 0; i < 10000; i++) {
    __my_unicodArr_.push(
        {
            DEC: i,
            HEX: i.toString(16),
            SIMV: String.fromCodePoint(i),
        }
    )
}
let __my_serchUncodeSimv_ = simv => __my_unicodArr.filter(a => a.SIMV == simv)
let __my_serchUncodeFromTo_ = (a, b) => __my_unicodArr.slice(a - 1, b - 1)