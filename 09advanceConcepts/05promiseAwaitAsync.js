const one=()=>{
   return"i am one";
};
const two= ()=>{
   return new Promise((reslove,reject)=>{
    setTimeout(()=>{
           reslove( "i am two");
    },3000);
   })
  
};
const three=()=>{
    return "i am three";
}

const all= async ()=>{
    let valOne=one();
    console.log(valOne);

    let valTwo= await two();
    console.log(valTwo);

    let valThree= three();
    console.log(valThree);
}
// one();
// two();
// three();
 all();
