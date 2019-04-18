// import avg from './some.js';
// require(src/some.js);
console.log(avg(3,6,9));
function sum(...numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}

function avg(...numbers){
    return sum(...numbers)/numbers.length;
}