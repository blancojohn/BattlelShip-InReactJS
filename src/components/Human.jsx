import React, { useEffect, useState } from "react";
import { showBoardHuman } from "../functions";
import ContainerSquare from "./ContainerSquare";
import Square from "./Square";



const Human = ({ turn }) => {
    const [boardHuman, setBoardHuman] = useState(showBoardHuman());
    
    const addShip = (indexRow, indexBox) => {
        let shipInBoard = [...boardHuman];
        shipInBoard[indexRow].splice(indexBox, 5, 1, 1, 1, 1, 1)
        console.log("DESPLIEGUE DE PIEZAS HUMAN", shipInBoard)
        setBoardHuman(shipInBoard)
    }

    const getGunShotMachine = () => {
        let coordinates = [...boardHuman];
        let indexRow = Math.floor(Math.random() * 9);
        let indexBox = Math.floor(Math.random() * 9);
        if (coordinates[indexRow][indexBox] == 1) {
            coordinates[indexRow][indexBox] = 2
            setBoardHuman(coordinates)
        }
        else if (coordinates[indexRow][indexBox] == null) {
            coordinates[indexRow][indexBox] = 3
            setBoardHuman(coordinates)
        }
        console.log("TIRO EN LA BOX POR MACHINE", indexRow, indexBox)
    }

    useEffect(() => {
        if (turn != 0) {
            getGunShotMachine()
        }
    }, [turn])

    return (
        <>
            <ContainerSquare>
                {
                    (boardHuman != null) &&
                    boardHuman.map((row, indexRow) => (
                        <span key={indexRow}>
                            {row.map((box, indexBox) => (
                                <Square key={indexBox} getFunction={() => {addShip(indexRow, indexBox)}}>{box}</Square>
                            ))}
                        </span>
                    ))
                }
            </ContainerSquare>
        </>
    )
}

export default Human;















