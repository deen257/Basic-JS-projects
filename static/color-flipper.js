document.addEventListener("DOMContentLoaded", function() {
    const colors= ["green", "red", "rgba(133,122,200)", "#f1f5025" ];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");

    btn.addEventListener("click", () => {
        // select colour dfrom color array between 0-3
        const RandonNumber = getRandomNumber()
        document.body.style.backgroundColor = colors[RandonNumber];
        color.innerHTML= colors[RandonNumber];
    })
})

function getRandomNumber(){
    return Math.floor(Math.random()* 3);
}