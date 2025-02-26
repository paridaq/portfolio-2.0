



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
        <div className="tools-tools">

        <div className="used-tools">
        <img className="image-size" src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" alt="react-logo" />
        <h3>-React</h3>
        </div>
        <div className="used-tools">
         <img src=" https://img.icons8.com/color/48/nodejs.png"  alt="nodejs logo" />
         <h3>-Nodejs</h3>
        </div>
        <div className="used-tools">
        <img width="48" height="48" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
        <h3>-C++</h3>
        </div>
        <div className="used-tools">
        <img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
           <h3>-Java</h3>
        </div>
        
        
        </div>
        <div className="tools-tools">
            <div className="used-tools">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/express-js.png" alt="express-js"/>
                <h3>-Express</h3>
            </div>
            <div className="used-tools">
            <img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                 <h3>-Python</h3>
            </div>
            <div className="used-tools">
            <img width="48" height="48" src="https://img.icons8.com/parakeet/48/sql.png" alt="sql"/>
            <h3>-SQL</h3>
            </div>
            <div className="used-tools">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/typescript--v1.png" alt="typescript--v1"/>
               <h3>-Typescript</h3>
            </div>

        </div>
        
        
        </div>

        </>
    )
}

export default UsedTools;