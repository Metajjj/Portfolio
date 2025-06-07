import { useEffect } from "react";

//export = allowed to be imported if specified
export function Header() {
    //Need empty tags to signify fragment-based HTML code

    //TODO overlay img with my name - css animation col affect
    useEffect(themeaticText);

    return (<>
        <div id="icon" style={{ background: "url(./assets/Logo.png)", backgroundSize:"cover" }}>
            Jools<br/>Jannaway
        </div>
        <h1 className="PageTitle clickable">Home page</h1>
        <div className="clickable" onClick={ThemeControl}>Switch<br />Theme</div>
    </>);
}

function themeaticText() {
    //TODO loook into
    return;
    setInterval(() => {
        var txt = document.getElementById("icon");
        txt.style.setProperty("--RanA", "#000");
        txt.style.setProperty("--RanB", "#FFF");
    }, 1000 * 5);
}
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