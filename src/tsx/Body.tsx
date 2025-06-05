import SpawnStars from './SpawnStars';

function Body() {
    useEffect(() => {
        SpawnStars();
        //Isn't a component so have to execute with useEffect when body is component is attached
    });
    //TODO add my name in portfolio

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
            <Footer />
        </footer>        
    </>);
}

//turn scripts into components and import them

import { Header } from './Header';
import { Nav } from './Nav';
import { Article } from './Article'
import Footer from './Footer';

import { StrictMode, useEffect } from 'react';
import ReactClient from 'react-dom/client';
ReactClient.createRoot(document.body).render(
    <StrictMode>
        <Body />
    </StrictMode>
);