import React, { useState, useEffect } from "react";
import Square from "./Square";
import { buildBoard } from "../functions";


const Human = ({ turn }) => {
    const [human, setHuman] = useState({
        board: buildBoard(),
        nameShip: "Porta Aviones",
    });
    
    const addShip = (indexFirstDimension, indexSecondDimension, size, position) => {
        let coordinates = [...human.board]
        let nameShip = human.nameShip

        if (position == "horizontal") {
            let first = coordinates[indexFirstDimension]
            let ship = indexSecondDimension + size
            let boxsInvalids = false

            for (let i = indexSecondDimension; i < ship; i++) {
                if (first[i] == "") {
                    boxsInvalids = true
                }
            }

            if (boxsInvalids == false) {
                for (let i = indexSecondDimension; i < ship; i++) {
                    first[i] = ""
                }
                nameShip = selectShip()
            }
            else {
                alert("Posicionamiento inválido")
            }

            console.log("DESPLIEGUE PIEZAS HUMAN HORIZONTAL", coordinates) 
        }

        else if (position == "vertical") {
            let ship = indexFirstDimension + size
            let boxsInvalids = false

            for (let i = indexFirstDimension; i < ship; i++) {
                if (coordinates[i][indexSecondDimension] == "") {
                    boxsInvalids = true
                }
            }

            if (boxsInvalids == false) {
                for (let i = indexFirstDimension; i < ship; i++) {
                    coordinates[i][indexSecondDimension] = ""
                }
                nameShip = selectShip()
            }
            else {
                alert("Posicionamiento inválido")
            }

            console.log("DESPLIEGUE PIEZAS HUMAN VERTICAL", coordinates) 
        }
        setHuman({
            board: coordinates,
            nameShip
        })
    }

    const selectShip = () => {
        if (human.nameShip == "Porta Aviones") {
            return "Acorazado"
        }
        else if (human.nameShip == "Acorazado") {
            return "Destructor"
        }
        else if (human.nameShip == "Destructor") {
            return "Submarino"
        }
        else if (human.nameShip == "Submarino") {
            return "Bote Patrulla"
        }
    }

    const getGunShotMachine = () => {
        let coordinates = [...human.board];
        let indexRow = Math.floor(Math.random() * 9);
        let indexBox = Math.floor(Math.random() * 9);
        if (coordinates[indexRow][indexBox] == "") {
            coordinates[indexRow][indexBox] = "Y"
        }
        else if (coordinates[indexRow][indexBox] == null) {
            coordinates[indexRow][indexBox] = "N"
        }
        console.log("TIRO DE MACHINE", indexRow, indexBox)
        console.log("VERIFICACIÓN DE TIRO MACHINE", coordinates[indexRow][indexBox])
        return coordinates
    }

    useEffect(() => {
        if (turn != 0) {
            setHuman({
                board: getGunShotMachine(),
                ...human
            })
        }

    }, [turn])

    return (
        <>
            <div id="board">
                {
                    (human.board != null) &&
                    human.board.map((row, indexRow) => (
                        <span key={indexRow}>
                            {
                                row.map((box, indexBox) => (
                                    <Square key={indexBox} human={human} onAddShip={(positions) => {
                                        if (human.nameShip === "Porta Aviones") {
                                            addShip(indexRow, indexBox, 5, positions)
                                        }
                                        else if (human.nameShip === "Acorazado") {
                                            addShip(indexRow, indexBox, 4, positions)
                                        }
                                        else if (human.nameShip === "Destructor") {
                                            addShip(indexRow, indexBox, 3, positions)
                                        }
                                        else if (human.nameShip === "Submarino") {
                                            addShip(indexRow, indexBox, 3, positions)
                                        }
                                        else if (human.nameShip === "Bote Patrulla") {
                                            addShip(indexRow, indexBox, 2, positions)
                                        }
                                    }}>
                                        {box}
                                    </Square>
                                ))
                            }
                        </span>
                    ))
                }
                <div className="text-center">
                    <span>Haz clikc en una coordenada para inciar posicionamiento del {human.nameShip}</span>
                </div>
            </div>
        </>
    )
}

export default Human
















