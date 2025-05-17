//https://www.kindacode.com/article/react-typescript-handling-onclick-event load multiple via vite

export function Nav() {

    //let NavElement = document.createElement(""); //Creating elements breaks Reacts?

    //onclick : decorate the clicked text, undecorate the rest - query(ul) , trigger the .tsx script

    return ( <>
            <div id="navTitle">
                Navy
            </div>

        <ul id="Home" className="Home" onClick={e => PlatformClicked(e.currentTarget)}>
            Home
        </ul>

        <ul id="Desktop" onClick={e => PlatformClicked(e.currentTarget)}>
            Desktop
            <DDA />
        </ul>

        <ul className="Desktop" style={{ display: 'none' }}>
            {
                ["AdventOfCode", "Portfolio", "RecordShopMerge"].map(p =>
                (
                    <ul onClick={e => ProjectClicked(e.currentTarget)}>
                        {p}
                    </ul>
                )
                )
            }
        </ul>


        <ul id="Android" onClick={e => PlatformClicked(e.currentTarget)}>
            Android
            <DDA />
        </ul>

        <ul className="Android" style={{ display: 'none' }}>
            {
                ["ChessKillMobile", "RemindFul"].map(p =>
                (
                    <ul onClick={e => ProjectClicked(e.currentTarget)}>
                        {p}
                    </ul>
                )
                )
            }
        </ul>


        <ul id="Website" onClick={e => PlatformClicked(e.currentTarget)}>
            Website
            <DDA />
        </ul>

        <ul className="Website" style={{ display: 'none' }}>
            {
                ["BeatrootRestaurant", "ChatRoom","ImgFromImgs","Spreeview"].map(p =>
                (
                    <ul onClick={e => ProjectClicked(e.currentTarget)}>
                        {p}
                    </ul>
                )
                )
            }
        </ul>

    </>)
}

function PlatformClicked(e: HTMLElement) {
    //svg inside ul
    //console.log(e.children[0])
    if (e.innerText.toLowerCase().includes("home")) {
        document.title = e.innerText;
        ProjectClicked(e);
        return;
    }

                                    //Need to cast with 'as' 
    let svg: SVGElement = e.children[0] as SVGElement;

    if (svg.style.rotate.includes("9")) {
        //closed
        svg.style.rotate = "";

        document.querySelector(`ul[class=${e.id}]`)!.setAttribute("style","display:none;");
    } else {
        //opened
        svg.style.rotate = "90deg";

        document.querySelector(`ul[class=${e.id}]`)!.removeAttribute("style");
    }
}

function ProjectClicked(e:  HTMLElement) {
    //Bolden, unbolden the others - run RESTful APIS to gh
    //implement event callback!
    (document.querySelector(".PageTitle")! as HTMLElement).innerText = e.innerText + " page";
    document.title = e.innerText;

    for (let x of document.querySelectorAll("ul[class]")) {
        for (let X of x.children) {
            (X as HTMLElement).style.fontStyle = "normal"
        }
    }

    e.style.fontStyle = "italic";

    //document.querySelector("article")!.setAttribute("Project", e.innerText)
    ReactClient.hydrateRoot(document.getElementById("MainContent")!, <Article Project={e.innerText} />);
    //TODO semi-works
}

import ReactClient from 'react-dom/client';
import DDA from './DropDownArrow';
import Article from './Article';

//ReactClient.createRoot(document.querySelector("nav")!).render(<Nav />);
                                            //Render the fragments as tags not as functions