//https://www.kindacode.com/article/react-typescript-handling-onclick-event load multiple via vite

function Nav() {

    //let NavElement = document.createElement(""); //Creating elements breaks Reacts?

    //onclick : decorate the clicked text, undecorate the rest - query(ul) , trigger the .tsx script

    return ( <>
            <div id="navTitle">
                Navy
            </div>

        <ul id="Home" onClick={e => PlatformClicked(e.currentTarget)}>
            Home
        </ul>

        <ul id="Desktop" onClick={e => PlatformClicked(e.currentTarget)}>
            Desktop
            <DDA />
        </ul>

        <ul className="Desktop" style={{ display: 'none' }}>
            <ul onClick={e => ProjectClicked(e)}>
                AdventOfCode
            </ul>
            <ul onClick={e => ProjectClicked(e)}>
                Portfolio
            </ul>
            <ul onClick={e => ProjectClicked(e)}>
                RecordShopMerged
            </ul>
        </ul>


        <ul id="Android" onClick={e => PlatformClicked(e.currentTarget)}>
            Android
            <DDA />
        </ul>

        <ul className="Android" style={{ display: 'none' }}>
            <ul onClick={e => ProjectClicked(e)}>
                ChessKillMobile
            </ul>
            <ul onClick={e => ProjectClicked(e)}>
                RemindFul
            </ul>
        </ul>


        <ul id="Website" onClick={e => PlatformClicked(e.currentTarget)}>
            Website
            <DDA />
        </ul>
        <ul className="Website" style={{ display: 'none' }}>
            <ul onClick={e => ProjectClicked(e)}>
                BeatrootRestaurant
            </ul>
            <ul onClick={e => ProjectClicked(e)}>
                ChatRoom
            </ul>
            <ul onClick={e => ProjectClicked(e)}>
                ImgFromImgs
            </ul>
        </ul>

    </>)
}

function PlatformClicked(e: HTMLElement) {
    //svg inside ul
    //console.log(e.children[0])

                                    //Need to cast with 'as' 
    let svg: SVGElement = e.children[0] as SVGElement;

    if (svg.style.rotate.includes("9")) {
        //opened
        svg.style.rotate = "";

        document.querySelector(`ul[class=${e.id}]`)!.setAttribute("style","display:none;");
    } else {
        //closed
        svg.style.rotate = "90deg";

        document.querySelector(`ul[class=${e.id}]`)!.removeAttribute("style");
    }
}
function ProjectClicked(e: HTMLElement) {
    //Bolden, unbolden the others - run RESTful APIS to gh
    //implement event callback!
    document.title = (new HTMLTitleElement().title = e.innerText);
    console.log("clicked: " + e.innerText)
}

import React from 'react';
import ReactClient from 'react-dom/client';
import DDA from './DropDownArrow';

ReactClient.createRoot(document.querySelector("nav")!).render(<Nav />);
                                            //Render the fragments as tags not as functions