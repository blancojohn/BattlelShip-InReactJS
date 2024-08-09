import React, { useState } from "react";
import BoardMachine from "./components/BoardMachine";
import BoardHuman from "./components/BoardHuman";


const App = () => {
    
    const [humanTurn, setHumanTurn]= useState(true);
    const [machineTurn, setMachineTurn]= useState(false);

    return (
        <>
            <BoardMachine machineTurn={machineTurn} setMachineTurn={setMachineTurn} humanTurn={humanTurn} setHumanTurn={setHumanTurn}/>
            <BoardHuman machineTurn={machineTurn} setMachineTurn={setMachineTurn} humanTurn={humanTurn} setHumanTurn={setHumanTurn}/>
        </>
    )
}

export default App
    
   
    
           
            

    
    

   





    


