import React, { useState, useEffect } from "react";
import Square from "./Square";
import { buildBoard } from "../functions";


const Human = ({ turn }) => {
    const [human, setHuman] = useState({
        board: buildBoard(),
        nameShip: "Porta Aviones"
    });

    const addShip = (indexFirstDimension, indexSecondDimension, size, position) => {
        if (position === "horizontal") {
            let board = [...human.board]
            let first = board[indexFirstDimension]
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
            }
            else {
                alert("Posicionamiento inválido")
            }
            console.log("DESPLIEGUE PIEZAS HUMAN HORIZONTAL", board)
            setHuman({
                board: board,
                ...human
            })
        }

        else if (position === "vertical") {
            let board = [...human.board]
            let ship = indexFirstDimension + size
            let boxsInvalids = false

            for (let i = indexFirstDimension; i < ship; i++) {
                if (board[i][indexSecondDimension] == "") {
                    boxsInvalids = true
                }
            }

            if (boxsInvalids == false) {
                for (let i = indexFirstDimension; i < ship; i++) {
                    board[i][indexSecondDimension] = "";
                }
            }
            else {
                alert("Posicionamiento inválido")
            }
            console.log("DESPLIEGUE PIEZAS HUMAN VERTICAL", board)
            setHuman({
                board: board,
                ...human
            })
        }
    }

    const selectShip = () => {
        const namesShips = ["Porta Aviones", "Acorazado", "Destructor", "Submarino", "Bote Patrulla"]
        if (human.nameShip === "Porta Aviones") {
            setHuman({
                ...human,
                nameShip: namesShips[1]
            })
        } else if (human.nameShip === "Acorazado") {
            setHuman({
                ...human,
                nameShip: namesShips[2]
            })
        } else if (human.nameShip === "Destructor") {
            setHuman({
                ...human,
                nameShip: namesShips[3]
            })
        } else if (human.nameShip === "Submarino") {
            setHuman({
                ...human,
                nameShip: namesShips[4]
            })
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
                                    <Square key={indexBox} getFunction={(positions) => {
                                        if (human.nameShip === "Porta Aviones") {
                                            if (positions == "horizontal") {
                                                addShip(indexRow, indexBox, 5, positions)
                                            }
                                            else if (positions == "vertical") {
                                                addShip(indexRow, indexBox, 5, positions)
                                            }
                                        }

                                        else if (human.nameShip === "Acorazado") {
                                            if (positions == "horizontal") {
                                                addShip(indexRow, indexBox, 4, positions)
                                            }
                                            else if (positions == "vertical") {
                                                addShip(indexRow, indexBox, 4, positions)
                                            }
                                        }

                                        else if (human.nameShip === "Destructor") {
                                            if (positions == "horizontal") {
                                                addShip(indexRow, indexBox, 3, positions)
                                            }
                                            else if (positions == "vertical") {
                                                addShip(indexRow, indexBox, 3, positions)
                                            }
                                        }

                                        else if (human.nameShip === "Submarino") {
                                            if (positions == "horizontal") {
                                                addShip(indexRow, indexBox, 3, positions)
                                            }
                                            else if (positions == "vertical") {
                                                addShip(indexRow, indexBox, 3, positions)
                                            }

                                        }

                                        else if (human.nameShip === "Bote Patrulla") {
                                            if (positions == "horizontal") {
                                                addShip(indexRow, indexBox, 2, positions)
                                            }
                                            else if (positions == "vertical") {
                                                addShip(indexRow, indexBox, 2, positions)
                                            }
                                        }
                                    }} human={human} setState={selectShip}>
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










