import React, { useEffect, useState } from "react";
import { showBoardHuman } from "../functions";



const BoardHuman = ({ turn }) => {
    const [boardHuman, setBoardHuman] = useState(showBoardHuman());

    const addShip = (indexRow, indexBox) => {
        let shipInBoard = [...boardHuman];
        shipInBoard[indexRow].splice(indexBox, 5, "", "", "", "", "")
        console.log("DESPLIEGUE DE PIEZAS HUMAN", shipInBoard)
        setBoardHuman(shipInBoard)
    }

    const getGunShotMachine = () => {
        let coordinates = [...boardHuman];
        let indexRow = Math.floor(Math.random() * 9);
        let indexBox = Math.floor(Math.random() * 9);
        if (coordinates[indexRow][indexBox] == "") {
            coordinates[indexRow][indexBox] = "I HIT YOU!"
            setBoardHuman(coordinates)
        }
        else if (coordinates[indexRow][indexBox] == null) {
            coordinates[indexRow][indexBox] = "I FAILED!"
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
            <div id="board">
                {
                    (boardHuman != null) &&
                    boardHuman.map((row, indexRow) => (
                        <div key={indexRow}>
                            {row.map((box, indexBox) => (
                                <button key={indexBox} onClick={() => addShip(indexRow, indexBox)} id="box" type="button" className="btn btn-light">{box}</button>
                            ))}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BoardHuman;












