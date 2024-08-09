import React, { useEffect } from "react";
import { showBoardMachine } from "../functions";



const BoardMachine = ({ boardMachine, setBoardMachine }) => {

    useEffect(() => {
        setBoardMachine(showBoardMachine())
    }, [])

    const getGunShotHuman=(indexRow,  indexBox)=>{
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
                                <button key={indexBox} onClick={()=>getGunShotHuman(indexRow, indexBox)} id="box" type="button" className="btn btn-light">{box}</button>
                            ))}
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default BoardMachine;
    
