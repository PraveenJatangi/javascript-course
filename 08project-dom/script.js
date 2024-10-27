const course=[
    {
      name:"compelete reactjs course",
        price:"2.3 "
    },
    {
        name:"compelete java course",
        price:"7.3 "
    },
    {
        name:"compelete nodejs course",
        price:"4.3 "
    },
    {
        name:"compelete express course",
        price:"1.3 "
    }
];

function generateList(){
   const ul=document.querySelector(".list-group");
   ul.innerHTML="";
   course.forEach((course)=>{

     const li=document.createElement("li")
     li.classList.add ("list-group-item")

     const name= document.createTextNode(course.name)
     li.appendChild(name)


    const span=document.createElement("span")
    span.classList.add("float-right")

     const price=document.createTextNode("$"+course.price)
     span.appendChild(price)

     li.appendChild(span)
     ul.appendChild(li)

   })


}
generateList();

var button=document.querySelector(".btn")

button.addEventListener("click",()=>{
    course.sort((a,b)=>(a.price-b.price));
    generateList();

})
var button=document.querySelector(".btm")

button.addEventListener("click",()=>{
    course.sort((a,b)=>(b.price-a.price));
    generateList();

})