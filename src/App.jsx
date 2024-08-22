import React, { useState } from "react";
import Machine from "./components/Machine";
import Human from "./components/Human";
import ContainerSquare from "./components/ContainerSquare";
import Square from "./components/Square";
import { buildBoard, addShipVertical, addShipHorizontal, getGunShotHuman } from "./functions";


const App = () => {

    const [turn, setTurn] = useState(0);
    const [boardHuman, setBoardHuman] = useState(buildBoard());
    const [boardMachine, setBoardMachine] = useState(buildBoard());
 
    return (
        <>  
        {/* TABLERO HUMANO */}
            <Human turn={turn} boardHuman={boardHuman} setBoardHuman={setBoardHuman}>
                <ContainerSquare>
                    {
                        (boardHuman != null) &&
                        boardHuman.map((row, indexRow) => (
                            <span key={indexRow}>
                                {row.map((box, indexBox) => (
                                    <Square key={indexBox} getFunction={(positions) => {
                                        if(positions == "horizontal"){
                                            setBoardHuman(addShipHorizontal(boardHuman, indexRow, indexBox, 4)) 

                                        } 
                                        
                                        else if(positions == "vertical"){
                                            setBoardHuman(addShipVertical(boardHuman, indexRow, indexBox, 5))

                                        } 
                                    }}>
                                        {box}
                                    </Square>
                                ))}
                            </span>
                        ))
                    }
                </ContainerSquare>
            </Human>
        {/* TABLERO MACHINE */}
            <Machine setTurn={setTurn} boardMachine={boardMachine} setBoardMachine={setBoardMachine}>
                <ContainerSquare>
                    {
                        (boardMachine != null) &&
                        boardMachine.map((row, indexRow) => (
                            <span key={indexRow}>
                                {row.map((box, indexBox) => (
                                    <Square key={indexBox} getFunction={() => { setBoardMachine(getGunShotHuman(boardMachine, indexRow, indexBox)), setTurn(prevCount=> prevCount + 1) }}>{box}</Square>
                                ))}
                            </span>
                        ))
                    }
                </ContainerSquare>
            </Machine>
        </>
    )
}

export default App
            












                                        










