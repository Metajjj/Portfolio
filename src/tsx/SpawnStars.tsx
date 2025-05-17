function spawnRanStar( duration:Number ) {
    let ranX = Math.floor(Math.random() * 99 + 1);
    let nova = document.createElement("div");
    nova.classList.add("star");
    //inherits most styles from css

    nova.style.left = (parseFloat(window.getComputedStyle(document.body).width.slice(0, -2)) * (ranX / 100))
        + "px";
    //Random percentage move
    
    nova.style.animationDuration = duration + "s";

    nova.style.zIndex = "-5";

    return nova;
    //document.body.appendChild(nova);
}


function maintainStar() {
    let lifeSpan = Math.random() * 4 + 1;

    let nova = spawnRanStar(lifeSpan);
    document.body.appendChild(nova);
    setTimeout(() => {
        document.body.removeChild(nova);        
        maintainStar();
    }, lifeSpan * 1000 * 5);

}


for (let i = 0; i < 5; i++) {
    maintainStar();
}
