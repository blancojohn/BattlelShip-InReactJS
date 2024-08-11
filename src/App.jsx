import React, { useState } from "react";
import BoardMachine from "./components/BoardMachine";
import BoardHuman from "./components/BoardHuman";


const App = () => {
    
    const [turn, setTurn]= useState(0);

    return (
        <>
            <BoardMachine setTurn={setTurn} />
            <BoardHuman turn={turn} />
        </>
    )
}

export default App
    
   
    
           
            

    
    

   





    


