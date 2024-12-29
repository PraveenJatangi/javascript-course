const num= [1,2,3,4,5,6,7];

function result(arr){
    console.log(arr);

}
//push , add at the last 
num.push(8,9,0);
console.log(num);

//pop , removes at the last
num.pop();
console.log(num);

//shift , removes the first element and returns it 

const val=num.shift()
console.log("first value is removed ",num);
console.log(val);

//unshift, adds one or more to begining array

num.unshift(-1,-2,-3);
console.log(num);

//find, returns the first value of which satisfies the fun 

const foundNumber=num.find((number)=>{return number>5});
console.log(foundNumber);

//some, tests atlest one element passes conditons and returns true
const hasEven = num.some((number)=>number%2===0);
console.log(hasEven)

//every, opposite to some

const hasOdd = num.every((number)=>number>0);
console.log(hasOdd)

//sort , sorts array by converting into string using utf-16

num.sort();
console.log(num);

//includes, consists the specified value and return true
const Constains= num.includes(5);
console.log(Constains);

//slice, retruns a copy portions into new array with start and end

const slicedNum=num.slice(1,4);
console.log(slicedNum);

//map,create new array with result of calling every element

const mappedValues= num.map((number)=>number*2);
console.log(mappedValues)

//filter , creates new array , which passes the condition

const filtedValues= num.filter((number)=>number %2===0);
console.log(filtedValues);

//reducer, executes on every value in array , gives one value

const sum= num.reduce((total,num)=>total+num,0);
console.log(sum);

// forEach, provides fun once for each array element
num.forEach((number)=>console.log(number*2));

//indexof(), lastIndexOf() to get index values of a value

//reverse, to reverse the array
num.reverse();
result(num);

//join , joins all elements of array 

const joinStrings=num.join(',');
result(joinStrings);




