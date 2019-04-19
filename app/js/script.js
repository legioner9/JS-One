function cl(volume){
    console.log(volume);
}
function isInt(volume){
    return (volume === (volume ^0));

}


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
// var user ={name:'Petya'};
// cl(typeof user);
// string to string only (+) :  1 + '2' -- '12'
// 2 - '1' -- 1
// 4/'2'  --  2
// var n = '12', surn = '34'
// n + surn  -- '1234'
// +n + +surn -- 46
// var a = 1 , b = 2 , c = 3 - (a = b + 1);
// cl('c = ' + c);
// cl(5%2);
// cl('2'>'1444');
// cl(parseInt('11000', 2));
// var n = 2;
// cl(n.toString(2));
// n = 9 ^ 35 ;
// cl('9 ^ 35 = '+n);
// cl(n.toString(2));
// n = n ^ 35 ;
// cl('n ^ 35 = '+n);
// ПРАВА ДОСТУПА
// var ASS_ADMIN = 1 , ASS_EDITOR = 2 , ASS_USER = 4 ;
// var guest = ASS_USER;
// var ei = guest|ASS_EDITOR;
// var ri = ri|ASS_ADMIN;
// cl(ri);
// cl(ei & ASS_EDITOR); не ноль и хорошо
// cl(ei & ASS_ADMIN);  ноль и нет доступа
// cl(ri & ASS_ADMIN); не ноль и хорошо
// ОКРУГЛЕНИЕ
// cl(45*10.1^0);
// // ~n = -(n+1); проверка на -1
// var str = 'Dublin';
// cl(~str.indexOf('blin'));// if(~__.indexOf)  --  if find;
// cl(isInt(4.5));
// cl((4.5^0) === 4.5);
// var res_promt = prompt('enter volume', 'your volume');
// cl(res_promt);
// var bolean_res = confirm("message");
// cl(bolean_res);
// var qest = prompt('what is my name&', 'Vasya?');
// if(qest==='Toly'){
//     cl('YEES!!!');
// }else if(qest===null){
//     cl('end of enter(((');
// }else cl('WHF?');
// cl(0&&1);
// cl(1||1);
// cl(!!'string');
// cl(alert('f'));
// cl(alert(1)&&alert(2));
// cl(alert(1)||alert(2));
// for(var i=0;i<3;i++){
//     cl(i);
// }
// Prompt number summ this
// outer_name:for(var j=0;j<5;j++){
    
//     sum =0;
// var z=1;
// while(z){
//     var value = +prompt('enter number',"number");
//     if(!value) break outer_name;
//     alert('you enter ' + value);
    
//     sum +=value;
// }
// cl('sum = '+ sum);
// break;
//  }
// cl('sum = '+ sum);
// EVEN number njt ODD
// for(var i=0;i<12;i++){
//     if(i%2!==0) continue;
//     cl(i);
// }
// var key = +prompt('enter key',"number");
// switch (key) {
//     case 1:
//         cl(key);
//         // eslint-disable-next-line no-fallthrough
        
//         case 2:
//         cl(key);
//         break;

//     default:cl('e mae');
//         break;
// }
// var key_1 = +prompt('enter key',"number");
// switch (key_1) {
//     case 0:
//         cl(key_1) ;
//         break;
//     case 1:       
//         cl(key_1) ;
//         break;
//     case 2: 
//     case 3:      
//         cl('2,3') ;
//         break;

//     default:
//         break;
// }
function pow(x,n){
    var pownn = x;
    for (var i = 1 ; i < n ; i++) {
        pownn *=x;
    }
    return pownn;
}
// var stepo = pown;
// cl(stepo(2,4));

// var dics = function(){
//     cl(2);
// };

// var age = 99;
// var sayLi = (age>=18) ? function(){cl('ok');}:function(){cl('not enter');};
// sayLi();

// function ask(vopr, yes, no) {
//     if (confirm(vopr)) yes()
//     else no();
//   }
// function f_yes(){
//     cl('1');
// }

// function f_no(){
//     cl('2');
// }

// ask('777',f_yes,f_no);
// var sum = new Function('a,b', ' return a+b; ');
// cl(sum(2,6));
// function pw(x,n){
//     if(n!=1){
//         return x*pw(x,n-1);
//     } else {
//         return x;
//     }
// }
// cl(pw(2,5));

// function sumTo(n){
//     if(n==1) return 1;
//     else return n+sumTo(n-1);
    
// }

// function sumTo(n){
//     su = 0;
//     for(var i = 1 ; i < n+1 ; i++){
//         su += i;
//     }
//     return su;
// }

// function fact(n){
//     if(n == 1) return 1;
//     else return n*fact(n-1);
// }

// function fib(n){
//     f1 = 0;
//     f2 = 1;
//     if(n==0) return 1;
//     else{
        
//         for(var i=0; i<n ; i++){
//             s2 = f1+f2;
//             s1 = f2;

//             f1 = s1;
//             f2 = s2;
//         }
//         return f2;
//     }
// }
// cl(fib(3));

// var f = function go_(){
//     alert (go_);
// };
// f();

cl(pow(2,3));

describe("pow" , function(){
    it("N pow") , function(){
        assert.equal(pow(2,3),8);
    };
});