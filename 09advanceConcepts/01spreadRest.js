 //spread operater ...
 //JavaScript cannot add an array directly to a number.
//To fix this, you can use the spread operator (...) when passing arr to add, like this:
 
//While the rest operator collects values into an array, the spread operator expands an array into individual elements.


 function add(...args){
    //rest operater

    let sum=0;
    for (const i of args) {
        sum+=i
    }
    return sum;
 }

 var arr=[1,2,3,4,5];

 // spread operator
 console.log(add(...arr));
 