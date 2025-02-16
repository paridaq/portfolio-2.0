import react from "react";
import snap from '../assets/Screenshot (90).png'
import { projectArray } from "../object/ProjectObject";



function Project(){

    return(
        <>
        <style>
        {`
            .container{
            width:100%;
            display:flex;
            gap:20px;
            text-align:center
            }
            .rectangle{
            width:400px;
            height:200px;
            background-color:green;
            border:3px solid white;
            ;
            position:relative;
            }
            .small-rect{
            width:395px;
            height:48px;
            background-color:yellow;
            border:3px solid white;
            
            margin-top:-6px;
            
            }
            .image{
            width:398px;
            height:150px;
            ;
            }
            .small-text{
            display:flex;
            gap:199px;}
          
            
        ` }

        </style>
     <h2>Projects that I build</h2>
     <hr/>
        <div className="container">
     
     <div className="rectangle">
        <img className="image"  src={snap} alt="image" />
        <div className="small-rect">
            <p className="small-text">
                <a href="">live preview</a>
                <a href=""> source cose</a>
            </p>
        </div>

     
     </div>
     <div>

     <p>this is the project ghghhh  uughujjhj  drrcdcyr vtjbjhjgh  fjyjb   trtdr  bfyyfjbbff   tffdddd   ffjbbbb   dhbhbfdd   ttvbfdfh  dhhjsdbsds</p>
     <p>this is the project nmcjghfj hjdhj vgj cn hg jrr hgdj gjhgj  gjhgj  hggj ghgg ttth gjnbg fvgvffy tvvbfff vgfffhh fgjbv  fvghb  fjbj bfhgfg </p>
     <p>this is the project</p>
     </div>
    

        </div>

        </>
    )
}
export default Project;