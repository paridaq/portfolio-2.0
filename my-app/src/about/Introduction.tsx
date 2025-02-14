import React from "react";

function Introduction(){
    return(
        <>
        <style>{`
            .introduction {
            
            top: 0%;
            margin-top: 5%;
            
            
            ;
            width:70%;
            
            .amazing{
            font-size: 1.7rem;
            color:white ;
            }
            .h2{
            font-size:1rem;
            opacity:0.7;
            }
            .p{
            opacity:0.5;
            
            }
            .high{
            color:rgb(178, 227, 104);
            opacity:5;
            }
            .p2-2{
            opacity:0.5;}
        `}</style>
        <div className="introduction">
            <h1 className="amazing">Biswajit Parida</h1>
            <h2 className="h2">About me</h2>
            <hr/>
            <p className="p">Hello ! I'm a devloper from Bengaluru,India.I enjoy programming and exploring
                technology.I've participated in  in 50 plus hackathons <span className="high"> The great</span>
            </p>
            <h2 className="h2-2">What I do? </h2>
            <hr/>
            <p className="p2-2"> I delivered 10+ freelance projects,Interned at two startups
                and going to build my own statup .I'm super active on X 
                Where I share funnies and thoughts and tech related news
            </p>

            <p className="p2-2">I'm a aws clod club captain a maintainer a contributer of open source 
                projects. when not coding I read books
            </p>
            <p>
                I'm open to work ,freelance, or collebarate. <a href="www.google.com"> contact me</a>
            </p>
           
        </div>
        </>
    )
}

export default Introduction