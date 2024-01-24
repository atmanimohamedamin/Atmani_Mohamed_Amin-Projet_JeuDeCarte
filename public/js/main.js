let cards = document.querySelectorAll(".flip-card")

cards.forEach(element => {
    element.addEventListener("click", () =>{
        element.classList.toggle("flipped");
    })
});

