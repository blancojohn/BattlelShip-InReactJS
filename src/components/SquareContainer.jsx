import React, { useState, useEffect } from "react";
import { getGunShotMachine } from "../functions";
import SquareBoard from "./SquareBoard";
import { buildBoard } from "../functions";

const SquareContainer = () => {

    const [boardHuman, setBoardHuman] = useState(buildBoard());
    const [boardMachine, setBoardMachine] = useState(buildBoard());
    const [turn, setTurn] = useState(0);

    useEffect(() => {
        if (turn != 0) {
            setBoardHuman(getGunShotMachine(boardHuman))
        }
    }, [turn])

    return (
        <>  
            <SquareBoard turn={turn} boardHuman={boardHuman} setBoardHuman={setBoardHuman} />
            <SquareBoard setTurn={setTurn} boardMachine={boardMachine} setBoardMachine={setBoardMachine} /> 
        </>
    )
}

export default SquareContainer;


















