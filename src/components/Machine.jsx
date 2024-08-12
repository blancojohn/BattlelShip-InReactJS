import React, {useState} from "react";
import { showBoardMachine } from "../functions";
import ContainerSquare from "./ContainerSquare";
import Square from "./Square";


const Machine = ({ setTurn }) => {
    const [boardMachine, setBoardMachine] = useState(showBoardMachine());
    
    const getGunShotHuman=(indexRow,  indexBox)=>{
        let coordinates= [...boardMachine]
        if(coordinates[indexRow][indexBox] == ""){
            coordinates[indexRow][indexBox]= 2
            setBoardMachine(coordinates)
            countTurns()
        }
        else if(coordinates[indexRow][indexBox] == null){
            coordinates[indexRow][indexBox]= 3
            setBoardMachine(coordinates)
            countTurns()
        }
    }

    const countTurns= ()=>{
        setTurn(prevCount=> prevCount + 1)
    }

    return (
        <>
            <ContainerSquare>
                {
                    (boardMachine != null) &&
                    boardMachine.map((row, indexRow) => (
                        <span key={indexRow}>
                            {row.map((box, indexBox) => (
                                <Square key={indexBox} getFunction={()=>{getGunShotHuman(indexRow, indexBox)}}>{box}</Square>
                            ))}
                        </span>
                    ))
                }
            </ContainerSquare>
        </>
    )
}

export default Machine;

    

    
        

    

