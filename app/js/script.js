function cl(volume){
    console.log(volume)
};



var COLOR_GREEN = '#F00';
var admin,name;
name = 'Vasya';
admin = name ;
// console.log(admin);
// number n=12.56
// Infinity alert(1/0)
// NaN alert('not number'/7)
// sting 'My skript'
// bolean false true
// null
// undefined
// obj 
var user ={name:'Petya'};
// cl(typeof user);
// string to string only (+) :  1 + '2' -- '12'
// 2 - '1' -- 1
// 4/'2'  --  2
// var n = '12', surn = '34'
// n + surn  -- '1234'
// +n + +surn -- 46
var a = 1 , b = 2 , c = 3 - (a = b + 1);
cl('c = ' + c);
cl(5%2);
cl('2'>'1444');
cl(parseInt('11000', 2));
var n = 2;
cl(n.toString(2));
n = 9 ^ 35 ;
cl('9 ^ 35 = '+n);
cl(n.toString(2));
n = n ^ 35 ;
cl('n ^ 35 = '+n);