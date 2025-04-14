import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import CV from "./CV.tsx"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App />*/}
        <CV />
    </StrictMode>,
);


