//export = allowed to be imported if specified
export function Header() {
        //Need empty tags to signify fragment-based HTML code
    return (<> 
            <img src="./public/assets/Logo.png" alt="logo" />
            <h1 className="PageTitle clickable">Home page</h1>
            <div className="clickable" onClick={ThemeControl}>Switch<br />Theme</div>
    </>);
}

/*import ReactClient from 'react-dom/client';
ReactClient.createRoot(document.querySelector("header")!).render(<Header />);
    setting up in Body.tsx frag - this makes it render too early
*/

function ThemeControl() {                           
                                //null coalesce is || not ??
    let currTheme = document.body.getAttribute("theme") || "";

    let Themes = [];

    for (let x of document.styleSheets) {
        for (let i = 0; i < x.cssRules.length; i++) {

            let rule = x.cssRules[i]
            if (rule instanceof CSSStyleRule && rule.selectorText.includes("theme")) {
                Themes.push(rule.selectorText.toLowerCase());
            }
        }
    }
    // <div pos=0> .. click = pos++; = theme++; ...

    if (Themes.find(t => {
        if (t.includes(currTheme)) {
            currTheme = t;

            return true;
        }
        return false;
    }
    )) {
        let newPos = Themes.indexOf(currTheme) + 1 >= Themes.length ? 0 : Themes.indexOf(currTheme) + 1;
        let newTheme = Themes[newPos].substring(Themes[newPos].indexOf('"')+1, Themes[newPos].lastIndexOf('"'));
        document.body.setAttribute("theme", newTheme);
    }

    //console.log(Themes.indexOf(`"[theme="${currTheme}"]"`.toLowerCase()));
}