var isEven= (number)=>{
    // if(number%2===0){
    //     return true;
    // }
    // return false;
    return number % 2===0;

}
console.log(isEven(3));

var result=[2,4].every((e)=>( e%2===0));
console.log(result);