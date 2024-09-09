import React, { useState } from "react";
import Square from "./Square";
import { buildBoard } from "../functions";


const Machine = ({ setTurn, human }) => {
    const [boardMachine, setBoardMachine] = useState(buildBoard());

    const getGunShotHuman = (indexRow, indexBox) => {
        if(human.nameShip == "Haz click en una coordenada del tablero de la máquina para disparar"){
            let shotCoordinates = [...boardMachine]
            if (shotCoordinates[indexRow][indexBox] == "") {
                shotCoordinates[indexRow][indexBox] = "Y"
            }
            else if (shotCoordinates[indexRow][indexBox] == null) {
                shotCoordinates[indexRow][indexBox] = "N"
            }
            console.log("TIRO HUMAN", indexRow, indexBox)
            console.log("VERIFICACIÓN TIRO HUMAN", shotCoordinates[indexRow][indexBox])
            setTurn(prevCount => prevCount + 1)
            setBoardMachine(shotCoordinates)
        }
        else{
            alert("Debes posicionar todos tus barcos")
        }
    }

    return (
        <>
            <div id="board">
                {/* TABLERO MACHINE */}
                {
                    (boardMachine != null) &&
                    boardMachine.map((row, indexRow) => (
                        <span key={indexRow}>
                            {
                                row.map((box, indexBox) => (
                                    <Square key={indexBox} onGetShotHuman={() => {getGunShotHuman(indexRow, indexBox) }} boardMachine={boardMachine}>{box}</Square>
                                ))
                            }
                        </span>
                    ))
                }
            </div>
        </>
    )
}

export default Machine;




















