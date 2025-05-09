/*
<article id="MainContent">
    <!-- change React component based on what's clicked.. run a func based on clicked ul? param -->

    <section>
        abc 123
    </section>

    <figure>
        <img src="dsa" />
        <figcaption>extra pic crap</figcaption>
    </figure>

</article>
*/

import React, { useContext, useEffect, useState } from 'react';
import ReactClient from 'react-dom/client';
import ReactDOM from 'react-dom/client';

//Client components cant be async 
function ConnectToProject(ProjName: string = "", setData: Function) {
    let hc = new XMLHttpRequest();

    hc.onreadystatechange = () => {
        /*rdyState 
            0 - unsent | 1 - opened | 2 - headers received | 3 - downloading response | 4 - complete
        */
        switch (hc.readyState) {
            case 0: console.log("unsent"); break;
            case 1: console.log("sent"); break;
            case 2: console.log("headers"); break;
            case 3: console.log("dwnlding"); break;
            case 4: console.log("complete"); break;
        }


        if (hc.readyState == 4 && hc.status == 200) {
            //Sort out the hc.responseText
            //globData = hc.responseText;
            //console.log(globData);
            setData(hc.responseText);
            //TODO filtrate semi works
        }
    }

    //type | url | async
    hc.open("GET", "https://api.github.com/users/Metajjj/repos", true) //initialises a request

    hc.send(null) //Json body

    console.log("Test log"); //TODO check logging
}


function Article() {

    let [globData, setData] = useState("Res..");

    useEffect(() => {
        ConnectToProject(globData,setData);
    })

    return (<>
        <section>
            abc 123
            <br />
            { globData }
        </section>

        <figure>
            <img src="dsa" />
            <figcaption>extra pic crap</figcaption>
        </figure>
    </>);
}

ReactDOM.createRoot(document.getElementById("MainContent")!).render(<Article />)