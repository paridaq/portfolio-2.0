

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
        ;
        margin-bottom:15px;
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
        background-color:grey;
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
        .project-detail{
        }
        @media(max-width:768px){
        .container{
        flex-direction:column;
        }
        }
      
        
    ` }

    </style>
    <div>
        <h2>Projects that I build</h2>
        <hr/>
         
            {projectArray.map((project)=>(

            <div className="container" key={project.id}>


              <div className="rectangle">
                <img className="image"  src={project.image} alt="image" />
                <div className="small-rect">
                    <p className="small-text">
                        <a href={project.liveLink}>live preview</a>
                        <a href={project.liveLink}> source cose</a>
                    </p>
                </div>


                </div>
            <div className="project-detail">
               <div>
            <p>{project.name}</p>
            <p>{project.description} </p>
            <p>this is the project</p>
            </div>
            </div>
    
    </div>
            ))}
    </div>
    </>
    )
}
export default Project;