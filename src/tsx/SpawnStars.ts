function spawnRanStar(duration: Number) {
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
        try { document.body.removeChild(nova); }
        catch (Ex) { return; /* end early and dont continue if cant remove child star */ }
        maintainStar();
    }, lifeSpan * 1000 * 5);

}

function SpawnStars() {
    for (let i = 0; i < 5; i++) {
        maintainStar();
    }
}
export default SpawnStars;