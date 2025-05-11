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
        
        switch (hc.readyState) {
            case 0: console.log("unsent"); break;
            case 1: console.log("sent"); break;
            case 2: console.log("headers"); break;
            case 3: console.log("dwnlding"); break;
            case 4: console.log("complete"); break;
        }*/


        if (hc.readyState == 4 && hc.status == 200) {
            //Sort out the hc.responseText
            //globData = hc.responseText;
            //console.log(globData);
            let filtered: string="";

            let json = JSON.parse(hc.response);

            for (let i in json) {
                filtered += json[i]["name"] + "\n";
            }

            setData(filtered);
            //TODO filtrate semi works - pic glob  language glob  readme glob

            b64decodeContent();
        }
    }

    //type | url | async
    hc.open("GET", "https://api.github.com/users/Metajjj/repos", true); //initialises a request    

    hc.send(null) //Json body    
}

            /*
            https://api.github.com/

                /users/{owner}/repos = list of public repos

                /repos/{owner}/{RepoName} = Specific Repo
                                        /languages = all code languages used
                                        /contents/{?Path} = [ {type:"dir|file" , name:"name", path:"path", url:"base64 content", } ]
            */

function b64decodeContent(b64 : string="") {
    b64 = "77u/Z2xvYmFsIHVzaW5nIFN5c3RlbS5SZWZsZWN0aW9uOwpnbG9iYWwgdXNp\nbmcgU3lzdGVtLlRleHQuUmVndWxhckV4cHJlc3Npb25zOwoKdXNpbmcgU3lz\ndGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlczsKCgpuYW1lc3BhY2UgQW9D\nOwoKcHVibGljIGNsYXNzIFByb2dyYW0KewogICAgc3RhdGljIHZvaWQgTWFp\nbihzdHJpbmdbXSBhcmdzKQogICAgewogICAgICAgIC8vbmV3IF8yMDE1Ll8y\nMDE1KCkuU3RhcnQoKTsKCiAgICAgICAgbmV3IF8yMDI0Ll8yMDI0KCkuU3Rh\ncnQoKTsKCgogICAgICAgIC8vQXV0byBjbG9zZSArIHRpbWUgdG8gcmVhZCBy\nZXN1bHRzCiAgICAgICAgVGFzay5SdW4oKCkgPT4geyBUaHJlYWQuU2xlZXAo\nMTAwMCAqIDYwKTsgRW52aXJvbm1lbnQuRXhpdCgwKTsgfSk7CiAgICAgICAg\nQ29uc29sZS5SZWFkS2V5KCk7CiAgICB9Cn0K\n";

    console.log(
        window.atob(b64).replace(/[^\x00-\x7F]+/g, "")
            //Works !! can decode api gh content
    );
}


function Article(Project : string ="") {

    let [globData, setData] = useState("Res..");

    useEffect(() => {
        ConnectToProject(globData,setData);
    })

    return (<>
        <section>            
            {globData}
        </section>

        <figure>
            <img src="dsa" />
            <figcaption>extra pic crap</figcaption>
        </figure>
    </>);
}

ReactDOM.createRoot(document.getElementById("MainContent")!).render(<Article />)