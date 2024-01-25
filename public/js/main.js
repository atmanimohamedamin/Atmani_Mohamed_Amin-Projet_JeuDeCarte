let cards = document.querySelectorAll(".flip-card")
let flippedCards =[]


function randomCards() {
    cards.forEach(element => {
        let random = Math.floor(Math.random() * cards.length);
        element.style.order = random
    });
}
randomCards();

cards.forEach(element => {
    element.addEventListener("click", flipCard);
});
    

function flipCard() {
    if (this.classList.contains("flipped") || flippedCards.length == 2)  {
        return;
    }
    this.classList.add("flipped");

    flippedCards.push(this);

    if (flippedCards.length == 2 ) {
        if (flippedCards[0].querySelector("img").src ==
           flippedCards[1].querySelector("img").src){
            flippedCards = []
           } else{
                setTimeout(() =>{
                flippedCards.forEach(element => 
                element.classList.remove("flipped"));
                flippedCards = []
                },1000);
        };
    }
}

