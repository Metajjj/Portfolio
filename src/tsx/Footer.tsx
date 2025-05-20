function Footer() {
    return (<>
        {
            //link : img
            [["https://www.linkedin.com/in/jools-jannaway-b22012309/", "./assets/LinkedIn.svg", "LinkedIn"],
                ["https://github.com/Metajjj","./assets/GithubIcon.svg","GitHub"],
                ["https://profile.indeed.com/p/joolsj-3m67034", "./assets/IndeedIcon.svg", "Indeed"]
            ].map(l => (
                <a href={l[0]}>
                    {l[2]}
                    <img src={l[1]} />
                </a>
            ))
        }
        
        
        
      
      </>);
}

export default Footer;