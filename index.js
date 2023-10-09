let cards=document.querySelectorAll(".card")
console.log(cards);
let isfliped=false;
let firstcard;
let secard;
cards.forEach(function(card){card.addEventListener('click',flip)})

function flip(){
  
  this.classList.add('flip')
  if(!isfliped){
    firstcard=this
    isfliped=true
  }
  else{
    secard=this
    checkIt()
  }
}

function checkIt (){
    
    console.log("comp....");
    if(firstcard.dataset.image===secard.dataset.image){
        pass()

    }
    else{
        secard.classList.remove("filp")
        fail()
    }
}
function pass(){
firstcard.removeEventListener("click", flip);
  secard.removeEventListener("click", flip);
  reset();
}

function fail(){
    setTimeout(() => {
        firstcard.classList.remove("flip");
        secard.classList.remove("flip");
        reset();
      }, 1000);
}

function reset() {
    isfliped = false;
    firstcard = null;
    secard = null;
  }
  
