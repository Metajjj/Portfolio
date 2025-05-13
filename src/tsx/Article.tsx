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
function ConnectToProject(ProjName: string = "", Pres, Prej ) {
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

            Pres(JSON.parse(hc.response));
        } else if (hc.status == 403 || hc.status == 429) {
            console.log("Rate limit!");
            throw new Error("RATE LIMIT GH");
        }
        else if (hc.readyState == 4) {
            //error - state to make sure it has finished downloading
            console.log(`status: ${hc.status} | state: ${hc.readyState}`)
            Prej( hc.responseText );
        }
    }

    //type | url | async
    //let url:string = `https://api.github.com/repos/${"Metajjj"}/${ProjName}`;
    //let url:string = `xx/Metajjj/${ProjName}` // TODO mock a fake server for test
    hc.open("GET", ProjName, true); //initialises a request    

    hc.send(null) //Json body    
    console.log("Connecting to.. " + ProjName);
}
            /*
            https://api.github.com/

                /users/{owner}/repos = list of public repos

                /repos/{owner}/{RepoName} = Specific Repo
                                        /languages = all code languages used

                                        /contents = array of files at root level
                                                            //Case-Sensitive!
                                        /contents/{?Path}?ref={branchName} = [ {type:"dir|file" , name:"name", path:"path", url:"base64 content", html_url:"tree|blob" } ]
            */

function b64decodeContent(b64: string = "77u/Z2xvYmFsIHVzaW5nIFN5c3RlbS5SZWZsZWN0aW9uOwpnbG9iYWwgdXNp\nbmcgU3lzdGVtLlRleHQuUmVndWxhckV4cHJlc3Npb25zOwoKdXNpbmcgU3lz\ndGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlczsKCgpuYW1lc3BhY2UgQW9D\nOwoKcHVibGljIGNsYXNzIFByb2dyYW0KewogICAgc3RhdGljIHZvaWQgTWFp\nbihzdHJpbmdbXSBhcmdzKQogICAgewogICAgICAgIC8vbmV3IF8yMDE1Ll8y\nMDE1KCkuU3RhcnQoKTsKCiAgICAgICAgbmV3IF8yMDI0Ll8yMDI0KCkuU3Rh\ncnQoKTsKCgogICAgICAgIC8vQXV0byBjbG9zZSArIHRpbWUgdG8gcmVhZCBy\nZXN1bHRzCiAgICAgICAgVGFzay5SdW4oKCkgPT4geyBUaHJlYWQuU2xlZXAo\nMTAwMCAqIDYwKTsgRW52aXJvbm1lbnQuRXhpdCgwKTsgfSk7CiAgICAgICAg\nQ29uc29sZS5SZWFkS2V5KCk7CiAgICB9Cn0K\n") { 

                                //replace any non-english with empty!
    let d64 = window.atob(b64).replace(/[^\x00-\x7F]+/g, "");

    //console.log(d64); //WORKS!!!
    return d64;
    
}

// curly brackets for attributes of the fragment
function Article({ Project = "RecordShopMerged" }: string) {
    let RepoName = Project;

    Project = `https://api.github.com/repos/${"Metajjj"}/${Project}`;
    //not allowed to be global!
    let [globData, setSection] = useState("Res.."); //TODO update FigCap after Section

    let [imgURL, setImg] = useState("dsa");
    let [languages, setFigCap] = useState("");


    useEffect(() => {
        // xx/contents xx/languages

        //TODO triggering rate limit - promise within promise breaks it!
        
        new Promise((r, R) => ConnectToProject(Project + "/contents", r, R))
            .then( (val:any) => {
                setSection(JSON.stringify(val));
                return val;
                //got contents
            })
            .then(val => {
                //Find ReadMe

                for (let i in val) {
                    if (/.*read.*me.*/gmi.test(val[i]["name"]) && val[i]["type"].toLowerCase() == "file") {

                        console.log("readme found")
                        new Promise((r, R) => {
                            ConnectToProject(val[i]["url"], r, R)
                        }).then((val: any) => {
                            setSection(b64decodeContent(val["content"]))
                        }).catch((val: any) => {
                            setSection("Unable to detect the ReadMe in the project at root level!")
                        })
                    }
                }
                return val;
            })
            .then(val => {
                //Find Image

                for (let i in val) {
                    if (/\.png$/gi.test(val[i]["name"]) && val[i]["type"].toLowerCase() == "file") {

                        //console.log("img found")

                        new Promise((r, R) => {
                            ConnectToProject(val[i]["url"], r, R)
                        }).then((val: any) => {
                            //remove the ref part of query
                            
                            let bf = val["url"].substring(val["url"].lastIndexOf('/')+1)
                            let fileName = bf.split("?ref=")[0];
                            let branch = bf.split("?ref=")[1];

                            let url = `https://raw.githubusercontent.com/${"Metajjj"}/${RepoName}/${branch}/${fileName}`
                            //TODO sort img - let url = "https://api.github.com/repos/Metajjj/RecordShopMerged/contents/WIP.PNG?ref=main"

                            //`https://raw.githubusercontent.com/${"Metajjj"}/${RepoName}/${branch}/${name}`

                            /* pseudo
                             substring(url.lastIndexOf("/")) == file/name+branch
                            */

                            setImg(url);

                        }).catch((val: any) => {
                            //console.log("Unable to detect the .png in the project at root level!")
                            setImg("dsa");
                        })

                    }
                }
            })
            .then(val => {

                //find languages

                new Promise((r, R) => {
                    ConnectToProject(Project + "/languages", r, R)
                }).then((json: any) => {
                    let total = 0; let outputHTML : string[] = [];

                    for (let i in json) { total += json[i]; }
                    for (let i in json) {
                        outputHTML.push(`${i}: ${Math.round(json[i] / total * 100)}%`)
                    }

                    setFigCap( outputHTML.join(" | ") );

                }).catch(err => setFigCap(err))
            })
            .catch(err => {
                setSection("ERRROR getting contents");
            });   
    },[]) //Need empty array so only runs once - stops rate limits 

    return (<>
        <section>            
            {globData}
        </section>

        <figure>
            <img src={imgURL} onClick={TempFS} />
            <figcaption>{languages}</figcaption>
        </figure>
    </>);
}

function TempFS() {
    //TODO temp FS
}

ReactDOM.createRoot(document.getElementById("MainContent")!).render(<Article />)