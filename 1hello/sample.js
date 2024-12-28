 // Global Variable

 

// function myFunction() {
//     console.log("Inside myFunction - Type of petName:", typeof petName);
//     console.log("Inside myFunction - petName:", petName);
// }
// let petName = "Rocky";
// myFunction();
// console.log("Outside myFunction - Type of petName:", typeof petName);
// console.log("Outside myFunction - petName:", petName);

  
  
  const isPalindrome=function(str) { 

    return str === str.split("").reverse().join(""); 
    
  }
  let str="goog";
  console.log(isPalindrome(str));
