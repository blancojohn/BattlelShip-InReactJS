import React, { useState, useEffect } from "react";
import { showBoard } from "./functions";

const App = () => {
    const [board, setBoard] = useState(null);
    const [positionShip, setPositionShip]= useState([])
    
    const playStart= (indexRow, indexBox)=>{
        let actions= [...board];
        if (actions[indexRow][indexBox] == 0){
            addShip(indexRow, indexBox)
        }
        else if(actions[indexRow][indexBox] == 1){
            shootCannon(indexRow, indexBox)
        }
    }

    const addShip=(indexRow, indexBox)=>{
        let shipInBoard= [...board];
        shipInBoard[indexRow].splice(indexBox,5,1,1,1,1,1) 
        setBoard(shipInBoard)
        /* if(shipInBoard[indexRow][indexBox] == 1){
            shootCannon()
        } */
    }

    const shootCannon=(indexRow,  indexBox)=>{
        let shot= [...board]
        if(shot[indexRow][indexBox] == 1){
            shot[indexRow][indexBox]=2
            setBoard(shot)
        }
    }

    
   useEffect(() => {
       setBoard(showBoard())
    }, [])
    
    return (
        <>
            <div id="board">
                {
                    (board != null) &&
                        board.map((row, indexRow) => (
                            <div key={indexRow}>
                                {row.map((box, indexBox) => (
                                    <button key={indexBox} id="box" onClick={()=>playStart(indexRow, indexBox)} type="button" className="btn btn-light">{box}</button>
                                ))}
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default App

    
    

   







