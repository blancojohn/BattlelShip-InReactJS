import React from "react";
import Square from "./Square";
import { addShipHorizontal, addShipVertical, getGunShotHuman } from "../functions";


const SquareBoard = ({ boardHuman, setBoardHuman, boardMachine, setBoardMachine, setTurn }) => {
    return (
        <>
            {/* TABLERO HUMANO */}
            <div id="board">
                {
                    (boardHuman != null) &&
                    boardHuman.map((row, indexRow) => (
                        <span key={indexRow}>
                            {row.map((box, indexBox) => (
                                <Square key={indexBox} getFunction={(positions) => {
                                    if (positions == "horizontal") {
                                        setBoardHuman(addShipHorizontal(boardHuman, indexRow, indexBox, 4))
                                    }
                                    else if (positions == "vertical") {
                                        setBoardHuman(addShipVertical(boardHuman, indexRow, indexBox, 5))
                                    }
                                }}boardHuman={boardHuman}>
                                    {box}
                                </Square>
                            ))}
                        </span>
                    ))
                }
                {/* TABLERO MACHINE */}
                {
                    (boardMachine != null) &&
                    boardMachine.map((row, indexRow) => (
                        <span key={indexRow}>
                            {row.map((box, indexBox) => (
                                <Square key={indexBox} get={() => { setBoardMachine(getGunShotHuman(boardMachine, indexRow, indexBox)), setTurn(prevCount => prevCount + 1) }}>{box}</Square>
                            ))}
                        </span>
                    ))
                }
            </div>
        </>
    )
}

export default SquareBoard


