/*
*****
*****
*****
*****
*****
 */
function loop1(num){
  for(let i=0; i<num;i++){
    let row="";
    for(let j=0;j<num;j++ ){
     row+="*";
      }
      console.log(row);
      
  }
};

/*
1
12
123
1234
 */
const loop2=function (num){
  for(let i=1; i<num;i++){
    let row="";
    for(let j=1;j<=i;j++ ){
     row+=j;
      }
      console.log(row);
      
  }
};

// 1
// 22
// 333
// 4444

const loop3 = (num)=>{
  for(let i=1; i<num;i++){
    let row="";
    for(let j=1;j<=i;j++ ){
     row+=i;
      }
      console.log(row);
      
  }
};

// *****
// ****
// ***
// **
// *
const loop4 = (num)=>{
  for(let i=0; i<num;i++){
    let row="";
    for(let j=0;j<num-i;j++ ){
     row+="*";
      }
      console.log(row);
      
  }
};

// 12345
// 1234
// 123
// 12
// 1

const loop5 = (num)=>{
  for(let i=0; i<num;i++){
    let row="";
    for(let j=1;j<=num-i;j++ ){
     row+=j;
      }
      console.log(row);
      
  }
};

// *********
//  *******
//   *****
//    ***
//     *
    
function loop6(num){
  for(let i=0; i<num;i++){
    let row="";
   
    for (let k=0;k<i;k++){
      row+=" ";
    }
  
    for(let j=0;j<=2*(num-i-1);j++ ){
     row+="*";
      }
  
   for (let k=0;k<i;k++){
        row+=" ";
      }

      console.log(row);
      
  }
};

//     *
//    * *
//   *   *
//  *     *
// *********
// *********
//  *     *
//   *   *
//    * *
//     *
function loop7(num){
  for(let i=0; i<num;i++){
    let row="";
   
    for (let k=0;k<num-i-1;k++){
      row+=" ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j === 0 || j === 2 * i || i === num - 1) {
        row += "*"; // First, last, and bottom row filled
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
  for(let i=0; i<num;i++){
    let row="";
   
    for (let k=0;k<i;k++){
      row+=" ";
    }
  
    for(let j=0;j<=2*(num-i-1);j++ ){
      if (j === 0 || j === 2*(num-i-1)  || i === 0 ) {
        row += "*"; // First, last, and bottom row filled
      } else {
        row += " ";
      }
      }
  
   

      console.log(row);
      
  }
};

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

const loop8= (num)=>{
  for(let i=1;i<=2*num-1;i++){
    let row="";
    let start=i;
    if(i>num){start= 2*num-i}
    for(let j=1;j<=start;j++){
      row+="*";
    }
    console.log(row);
  }

}

// 1
// 01
// 101
// 0101
// 10101

function loop9(num){

  for (let i=1;i<=num;i++){
    let row="";
    for(let j=1;j<=i;j++){
      if((i+j)%2===0){
      row+="1"}
      else{
        row+="0"
      }
    }
    console.log(row);
  }
}

// 1       1
// 12     21
// 123   321
// 1234 4321
// 1234554321

const loop10=(num)=>{

  for (let i=1;i<=num;i++){
    let row="";
    for (let j=1;j<=i;j++){
      row+=j;
    }
    for(let k=1;k<2*num-2*i;k++){
      row+=" ";
    }
    for (let j=i;j>=1;j--){
      row+=j;
    }
    console.log(row);


}
}

// 1
// 23
// 456
// 78910
// 1112131415

function loop11(num){

  let count=1;
  for (let i=1;i<=num;i++){
    let row="";
    for (let j=1;j<=i;j++){
      row+=count; 
      count++; 
    }
    console.log(row);
  }
}

// A
// AB
// ABC
// ABCD
// ABCDE
// ABCDE
// ABCD
// ABC
// AB
// A
function loop12(num){

  
  for (let i=1;i<=num;i++){
    let row="";
    for ( let j=0;j<i;j++){
      row+=String.fromCharCode(65 + j)}
    console.log(row);
  }
}

// ABCDE
// ABCD
// ABC
// AB
// A
function loop13(num){

  
  for (let i=0;i<num;i++){
    let row="";
    for ( let j=0;j<num-i;j++){
      row+=String.fromCharCode(65 + j)}
    console.log(row);
  }
}
// A
// BB
// CCC
// DDDD
// EEEEE
function loop14(num){

  
  for (let i=0;i<num;i++){
    let row="";
    for ( let j=0;j<=i;j++){
      row+=String.fromCharCode(65 + i)}
    console.log(row);
  }
}
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
function loop15(num){
  for (let i=0;i<num;i++){
    let row="";
    for (let space=0;space<num-i-1;space++){
      row+=" ";
    }
    for (let k=0;k<2*i+1;k++){
      
      let charCode= k<=i? 65+k: 65+(2*i-k);

      row+=String.fromCharCode(charCode)
      }
    console.log(row);
  }
}

// F
// EF
// DEF
// CDEF
// BCDEF

function loop16(num){
 
  for(let i=num;i>0;i--){
    let row="";
    for(j=i;j<=num;j++){
       row+=String.fromCharCode(65+j)
    }
    console.log(row)
  }
}
/*
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
********** */
function loop17(num){
  for(let i=0;i<num;i++){
    let row="";
  for(let j=num;j>i;j--){
  row+="*";
  }
  for (let s=0;s<2*i;s++){
    row+=" ";
  }
  for(let j=num;j>i;j--){
    row+="*";
    }
  
    console.log(row);
  }

  for(let i=0;i<num;i++){
    let row="";
  for(let j=0;j<=i;j++){
  row+="*";
  }
  for (let s=0;s<2*num-((2*i)+2);s++){
    row+=" ";
  }
  for(let j=0;j<=i;j++){
    row+="*";
    }
  
    console.log(row);
  }
}


/*
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
 */
function loop18(num){
  for(let i=0;i<2*num-1;i++){
    let row="";
    let stars=i
    if(i> num-1)
      {stars=2*num-(i+2)};
    for(let j=0;j<=stars;j++){
      row+="*";
    }
    for (let s=0;s<2*num-(2*stars+2);s++){
      row+=" "
    }
    for(let j=0;j<=stars;j++){
      row+="*";
    }
    
  console.log(row);
}
}



loop14(5);


