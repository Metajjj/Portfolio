function Body() {
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
            footer links
        </footer>

        <script src="./src/tsx/SpawnStars.tsx"> </script>
        
    </>);
}

//turn scripts into components and import them

import { Header } from './Header';
import { Nav } from './Nav';
import { Article } from './Article'

import { StrictMode } from 'react';
import ReactClient from 'react-dom/client';
ReactClient.createRoot(document.body).render(
    <StrictMode>
        <Body />
    </StrictMode>
);