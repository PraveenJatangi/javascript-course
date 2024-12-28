
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable: true, enumerable: true});
Object.defineProperty(obj, "y", {value:3, writable:true,  enumerable: true});
Object.defineProperty(obj, "z", {value:4, writable:true,  enumerable: true});

let val = JSON.stringify(obj)
console.log(val);
//EEEEEEEEEEEEEEEEEEEEEEEEEE
let text="";
for (const x in obj ){
    text+= obj[x];
} 
console.log(text);

//EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
let value= Object.values(obj);
console.log(value);

//EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
let res="";
for( let [keys,value] of Object.entries(obj) ){
    res+= keys+":"+value+"\n";
}
console.log(res);





