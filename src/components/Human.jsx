import React, { useState, useEffect } from "react";
import Square from "./Square";
import { buildBoard, getGunShotMachine, addShip } from "../functions";


const Human = ({ turn }) => {
    const [boardHuman, setBoardHuman] = useState(buildBoard());
    const [nameShip, setNameShip] = useState("Porta Aviones");

    const selectShip=()=>{
        const namesShips = ["Porta Aviones", "Acorazado", "Destructor", "Submarino", "Bote Patrulla"]
        if(nameShip === "Porta Aviones"){
            setNameShip(namesShips[1])
        }else if(nameShip === "Acorazado"){
            setNameShip(namesShips[2])
        }else if(nameShip === "Destructor"){
            setNameShip(namesShips[3])
        }else if(nameShip === "Submarino"){
            setNameShip(namesShips[4])
        }
    }

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
                                    if(nameShip === "Porta Aviones"){
                                        if (positions == "horizontal") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 5, positions))
                                        }else if (positions == "vertical") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 5, positions))
                                        }
                                        
                                    }else if(nameShip === "Acorazado"){
                                        if (positions == "horizontal") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 4, positions))
                                        }else if (positions == "vertical") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 4, positions))
                                        }
                                        
                                    }else if(nameShip === "Destructor"){
                                        if (positions == "horizontal") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 3, positions))
                                        }else if (positions == "vertical") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 3, positions))
                                        }
                                        
                                    }else if(nameShip === "Submarino"){
                                        if (positions == "horizontal") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 3, positions))
                                        }else if (positions == "vertical") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 3, positions))
                                        }
                                        
                                    }else if(nameShip === "Bote Patrulla"){
                                        if (positions == "horizontal") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 2, positions))
                                        }else if (positions == "vertical") {
                                            setBoardHuman(addShip(boardHuman, indexRow, indexBox, 2, positions))
                                        }
                                    }
                                }} boardHuman={boardHuman} name={nameShip} setState={selectShip}>
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



                                        

