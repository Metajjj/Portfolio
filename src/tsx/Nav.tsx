//https://www.kindacode.com/article/react-typescript-handling-onclick-event load multiple via vite

function Nav() {

    //let NavElement = document.createElement(""); //Creating elements breaks Reacts?

    //onclick : decorate the clicked text, undecorate the rest - query(ul) , trigger the .tsx script

    return ( <>
            <div id="navTitle">
                Navy
            </div>

            <ul onClick={()=>window.location.href = '/'}>
                Home
            </ul>

            <ul onClick={()=>window.location.href = '/2'}>
                C#
            <svg height="50" width="50" viewBox="0 0 100 100">
                    //contentStyleType doesnt work! - auto converts tuple into semicolon-seperated string

                <path d="M 25,25 L 50,75 L 75,25 Z" style={{ fill: 'red', stroke: "#fff", strokeWidth: "3" }} />
                </svg>
            </ul>
            <ul onClick={()=>window.location.href = '/Python'}>
                Python
            </ul>
            <ul onClick={()=>window.location.href = '/PHP'}>
                PHP
            </ul>
            <ul onClick={()=>window.location.href = '/React'}>
                React
            </ul>
            <ul onClick={()=>window.location.href = '/FrontEnd'}>
                HTML/CSS/JS
            </ul>
            <ul onClick={()=>window.location.href = '/C++'}>
                C++
            </ul>
    </>)

}

//import React from 'react';
import ReactClient from 'react-dom/client';

ReactClient.createRoot(document.querySelector("nav")!).render(<Nav />);
                                            //Render the fragments as tags not as functions