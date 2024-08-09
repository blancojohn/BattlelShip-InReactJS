import React, { useState } from "react";
import BoardMachine from "./components/BoardMachine";
import BoardHuman from "./components/BoardHuman";
import { showBoardHuman, showBoardMachine } from "./functions";


const App = () => {
    const [boardMachine, setBoardMachine] = useState(showBoardMachine());
    const [boardHuman, setBoardHuman]= useState(showBoardHuman());
    
    return (
        <>
            <BoardMachine boardMachine={boardMachine} setBoardMachine={setBoardMachine}/>
            <BoardHuman boardHuman={boardHuman} setBoardHuman={setBoardHuman}/>
        </>
    )
}

export default App
   
    
           
            

    
    

   







