import React, { useState, useEffect } from "react";
import { showBoard } from "./functions";

const App = () => {
    const [board, setBoard] = useState(null);
    const [positionShip, setPositionShip]= useState([])
    /* const addShip= (arr)=>{
        for(let i= 0; i < arr.length -1; i ++){
            arr[i]=1
        }
        return arr
    } */
    
    const addShip=()=>{
        let shipInBoard= [...board];
        shipInBoard[0][0]= 1
        shipInBoard[0][1]= 1
        shipInBoard[0][2]= 1
        shipInBoard[0][3]= 1
        shipInBoard[0][4]= 1 
        setBoard(shipInBoard)
    }

   useEffect(() => {
       setBoard(showBoard())
    }, [])
    

    //Posicionamineto vértical de pieza
    /* board[0][3]=1
    board[0][2]=1
    board[0][1]=1 */
    
    //Posicionamiento horizontal de pieza
   /*  board[1][0]=1
    board[2][0]=1
    board[3][0]=1 */




    return (
        <>
            <div id="board">
                {
                    (board != null) &&
                        board.map((row, indexRow) => (
                            <div key={indexRow}>
                                {row.map((box, indexBox) => (
                                    <button key={indexBox} id="box" onClick={addShip} type="button" className="btn btn-light">{box}</button>
                                ))}
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default App
    
    

   



