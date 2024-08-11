import React, {useState} from "react";
import { showBoardMachine } from "../functions";


const BoardMachine = ({ setTurn }) => {
    const [boardMachine, setBoardMachine] = useState(showBoardMachine());
    
    const getGunShotHuman=(indexRow,  indexBox)=>{
        let coordinates= [...boardMachine]
        if(coordinates[indexRow][indexBox] == ""){
            coordinates[indexRow][indexBox]= "ON TARGET!"
            setBoardMachine(coordinates)
            countTurns()
        }
        else if(coordinates[indexRow][indexBox] == null){
            coordinates[indexRow][indexBox]= "YOU FAILED!"
            setBoardMachine(coordinates)
            countTurns()
        }
    }

    const countTurns= ()=>{
        setTurn(prevCount=> prevCount + 1)
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

    

    
        

    

