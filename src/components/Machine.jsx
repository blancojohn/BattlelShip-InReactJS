import React, { useState } from "react";
import Square from "./Square";
import { buildBoard } from "../functions";


const Machine = ({ setTurn, human }) => {
    const [boardMachine, setBoardMachine] = useState(buildBoard());

    /* Permite recibir disparos en el tablero de machine solo en casillas disponibles según validaciones a continuación */
    const getGunShotHuman = (indexRow, indexBox) => {
        let shotCoordinates = [...boardMachine]
        /* Validación para disparar luego del posicionamiento de los barcos del humano */
        if(human.nameShip != "Haz click en una coordenada del tablero de la máquina para disparar"){
            alert("Debes posicionar todos tus barcos")
            return boardMachine
        }

        if(shotCoordinates[indexRow][indexBox] == "") {
            shotCoordinates[indexRow][indexBox] = "Y"
        }
        else if (shotCoordinates[indexRow][indexBox] == null) {
            shotCoordinates[indexRow][indexBox] = "N"
        }
        else{
            alert("¡Disparo inválido. Repetir!")
            return human.board
        }
        
        console.log("TIRO HUMAN", indexRow, indexBox)
        console.log("VERIFICACIÓN TIRO HUMAN", shotCoordinates[indexRow][indexBox]) 
        /* Al setear turn permite que el tablero humano reciba un disparo de machine  */
        setTurn(prevCount => prevCount + 1)
        setBoardMachine(shotCoordinates)
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




















