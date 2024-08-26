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
            {/* COMPONENTE QUE MUESTRA LOS VALORES PARA TABLERO HUMANO */}
            <SquareBoard turn={turn} boardHuman={boardHuman} setBoardHuman={setBoardHuman} />

            {/* COMPONENTE QUE MUESTRA LOS VALORES PARA TABLERO MACHINE */}
            <SquareBoard setTurn={setTurn} boardMachine={boardMachine} setBoardMachine={setBoardMachine} /> 
        </>
    )
}

export default SquareContainer;


















