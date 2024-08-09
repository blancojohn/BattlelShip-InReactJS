import React, { useState } from "react";
import BoardMachine from "./components/BoardMachine";
import BoardHuman from "./components/BoardHuman";


const App = () => {
    const [boardMachine, setBoardMachine] = useState(null);
    const [boardHuman, setBoardHuman]= useState(null);
    
   /*  const playStart= (indexRow, indexBox)=>{
        let actions= [...board];
        if (actions[indexRow][indexBox] == 0){
            addShip(indexRow, indexBox)
        }
        else if(actions[indexRow][indexBox] == 1){
            shootCannon(indexRow, indexBox)
        }
    } */

    /* const addShip=(indexRow, indexBox)=>{
        let shipInBoard= [...board];
        shipInBoard[indexRow].splice(indexBox,5,1,1,1,1,1) 
        setBoard(shipInBoard)
    } */

    /* const shootCannon=(indexRow,  indexBox)=>{
        let shot= [...board]
        if(shot[indexRow][indexBox] == 1){
            shot[indexRow][indexBox]=2
            setBoard(shot)
        }
    } */

    
   /* useEffect(() => {
       setBoard(showBoard())
    }, []) */
    
    return (
        <>
            <BoardMachine boardMachine={boardMachine} setBoardMachine={setBoardMachine}/>
            <BoardHuman boardHuman={boardHuman} setBoardHuman={setBoardHuman}/>
        </>
    )
}

export default App
           
            

    
    

   







