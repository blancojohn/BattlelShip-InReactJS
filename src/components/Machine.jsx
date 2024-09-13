import React from "react";
import Square from "./Square";
import Messagge from "./Messagge";


const Machine = ({ boardMachine, setBoardMachine, setTurn, human, winMachine, setWinMachine, winHuman, setWinHuman, newGameMachine, setNewGameMachine/* , shipsMachine, setShipsMachine  */}) => {

    /* Permite recibir disparos en el tablero de machine solo en casillas disponibles según validaciones a continuación */
    const getGunShotHuman = (indexRow, indexBox) => {
        let shotCoordinates = [...boardMachine]
        /* Validación para disparar luego del posicionamiento de los barcos del humano */
        if (human.nameShip != "Haz click en una coordenada del tablero de la máquina para disparar") {
            alert("Debes posicionar todos tus barcos")
            return boardMachine
        }

        /* El "" es parte de un barco posicionado, al recibir un disparo el valor cambia "Y" y setea winHuman */
        if (shotCoordinates[indexRow][indexBox] == "") {
            shotCoordinates[indexRow][indexBox] = "Y"
            setWinHuman(countShot => countShot + 1)
        }
        /* Los null son casillas sin partes de barcos, al recibir un disparo cambia a "N" */
        else if (shotCoordinates[indexRow][indexBox] == null) {
            shotCoordinates[indexRow][indexBox] = "N"
        }
        else {
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
            <Messagge>Machine</Messagge>
                {/* TABLERO MACHINE */}
                {
                    (boardMachine != null) &&
                    boardMachine.map((row, indexRow) => (
                        <span key={indexRow}>
                            {
                                row.map((box, indexBox) => (
                                    <Square key={indexBox} onGetShotHuman={() => {if(winMachine != 17 && winHuman != 17)getGunShotHuman(indexRow, indexBox)}} boardMachine={boardMachine}  newGameMachine={newGameMachine} setNewGameMachine={setNewGameMachine} winMachine={winMachine} setWinMachine={setWinMachine}/* shipsMachine={shipsMachine} setShipsMachine={setShipsMachine} */>{box}</Square>
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




















