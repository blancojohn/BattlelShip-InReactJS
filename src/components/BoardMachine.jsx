import React, {useState} from "react";
import { showBoardMachine } from "../functions";


const BoardMachine = ({ humanTurn, setHumanTurn, setMachineTurn }) => {
    const [boardMachine, setBoardMachine] = useState(showBoardMachine());
    
    
    const getGunShotHuman=(indexRow,  indexBox)=>{
        if(humanTurn == true){
            let coordinates= [...boardMachine]
            if(coordinates[indexRow][indexBox] == ""){
                coordinates[indexRow][indexBox]= "ON TARGET!"
                setBoardMachine(coordinates)
                setHumanTurn(false)
                setMachineTurn(true)
            }
            else if(coordinates[indexRow][indexBox] == null){
                coordinates[indexRow][indexBox]= "YOU FAILED!"
                setBoardMachine(coordinates)
                setHumanTurn(false)
                setMachineTurn(true)
            }
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
                                <button key={indexBox} onClick={()=>{getGunShotHuman(indexRow, indexBox)}} id="box" type="button" className="btn btn-light">{box}</button>
                            ))}
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default BoardMachine;
    

    
