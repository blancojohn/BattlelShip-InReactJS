import React, { useEffect } from "react";
import { showBoardHuman } from "../functions";



const BoardHuman = ({ boardHuman, setBoardHuman }) => {

    useEffect(() => {
        setBoardHuman(showBoardHuman())
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
   /* const shootCannon=(indexRow,  indexBox)=>{
       let shot= [...boardHuman]
       if(shot[indexRow][indexBox] == ""){
           shot[indexRow][indexBox]= "ON TARGET!"
           setBoardHuman(shot)
       }
       else if(shot[indexRow][indexBox] == null){
           shot[indexRow][indexBox]= "YOU FAILED!"
           setBoardHuman(shot)
       }
   } */

    const addShip = (indexRow, indexBox) => {
        let shipInBoard = [...boardHuman];
        shipInBoard[indexRow].splice(indexBox, 5, "", "", "", "", "")
        console.log(shipInBoard)
        setBoardHuman(shipInBoard)
    } 


    return (

        <>
            <div id="board">
                {
                    (boardHuman != null) &&
                    boardHuman.map((row, indexRow) => (
                        <div key={indexRow}>
                            {row.map((box, indexBox) => (
                                <button key={indexBox} onClick={()=>addShip(indexRow, indexBox)} id="box" type="button" className="btn btn-light">{box}</button>
                            ))}
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default BoardHuman;