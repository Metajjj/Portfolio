import SpawnStars from './SpawnStars';

function Body() {
    useEffect(() => {
        SpawnStars();
        //Isn't a component so have to execute with useEffect when body is component is attached
    });


    return (<>
        
        <header>
            <Header />
        </header>
        
        <div>
            <nav>
                <Nav />
            </nav>
            

            <article id="MainContent">

                <Article Project="Home" />

            </article>
        </div>

        <footer>
            <a href="https://www.linkedin.com/in/jools-jannaway-b22012309/" >LinkedIn </a>
            <br />
            <a href="https://github.com/Metajjj" > Github  </a>
            <br />
            <a href="https://profile.indeed.com/p/joolsj-3m67034" > Indeed  </a>
        </footer>        
    </>);
}

//turn scripts into components and import them

import { Header } from './Header';
import { Nav } from './Nav';
import { Article } from './Article'

import { StrictMode, useEffect } from 'react';
import ReactClient from 'react-dom/client';
ReactClient.createRoot(document.body).render(
    <StrictMode>
        <Body />
    </StrictMode>
);