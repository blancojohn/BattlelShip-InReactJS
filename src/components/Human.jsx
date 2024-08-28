import React, { useState, useEffect } from "react";
import Square from "./Square";
import { buildBoard, getGunShotMachine, addShipHorizontal, addShipVertical } from "../functions";


const Human = ({ turn }) => {
    const [boardHuman, setBoardHuman] = useState(buildBoard());
    const [nameShip, setNameShip] = useState("Porta Aviones")

    useEffect(() => {
        if (turn != 0) {
            setBoardHuman(getGunShotMachine(boardHuman))
        }
    }, [turn])

    return (
        <>
            <div id="board">
                {
                    (boardHuman != null) &&
                    boardHuman.map((row, indexRow) => (
                        <span key={indexRow}>
                            {row.map((box, indexBox) => (
                                <Square key={indexBox} getFunction={(positions) => {
                                    if (positions == "horizontal") {
                                        setBoardHuman(addShipHorizontal(boardHuman, indexRow, indexBox, 5))
                                    }
                                    else if (positions == "vertical") {
                                        setBoardHuman(addShipVertical(boardHuman, indexRow, indexBox, 5))
                                    }
                                }} boardHuman={boardHuman} setNameShip={setNameShip}>
                                    {box}
                                </Square>
                            ))}
                        </span>
                    ))
                }
                <div className="text-center">
                    <span>Haz clikc en una coordenada para inciar posicionamiento del {nameShip}</span>
                </div>
            </div>
        </>
    )
}

export default Human


