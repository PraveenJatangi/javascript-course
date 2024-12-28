// {function add(a,b){
//     "use strict";
//     console.log(a,b);
//     a=100;
//     b=200;
//     //return arguments[0]+arguments[1];
//     return a+b;
// }
// }
// console.log(add(300,400));
// console.log("hello")

// const arr=[1,2,3,4,5,6];

// function fil(numberM){
//      return numberM>4;
// }
// const val= arr.find(fil);
// console.log(val);

"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:true});

obj.x = 3.14;

console.log(obj.x);
