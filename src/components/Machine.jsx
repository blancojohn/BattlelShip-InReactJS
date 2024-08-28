import React, { useState } from "react";
import Square from "./Square";
import { buildBoard, getGunShotHuman } from "../functions";

const Machine = ({ setTurn }) => {

    const [boardMachine, setBoardMachine] = useState(buildBoard());

    return (
        <>
            <div id="board">
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

export default Machine;




















