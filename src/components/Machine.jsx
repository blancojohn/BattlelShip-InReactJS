import React, { useEffect, useRef } from "react";
import Square from "./Square";
import Messagge from "./Messagge";


const Machine = ({ boardMachine, setBoardMachine, setTurn, human, winMachine, winHuman, setWinHuman, newGameMachine, setNewGameMachine, shipsMachine, setShipsMachine }) => {

    const addShipsHorizontal = (sizeShip) => {
        let shipCoordinnates = [...boardMachine]
        let firstDimension = Math.floor(Math.random() * 9)
        let accesDimension = shipCoordinnates[firstDimension]
        let secondDimension = Math.floor(Math.random() * 9)
        let shipPosition = secondDimension + sizeShip
        let boxsInvalids = false

        /* Recorre el array para validar coordenadas ocupadas */
        for (let i = secondDimension; i < shipPosition; i++) {
            if (accesDimension[i] == "") {
                boxsInvalids = true
            }
        }

        /* Valida para no exceder los límites del tablero posiconando un barco y mientras las casillas estén disponibles */
        if (boxsInvalids == false && shipPosition <= accesDimension.length) {
            for (let i = secondDimension; i < shipPosition; i++) {
                accesDimension[i] = ""
            }
        }
        else {
            addShipsHorizontal(sizeShip)
        }
        return shipCoordinnates
    }

    const shipAmount = useRef(0)

    useEffect(() => {
        if (shipAmount.current == 0) {
            addShipsHorizontal(5)
            addShipsHorizontal(4)
            addShipsHorizontal(3)
            addShipsHorizontal(3)
            addShipsHorizontal(2)
            shipAmount.current = 1
        }
        if (newGameMachine == true) {
            addShipsHorizontal(5)
            addShipsHorizontal(4)
            addShipsHorizontal(3)
            addShipsHorizontal(3)
            addShipsHorizontal(2)
        }
    }, [boardMachine])

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

    /* De acuerdo al valor con el que se encuentre el estado permite ver los barcos posicionados porque <Square /> lo accede */
    const changeState = () => {
        (shipsMachine == "Mostrar barcos") ? setShipsMachine("Ocultar barcos") : setShipsMachine("Mostrar barcos")
    }

    return (
        <>
            <div id="board">
                <Messagge>Machine</Messagge>
                <div className="d-flex">
                    {
                        [" ", 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <div key={index} id="box" type="button" className="btn btn-light">
                                {item}
                            </div>
                        ))
                    }
                </div>

                {
                    (boardMachine != null) &&
                    boardMachine.map((row, indexRow) => (
                        <span key={indexRow}>
                            <div id="box" type="button" className="btn btn-light">
                                {indexRow + 1}
                            </div>
                            
                            {
                                row.map((box, indexBox) => (
                                    <Square key={indexBox} onGetShotHuman={() => { if (winMachine != 17 && winHuman != 17) getGunShotHuman(indexRow, indexBox) }} boardMachine={boardMachine} newGameMachine={newGameMachine} setNewGameMachine={setNewGameMachine} shipsMachine={shipsMachine}>{box}</Square>
                                ))
                            }
                        </span>
                    ))
                }
                <div className="d-flex justify-content-center mt-2">
                    <button onClick={changeState} className="btn btn-primary">{shipsMachine}</button>
                </div>
            </div>
        </>
    )
}

export default Machine;




















