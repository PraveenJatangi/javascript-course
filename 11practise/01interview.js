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


// const obj = {};
// Object.defineProperty(obj, "x", {value:0, writable:false});

// obj.x = 3.14;

// console.log(obj.x);

// console.log(name);
// var name;

// var a=5;
// let b=10;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);
// console.log(""==0);

// const a={};
// const b={val:"b"};
// const c={val:"c"};

// a[b]=100;
// a[c]=200;
// console.log(a[b]);

// //clousers

// function main(){
//     let name="aman";
//     function innerMain(){
//         console.log(name);
//     }
//     innerMain();
// }
// main();
// a=10;

// let a;
// console.log(a);

// 011235

// function febbonoci(n){
 
//      let first=0,second= 1,next;
//      for(let i=0;i<=n;i++){
//         console.log(first+"");
//         next= first+second;
//         first=second;
//         second=next;
//      }
     
// }
// febbonoci(5);

// function sum(a){
//      return function(b){
//         if(!b){
//             return a
//         }
//         return sum(a+b)
//      }
// }
// console.log(sum(1)(2)(3)(4)());

let hashMap = new Map();

hashMap.set("apple", 5);
hashMap.set("banana", 2);
hashMap.set("orange", 3);

console.log(hashMap.get("apple"));
console.log(hashMap); 