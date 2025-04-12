function spawnRanStar() {



    let ranX = Math.floor(Math.random() * 99 + 1);
    let nova = document.createElement("div");
    nova.classList.add("star");
    //inherits most styles from css

    console.log(typeof parseFloat(window.getComputedStyle(document.body).width.slice(0, -2)));

    nova.style.left = (parseFloat(window.getComputedStyle(document.body).width.slice(0, -2)) * (ranX / 100))
        + "px";
    //Random percentage move
    nova.style.animationDelay = Math.random() * 5 + "s";
    nova.style.animationDuration = Math.random() * 5 + 1 + "s";

    nova.style.zIndex = "-5";

    document.body.appendChild(nova);
}

import React, { useEffect } from 'react';
import './Stars.css';

function CV() {
    
    //useEffect = run JS as its loaded
    useEffect(() => {
        let footer = document.querySelector("footer");
        if (footer != undefined) {
            footer.style.marginLeft = parseFloat(window.getComputedStyle(document.body).width.slice(0, -2)) / 2 -
                parseFloat(window.getComputedStyle(footer).width.slice(0, -2)) / 2 + "px";
        }

        spawnRanStar();
        spawnRanStar();
        spawnRanStar();
        spawnRanStar();
        spawnRanStar();
    },[]);

    return (
        <>
            <h1 className="PageTitle">Home page</h1>                    

            <footer>
                    <div id="marquee">
                        footer links
                    </div>
                </footer>
        </>
    )
}

export default CV;