



function UsedTools(){
    return(
        <>
        <style>{`
            .Tools{
             width:70%;
            }
             .tools-tools{
             display:flex;
             gap:20px;
             
             }
            .used-tools { 
            position:relative; 
            margin-top: 5%;
            display:flex;
            align-items:center;
            }
            .image-size{
            height:50px;
            width:50px;}
            
            `}
        </style>
        <div className="Tools">

        <h2>Tools that I have used</h2>
        <hr/>
        
           <p>For backends:Nodejs,C++,Java</p>
        
        
        </div>

        </>
    )
}

export default UsedTools;