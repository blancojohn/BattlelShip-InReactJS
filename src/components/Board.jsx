import React, { useEffect } from "react";
import { showBoardMachine } from "../functions";



const Board = ({ boardMachine, setBoardMachine }) => {

    useEffect(() => {
        setBoardMachine(showBoardMachine())
    }, [])

    /* const playStart = (indexRow, indexBox) => {
        let actions = [...boardMachine];
        if (actions[indexRow][indexBox] == 0) {
            addShip(indexRow, indexBox)
        }
        else if (actions[indexRow][indexBox] == "") {
            shootCannon(indexRow, indexBox)
        }
    } */

    /* const addShip = (indexRow, indexBox) => {
        let shipInBoard = [...boardMachine];
        shipInBoard[indexRow].splice(indexBox, 5, "", "", "", "", "")
        setBoardMachine(shipInBoard)
    } */

    const shootCannon=(indexRow,  indexBox)=>{
        let shot= [...boardMachine]
        if(shot[indexRow][indexBox] == ""){
            shot[indexRow][indexBox]= "ON TARGET!"
            setBoardMachine(shot)
        }
        else if(shot[indexRow][indexBox] == null){
            shot[indexRow][indexBox]= "YOU FAILED!"
            setBoardMachine(shot)
        }
    }

    return (

        <>
            <div id="board">
                {
                    (boardMachine != null) &&
                    boardMachine.map((row, indexRow) => (
                        <div key={indexRow}>
                            {row.map((box, indexBox) => (
                                <button key={indexBox} onClick={()=>shootCannon(indexRow, indexBox)} id="box" type="button" className="btn btn-light">{box}</button>
                            ))}
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default Board;