import React, { useState } from "react";
import Machine from "./components/Machine";
import Human from "./components/Human";


const App = () => {
    
    const [turn, setTurn]= useState(0);

    return (
        <>
            <Human turn={turn} />
            <Machine setTurn={setTurn} />
        </>
    )
}

export default App
    
   
    
           
            

    
    

   





    


