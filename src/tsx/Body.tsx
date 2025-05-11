function Body() {
    return (<>
        
        <header></header>
        <script type="module" src="src/tsx/Header.tsx"></script>

        
        <div>
            <nav></nav>
            <script type="module" src="src/tsx/Nav.tsx" ></script>

            <article id="MainContent">
      

                <section>
                    abc 12
                </section>

                <figure>
                    <img src="dsa" />
                    <figcaption>extra pic info</figcaption>
                </figure>

            </article>
           
            <script type="module" src="src/tsx/Article.tsx"> </script>
        </div>

        <footer>
            footer links
        </footer>

        <script type="module" src="src/tsx/SpawnStars.tsx"></script>
    </>);
}

import { StrictMode } from 'react';
import ReactClient from 'react-dom/client';
ReactClient.createRoot(document.body).render(
    <StrictMode>
        <Body />
    </StrictMode>
);