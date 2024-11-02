const cards=document.querySelectorAll(".card")
const message = document.getElementById("message");
// console.log(cards);
//variables
var isFlipped= false;
var  firstCard;
var secondCard;


cards.forEach((card)=>card.addEventListener("click",flip));

function flip(){
// console.log("card flipped");
  this.classList.add("flip");
  if(!isFlipped){
    isFlipped=true ;
    firstCard=this;
  } 
  else  {
    secondCard=this; 
    console.log(firstCard);
    console.log(secondCard);
    
    checkIt();
  }
}

function success(){
firstCard.removeEventListener("click",flip);
secondCard.removeEventListener("click",flip);
showMessage("You are successful!", "success");
}

function fail(){

  // console.log("fail....");
setTimeout(()=>{

  firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
  reset();
},500)
}


function reset( ){
   isFlipped= false;
    firstCard=null;
   secondCard=null;
}

function checkIt(){
if((firstCard.dataset.image)===(secondCard.dataset.image)){
  success();
}
else{
  fail();
}
}

(function shuffle(){
  cards.forEach((card)=>{
    var index=Math.floor(Math.random()*16);
    card.style.order=index;
  });
})();

function showMessage(text, type) {
  message.textContent = text;
  message.classList.add("text-" + type);
  message.style.opacity = 10;

  setTimeout(() => {
    message.style.opacity = 0; // Fade out after 2 seconds
  }, 2000);
}