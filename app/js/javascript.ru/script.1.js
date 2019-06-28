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

// function showPrime(n){
//     for(var i=2 ; i<n ; i++){
//         if(!isPrime(i)) continue;
//         col(i);
//     }
// }

// function isPrime(n){
//     for (var i=2 ; i<n ; i++){
//         if ( n%i == 0) return false;
//     }
//     return true;
// }

// showPrime(12);
// col(isPrime(4));

/**
 * Возвращает простые чила до n в консоль
 * @param  {} n
 */
// function showPrime(n){
//     Next: for(var i=2 ; i<=n ; i++ ){
//         /*if [i] is prime => col(i) continue Next;*/
//         for(var j=2 ; j<i ; j++){
//             if( i%j == 0 ) continue Next;
//         }
//         col(i);
//     }
// }
// showPrime(20);

/*
\b	Backspace
\f	Form feed
\n	New line
\r	Carriage return
\t	Tab */

// col('rtaerc'.length);
// col('frvcwqe'.charAt(2));
// col('vdfvse'[1]);
// if(~'rycqweqw'.indexOf('fc')) {col('Bingoo');}
//     else col('O noo');
// col('rycqweqw'.indexOf('yc', 4));

 var str = 'rfr0000frfrf' , serch = 'fr';
// var pos = 0 , z = 1 , arrPos = [];
// while(z){
//     foundPos = str.indexOf(targ , pos);
//     if(foundPos == -1) break;
//     col(foundPos);
//     pos = foundPos +1;
// }
// var pos = -1;
// while((pos = str.indexOf(targ , pos+1)) !== -1){
//     col(pos);
// }
/**
 * Выдает подстроку от и до не включая
 * @param  {} 0
 * @param  {} 2
 */
// 'sacvae'.substring(0,2);

/**
 * Выдает подстроку от и до конца
 * @param  {} 'sacvae'.substring(2
 */
// col('sacvae'.substring(2));

// function allPos(str , serch){
//     var pos = -1;
//     while(( pos = str.indexOf(serch , pos+1)) !== -1 ){
//         col(pos);
//     }
// }
// allPos(str , serch);

// col(parseInt('100',3));
// var n = 8;
// nt = n.toString(2);
// col(typeof nt);
// col(~'cadfcf'.indexOf('co'));
// col(String.fromCharCode(1072));

// var str_ ='';
// for (var i = 1; i<2000 ; i++){
//     str_ +=i +' '+ String.fromCharCode(i) + '\n';
// }
// col(str_);


// var bol,a = 2,b = 4,c = 8,d = 16;
// bol = a | b | c | d;
// col(bol & a);

// col(a = 3^5);
// col(a^5);

// var ob = new Object();
// var ob_1 = {
//     prop_3 : 'property 3'
// };
// ob_1.prop_1 = 'property 1';
// ob_1.prop_2 = 'prooerty 2';
// ob_1.meth_1 = function run(){

// };
// col(ob_1['prop_1']);
// col(ob_1);
// delete ob_1.prop_2;
// col(ob_1);
// if('prop_' in ob_1){
//     col('property is present');
// } else {
//     col('property is\'t\n present');
// }

// user = {
//     name :'',
//     surname :'',
//     age :''

// };
// user.name = 'Vasya';
// user.surname = 'Petrov';
// col(user);
// user.name = 'Yura';
// delete user.surname;
// col(user);
// for (var key in user){
//     col('KEY: ' + key + ' VALUE: ' + user[key]);
// }

// function volOfProp(obj){
//     count = 0 ;
//     for (var key in obj){
//         count++;
//     }
//     return count;
// }
// col(volOfProp(user));

// function isEmpty(obj){
//     return volOfProp(obj)?false:true;
// }
// var user_1 = {};
// col(isEmpty(user_1));

// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 'tyu'
//   };

// function sumSalar(obj){
//     sum = 0;
//     if(isEmpty(obj)){
//         col('Is EMPTY');
//     }
//     else{
//         for(var key in obj){
//         sum +=obj[key];
//         }
//     return sum;
//     }
// }
// // salaries = {};
// col(sumSalar(salaries));

// var n = 87;
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//   }
//   col(isNumeric(n));

// function multyplayNumProp(obj){
//     for (var key in obj){
//         if (isNumeric(obj[key])) {
//             col(obj[key]);
//             obj[key] = obj[key] *2;
//             col(obj[key]);
//         }
//     }
 
// }
// multyplayNumProp(salaries);
// col(salaries);

var fruits = ["Яблоко", "Апельсин", "Слива"];
col(fruits);
col(fruits.pop());
col(fruits);
fruits.push('Tyckva');
col(fruits);