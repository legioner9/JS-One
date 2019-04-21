// import { isPromiseAlike } from "q";

// import { isPromise } from "q";

function col(volume){
    console.log(volume);
}
function isInt(volume){
    return (volume === (volume ^0));

}


// col('ruiop66'.length);
// var t = 66;
// col(t+5);
// var f = function rits(name){
//     var z = 5;
//     col(rits);
// };

// f();
// var g = f;
// f = null;
// col(g);
// var na = prompt('you name is ...','you name');
// col(na);
// col(confirm('message'));

// console.dir(document.head);
// console.dirxml(document);

function showPrime(n){
    for(var i=2 ; i<n ; i++){
        if(!isPrime(i)) continue;
        col(i);
    }
}

function isPrime(n){
    for (var i=2 ; i<n ; i++){
        if ( n%i == 0) return false;
    }
    return true;
}

// showPrime(12);
col(isPrime(4));
