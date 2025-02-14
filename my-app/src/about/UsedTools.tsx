import react from "react";



function UsedTools(){
    return(
        <>
        <style>{`
        .Tools{
        width:70%;}
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
        <div className="used-tools">
        <img className="image-size" src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" alt="react-logo" />
        <h3>-React</h3>
        

        </div>
        
        </div>

        </>
    )
}

export default UsedTools;